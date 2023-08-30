require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const QUICKNODE_API_KEY = process.env.REACT_APP_QUICKNODE_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      // url: `https://magical-floral-rain.ethereum-goerli.discover.quiknode.pro/${QUICKNODE_API_KEY}`,
      // accounts: [PRIVATE_KEY]
      url: "https://magical-floral-rain.ethereum-goerli.discover.quiknode.pro/24871c347f464921e80a8a16066873e1d0d70cf9",
      accounts: ["b5d83829331649e3ba4d8e150df8e9c88657ac3eed09293892cd22be21d41a78"]
    }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
