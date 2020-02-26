pragma solidity >= 0.5.0 < 0.7.0;

contract Campaign {
  struct Request {
    string description;
    uint value;
    address payable recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }

  Request[] public requests;
  address public manager;
  uint public minimumContribution;
  mapping(address => bool) public approvers;
  uint public approversCount;

  modifier restricted() {
    require(msg.sender == manager, "The sender is unauthorized to perform this action.");
    _;
  }

  constructor(uint minimum, address creator) public {
    manager = creator;
    minimumContribution = minimum;
  }

  function contribute() public payable {
    require(msg.value > minimumContribution, "The amount paid does not meet the minimum contribution requirement.");

    approvers[msg.sender] = true;
    approversCount++;
  }

  function createRequest(string memory description, uint value, address payable recipient) public restricted {
    Request memory newRequest = Request ({
      description: description,
      value: value,
      recipient: recipient,
      complete: false,
      approvalCount: 0
    });

    requests.push(newRequest);
  }

  function approveRequest(uint index) public {
    Request storage request = requests[index];
    
    require(approvers[msg.sender], "The sender is not authorized to perform this action");
    require(!request.approvals[msg.sender], "The sender has already approved this request");

    request.approvals[msg.sender] = true;
    request.approvalCount++;
  }

  function finalizeRequest(uint index) public restricted {
    Request storage request = requests[index];

    require(request.approvalCount > (approversCount / 2), "Not enough approvers have approved this request.");
    require(!request.complete, "This request has already been finalized.");


    request.recipient.transfer(request.value);
    request.complete = true;
  }
}
