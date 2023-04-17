Script to deploy


Inside hardhat folder, create a .env file to store the required private keys from your wallet to deploy the contract.

```
MNEMONIC=""
PRIVATE_KEY=""


```
Hardhat deploy script

```
npx hardhat run scripts/deploy.js --network alfajores

```

Deployed contracts: 

TestTokenAddress: 0x6A5a84A51fE790077A184CDEF57b728345FAc63b
TokenStaking: 0x65D5618b1430793ac74eCf4a1E2316e2d0AA14CE
