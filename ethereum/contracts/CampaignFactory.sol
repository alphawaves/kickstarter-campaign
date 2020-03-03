pragma solidity >= 0.5.0 < 0.7.0;

import "./Campaign.sol";

contract CampaignFactory {
  address[] public deployedCampaigns;

  constructor() public {
  }

  function createCampaign(uint minimum) public {
    Campaign newCampaign = new Campaign(minimum, msg.sender);
    deployedCampaigns.push(address(newCampaign));
  }

   function getDeployedCampaigns() public view returns(address[] memory) {
     return deployedCampaigns;
   }
}
