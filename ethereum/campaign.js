import web3 from './web3';
import Campaign from './build/contracts/Campaign.json';

export default (address) => {
    const campaign = new web3.eth.Contract(
        Campaign.abi,
        address
    )

    return campaign;
}