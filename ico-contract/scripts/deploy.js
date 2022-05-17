const {ethers} = require("hardhat");
require("dotenv").config({path:".env"});
const {CRYPTO_DEVS_NFT_CONTACT_ADDRESS} = require("../constants");

async function main() {
    const cryptoDevsTokens = await ethers.getContractFactory("CryptoDevToken");
    const deployCryptoDevsTokenContract = await cryptoDevsTokens.deploy(CRYPTO_DEVS_NFT_CONTACT_ADDRESS);
    console.log(
        "CryptoDev Token Conract Address:",
        deployCryptoDevsTokenContract.address
    )
}

main()
.then(() => {process.exit(0)})
.catch((error) => {
    console.error(error);
    process.exit(1);
});