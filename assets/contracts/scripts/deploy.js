const hre = require("hardhat");

async function main() {
  const SimpleStaking = await hre.ethers.getContractFactory("SimpleStaking");
  const staking = await SimpleStaking.deploy();
  await staking.deployed();

  console.log(`✅ Contract deployed to: ${staking.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
