// cmd: node file-path.js from-address token-id

require('dotenv').config();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const fromAddress = process.argv[2]

const runApp = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
    // ...and any other configuration
  });
  
  const address = process.env.CONTRACT_ADDRESS;
  const chain = EvmChain.GOERLI;
  const tokenId = process.argv[3];

  const response = await Moralis.EvmApi.nft.getNFTMetadata({
      address,
      chain,
      tokenId,
  });

  const ownerAddress = response.toJSON().owner_of;

  if (ownerAddress == process.env.ADMIN_ADDRESS) {
      console.log("1");
  } else {
      console.log("0");
  }
}

runApp();