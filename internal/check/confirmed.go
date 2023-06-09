package check

import (
	"fmt"
	"os/exec"
	"strconv"
	"time"

	"google.golang.org/grpc"

	"nti/internal/enum"
	"nti/internal/util"
	"nti/x/nti/types"
)

const mintNftDir = "/Users/rika/work/src/learn/eth/my-nft"
const mintNftPath = mintNftDir + "/scripts/mint-nft.js"

func isReserveExpired(reserveNftTransfer types.ReservedNftTransfer) bool {
	fmt.Println("Check whether the reserve is expired...")

	// 現在時刻が予約の有効期限を過ぎているか
	return int(time.Now().Unix()) > int(reserveNftTransfer.CreatedAt)+validSecond()
}

func checkIsNftRecieved(reservedNftTransfer types.ReservedNftTransfer) (bool, error) {
	fmt.Println("Check whether the NFT is recieved...")

	out, err := exec.Command(
		"node",
		isNftRecievedPath(),
		reservedNftTransfer.NftSrcAddr,
		reservedNftTransfer.NftTokenId,
	).Output()
	if err != nil {
		fmt.Println(err)
		return false, err
	}

	outInt, err := strconv.Atoi(util.OutToString(out))
	if err != nil {
		fmt.Println(err)
		return false, err
	}

	switch ResultBool(outInt) {
	case False:
		return false, nil
	case True:
		return true, nil
	default:
		// TODO: エラーを生成
		return false, err
	}
}

func mintNft(reservedNftTransfer types.ReservedNftTransfer, tokenUri string) (string, error) {
	fmt.Println("Mint NFT...")

	cmd := exec.Command(
		"node",
		mintNftPath,
		reservedNftTransfer.NftDestAddr,
		tokenUri,
		"1", // contract-address-type [ 0: source, 1: dest ]
	)
	cmd.Dir = mintNftDir
	out, err := cmd.Output()
	if err != nil {
		fmt.Println(err)
		return "", err
	}

	transactionHash := util.OutToString(out)
	fmt.Printf("NFT Minted! Check it out at: https://goerli.etherscan.io/tx/%s\n", transactionHash)

	return transactionHash, nil
}

func createNftMint(reservedKey, transactionHash, tokenUri string) error {
	fmt.Println("Create NFT mint...")

	err := exec.Command(
		"ntid",
		"tx",
		"nti",
		"create-nft-mint",
		reservedKey,
		transactionHash,
		tokenUri,
		"--fees",
		fees(),
		"--from",
		"bob",
		"-y",
	).Run()
	if err != nil {
		fmt.Println(err)
		return err
	}

	return nil
}

func CheckIsConfirmed() {
	// Create a connection to the gRPC server.
	grpcConn, err := grpc.Dial(
		"127.0.0.1:9090",    // your gRPC server address.
		grpc.WithInsecure(), // The Cosmos SDK doesn't support any transport security mechanism.
	)
	if err != nil {
		fmt.Println(err)
	}
	defer grpcConn.Close()

	// This creates a gRPC client to query the x/nti service.
	queryClient := types.NewQueryClient(grpcConn)

	// Check reserved keys.
	fmt.Println("Check reserved keys...")
	reservedKeys, err := getReservedKeysOf(enum.Reserved, queryClient)
	if err != nil {
		fmt.Println(err)
	}

	for _, reservedKey := range reservedKeys {
		reservedNftTransfer, err := getReservedNftTransfer(reservedKey, queryClient)
		if err != nil {
			fmt.Println(err)
			continue
		}

		isConfirmed, err := checkIsNftRecieved(reservedNftTransfer)
		if err != nil {
			fmt.Println(err)
			continue
		}
		fmt.Printf("Check result is %v.\n", isConfirmed)

		if isConfirmed {
			err = changeStatus(reservedKey, enum.Confirmed)
			if err != nil {
				fmt.Println(err)
				continue
			}
		} else {
			// 期限切れの場合
			isExpired := isReserveExpired(reservedNftTransfer)
			fmt.Printf("Check result is %v.\n", isExpired)

			if isExpired {
				err = changeStatus(reservedKey, enum.Expired)
				if err != nil {
					fmt.Println(err)
					continue
				}
			}
		}
	}

	// Mint NFT for the confirmed reserves.
	fmt.Println("Mint NFTs...")
	confirmedKeys, err := getReservedKeysOf(enum.Confirmed, queryClient)
	if err != nil {
		fmt.Println(err)
	}

	for _, reservedKey := range confirmedKeys {
		reservedNftTransfer, err := getReservedNftTransfer(reservedKey, queryClient)
		if err != nil {
			fmt.Println(err)
			continue
		}

		tokenUri, err := GetTokenUri(reservedNftTransfer.NftTokenId)
		if err != nil {
			fmt.Println(err)
			continue
		}

		// Mint NFT
		transactionHash, err := mintNft(reservedNftTransfer, tokenUri)
		if err != nil {
			fmt.Println(err)
			continue
		}

		// Create NFT mint
		err = createNftMint(reservedKey, transactionHash, tokenUri)
		if err != nil {
			fmt.Println(err)
			continue
		}

		err = changeStatus(reservedKey, enum.Waiting)
		if err != nil {
			fmt.Println(err)
			continue
		}
	}
}
