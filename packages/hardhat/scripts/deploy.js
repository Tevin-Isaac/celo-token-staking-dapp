const { ethers } = require("hardhat");
async function main() {
  //call the contracts;
  const testToken = await ethers.getContractFactory("TestToken");
  const tokenStakingContract = await ethers.getContractFactory("TokenStaking");

  //deploy the contracts
  //deploy the testToken contract
  const testTokenDeploy = await testToken.deploy();
  await testTokenDeploy.deployed();
  //get the address of the testToken contract
  console.log("TestTokenAddress:", testTokenDeploy.address);
  //deploy the tokenStaking contract
  const tokenStakingDeploy = await tokenStakingContract.deploy(testTokenDeploy.address);
  await tokenStakingDeploy.deployed();
  console.log("TokenStaking:", tokenStakingDeploy.address);
 
}
//call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
