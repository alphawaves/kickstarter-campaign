require('dotenv').config();

module.exports = {
    env: {
      ethereumEndpoint: process.env.ETHEREUM_ENDPOINT,
      contractAddress: process.env.CONTRACT_ADDRESS,
    }
}