import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    axiomesh: {
      url: "https://rpc1.aries.axiomesh.io",
      accounts: process.env.PK !== undefined ? [process.env.PK] : [],
    },
  },
};

export default config;
