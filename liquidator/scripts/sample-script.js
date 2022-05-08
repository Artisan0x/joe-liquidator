// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const _joetrollerAddress = '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC'
const _joeRouter02Address = '0x60aE616a2155Ee3d9A68541Ba4544862310933d4'
const _jUSDCAddress = '0xEd6AaF91a2B084bd594DBd1245be3691F9f637aC'
const _jWETHAddress = '0x929f5caB61DFEc79a5431a7734a68D714C4633fa'

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Liquidator = await hre.ethers.getContractFactory("JoeLiquidator");
  const liquidator = await Liquidator.deploy(_joetrollerAddress, _joeRouter02Address, _jUSDCAddress, _jWETHAddress);

  await liquidator.deployed();

  console.log("Liquidator deployed to:", liquidator.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
