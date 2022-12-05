package main

import (
	"fmt"
	"os/exec"
	"strconv"
	"strings"
	"time"

	"google.golang.org/grpc"

	"nti/scripts/check"
	"nti/x/nti/keeper"
	"nti/x/nti/types"
)

const checkIsNftRecievedPath = "/Users/rika/work/src/adon/nti/alchemy/check-is-nft-recieved.js"
const mintNftDir = "/Users/rika/work/src/learn/eth/my-nft"
const mintNftPath = mintNftDir + "/scripts/mint-nft.js"
const validSecond = 10 * 60

type IsConfirmed int

const (
	False IsConfirmed = iota
	True
)

func checkIsNftRecieved(reservedNftTransfer types.ReservedNftTransfer) (bool, error) {
	fmt.Println("Check whether the NFT is recieved...")

	out, err := exec.Command(
		"node",
		checkIsNftRecievedPath,
		reservedNftTransfer.NftSrcAddr,
		reservedNftTransfer.NftTokenId,
	).Output()
	if err != nil {
		fmt.Println(err)
		return false, err
	}

	outString := strings.TrimRight(string(out), "\n")
	outInt, err := strconv.Atoi(outString)
	if err != nil {
		fmt.Println(err)
		return false, err
	}

	switch IsConfirmed(outInt) {
	case False:
		return false, nil
	case True:
		return true, nil
	default:
		// TODO: エラーを生成
		return false, err
	}
}

func mintNft(reservedNftTransfer types.ReservedNftTransfer) error {
	fmt.Println("Mint NFT...")
	fmt.Println(reservedNftTransfer.NftDestAddr)

	cmd := exec.Command(
		"node",
		mintNftPath,
		reservedNftTransfer.NftDestAddr,
	)
	cmd.Dir = mintNftDir
	out, err := cmd.Output()
	if err != nil {
		fmt.Println(err)
		return err
	}
	fmt.Println(string(out))

	return nil
}

func isReserveExpired(reserveNftTransfer types.ReservedNftTransfer) bool {
	fmt.Println("Check whether the reserve is expired...")

	// 現在時刻が予約の有効期限を過ぎているか
	return int(time.Now().Unix()) > int(reserveNftTransfer.CreatedAt)+validSecond
}

func main() {
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
	reservedKeys, err := check.GetReservedKeysOf(keeper.Reserved, queryClient)
	if err != nil {
		fmt.Println(err)
	}

	for _, reservedKey := range reservedKeys {
		reservedNftTransfer, err := check.GetReservedNftTransfer(reservedKey, queryClient)
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
			err = check.ChangeStatus(reservedKey, keeper.Confirmed)
			if err != nil {
				fmt.Println(err)
				continue
			}
		} else {
			// 期限切れの場合
			isExpired := isReserveExpired(reservedNftTransfer)
			fmt.Printf("Check result is %v.\n", isExpired)

			if isExpired {
				err = check.ChangeStatus(reservedKey, keeper.Expired)
				if err != nil {
					fmt.Println(err)
					continue
				}
			}
		}
	}

	// Mint NFT for the confirmed reserves.
	fmt.Println("Mint NFTs...")
	confirmedKeys, err := check.GetReservedKeysOf(keeper.Confirmed, queryClient)
	if err != nil {
		fmt.Println(err)
	}

	for _, reservedKey := range confirmedKeys {
		reservedNftTransfer, err := check.GetReservedNftTransfer(reservedKey, queryClient)
		if err != nil {
			fmt.Println(err)
			continue
		}

		// Mint NFT
		err = mintNft(reservedNftTransfer)
		if err != nil {
			fmt.Println(err)
			continue
		}

		err = check.ChangeStatus(reservedKey, keeper.Waiting)
		if err != nil {
			fmt.Println(err)
			continue
		}
	}
}