// require('dotenv').config();

import web3 from './web3';

import * as CampaignFactory from '../build/contracts/CampaignFactory';

// var fs = require('fs');
// var contract_abi = JSON.parse(fs.readFileSync('../build/contracts/CampaignFactory', 'utf8'));
// import secrets from "../secrets"

// const secret = JSON.parse(secrets)
// const abi = JSON.parse(CampaignFactory)
const abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deployedCampaigns",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minimum",
          "type": "uint256"
        }
      ],
      "name": "createCampaign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDeployedCampaigns",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

  // TODO: use fs.readFileSync for this? https://medium.com/@piyopiyo/how-to-get-contract-abi-in-truffle-22d0c0457ceb
const instance = new web3.eth.Contract(
  abi, process.env.contractAddress
)

export default instance;