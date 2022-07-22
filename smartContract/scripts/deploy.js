const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Sawti = await hre.ethers.getContractFactory("Sawti");
  const sawti = await Sawti.deploy();

  await sawti.deployed();

  console.log("Sawti deployed to:", sawti.address);

  fs.writeFileSync(
    "./config.js", `
    export const sawtiAddress = "${sawti.address}"`
  )

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
