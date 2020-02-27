import Web3 from 'web3';
import secrets from '../secrets.json'


// let web3;
// if(typeof window !== 'undefined' && typeof window.web3 !== undefined) {
//     web3 = new Web3(window.web3.currentProvider);
// }
// else {
//     const provider = new Web3.providers.HttpProvider(process.env.ethereumEndpoint)
//     web3 = new Web3(provider);
// }

async function enableEthereum() {
    try {
        await window.ethereum.enable()
    } catch (e) {
        console.log('User denied account access...')
    }
}

let web3;
if(typeof window !== 'undefined' && typeof window.ethereum !== undefined) {
    web3 = new Web3(window.ethereum);
    enableEthereum()
}
else {
    const provider = new Web3.providers.HttpProvider(process.env.ethereumEndpoint)
    web3 = new Web3(provider);
}

export default web3;