require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "189b9adee6b048c093447d530decbe8ff"
module.exports = {
  networks :{
    hardhat: {
      chainId:1337
    },
    mumbai : {
      url: "https://polygon-mumbai.infura.io/v3/{projectId}",
      accounts: []
    },
    mainnet :{
      url: 'https://polygon-mumbai.infura.io/v3/{projectId}'
    }
  },
  solidity: "0.8.4",
};
