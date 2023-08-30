# DENS (ENS-Marketplace)
## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)
- [Arcana Network](https://www.arcana.network/)(Authentication SDk and wallet)
- [Quicknode](https://www.quicknode.com/)(RPC provider)



## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Setup .env file:
Before running any scripts, you'll want to create a .env file with the following values (see .env.example):

- **REACT_APP_QUICKNODE_KEY=""**
- **REACT_APP_ARCANA_APP_ID=""**
- **REACT_APP_ALCHMEY_API_KEY=""**
- **REACT_APP_PRIVATE_KEY=""**


#### You can get these keys from the link mentioned above

### 4. Deploying to goerli testnet

#### Configure  the hardhat.config.js file

```
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: "process.env.http://*****/REACT_APP_QUICKNODE_KEY",
      accounts: [PRIVATE_KEY] // Uses the private key from the .env file
    }
  }
};
```
#### After that run the command

`$ npx hardhat run ./scripts/deploy.js --network goerli`


### 5. Start frontend
`$ npm run start`


