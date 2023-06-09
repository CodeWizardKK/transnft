package nti

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"nti/x/nti/keeper"
	"nti/x/nti/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the nftTransfer
	for _, elem := range genState.NftTransferList {
		k.SetNftTransfer(ctx, elem)
	}
	// Set all the reservedNftTransfer
	for _, elem := range genState.ReservedNftTransferList {
		k.SetReservedNftTransfer(ctx, elem)
	}
	// Set if defined
	if genState.NftTransferStatus != nil {
		k.SetNftTransferStatus(ctx, *genState.NftTransferStatus)
	}
	// Set all the nftMint
	for _, elem := range genState.NftMintList {
		k.SetNftMint(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.NftTransferList = k.GetAllNftTransfer(ctx)
	genesis.ReservedNftTransferList = k.GetAllReservedNftTransfer(ctx)
	// Get all nftTransferStatus
	nftTransferStatus, found := k.GetNftTransferStatus(ctx)
	if found {
		genesis.NftTransferStatus = &nftTransferStatus
	}
	genesis.NftMintList = k.GetAllNftMint(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
