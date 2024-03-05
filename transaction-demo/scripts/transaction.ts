import * as dotenv from "dotenv";
import { ethers } from "hardhat";

(async () => {
  dotenv.config();

  // get provider
  const signers = await ethers.getSigners();
  const signer = signers[0];

  // put your receiver here
  const receiver = "0xDF721c726467bE31fcD5940Ca6FfF1Dea7f251B3";

  const txId = await signer.sendTransaction({
    to: receiver,
    value: ethers.parseEther("0.01"),
    gasLimit: 21000,
  })
  console.log("Transaction id", txId);
})();
