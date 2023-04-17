require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs
  .readFileSync('.secret')
  .toString()
  .trim();
const infuraKey = fs
  .readFileSync('.infuraKey')
  .toString()
  .trim();
const ethKey = fs
  .readFileSync('.ethKey')
  .toString()
  .trim();

// module.exports = {
//   networks: {
//     development: {
//       host: '127.0.0.1',
//       port: 7545,
//       network_id: '*', // Match any network id
//     },
module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    //ALFAJORES Test net
    alfajores: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://alfajores-forno.celo-testnet.org"
        );
      },
      network_id: 44787,
      gas: 20000000,
      deployTimeout: 300000,
      networkCheckTimeout: 300000,
    },

    //mainnet
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://forno.celo.org");
      },
      network_id: 42220,
      gas: 4000000,
      deployTimeout: 300000,
      networkCheckTimeout: 300000,
    },
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // compilers: {
  //   solc: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 200,
  //     },
  //     evmVersion: 'petersburg',
  //   },
  // },
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

  //etherscan API key
  api_keys: {
    etherscan: ethKey,
  },
  // plugin for verification
  plugins: ['truffle-plugin-verify'],
};

//truffle test

// call console - truffle console
// get contract - await TestToken.deployed()

// to compile - truffle compile
// to deploy - truffle migrate --reset
// to deploy - truffle migrate --network rinkeby --reset
// to verify - truffle run verify Contract --network rinkeby
