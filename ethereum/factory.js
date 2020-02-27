// require('dotenv').config();

import web3 from './web3';

import CampaignFactory from './build/contracts/CampaignFactory';

const instance = new web3.eth.Contract(
  CampaignFactory.abi, process.env.contractAddress
)

export default instance;