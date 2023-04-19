require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'awesome pear drive venture sign toast tide much hundred floor adapt attend';

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    alfajores: {
      provider: function() {
        return new HDWalletProvider(mnemonic,'https://alfajores-forno.celo-testnet.org');
      },
      host: "https://alfajores-forno.celo-testnet.org",
      port: 443,
      network_id: 44787, // The network ID for Alfajores testnet
      gas: 8000000, // Gas limit used for deployments
      gasPrice: 1000000000, // Gas price used for transactions
      deployTimeout: 300000,
      networkCheckTimeout: 300000,
    },
  },
  mainnet: {
    provider: function () {
      return new HDWalletProvider(mnemonic, "https://forno.celo.org");
    },
    network_id: 42220,
    gas: 4000000,
    deployTimeout: 300000,
    networkCheckTimeout: 300000,
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

    // plugin for verification
    plugins: ['truffle-plugin-verify'],
};
