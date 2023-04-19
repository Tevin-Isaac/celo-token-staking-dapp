require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "awesome pear drive venture sign toast tide much hundred floor adapt attend"; // replace with your MNEMONIC

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    alfajores: {
      provider: () => new HDWalletProvider(mnemonic, "https://alfajores-forno.celo-testnet.org"),
      network_id: 44787,
      gas: 5000000,
      gasPrice: 1000000000 // 1 gwei
    },

    // contracts_directory: './src/contracts/',
    // contracts_build_directory: './src/abis/',


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
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

    // plugin for verification
    plugins: ['truffle-plugin-verify'],
};
