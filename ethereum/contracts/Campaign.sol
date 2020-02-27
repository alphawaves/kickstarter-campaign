pragma solidity >= 0.5.0 < 0.7.0;

/// @title A crowdfunding campaign contract
/// @author Author_Name_Goes_Here
/// @notice You can use this contract to create a basic campaign, contribute, and manage spending requests
/// @dev Any notes for the devs go here
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

  /// @notice Contribute funds to a campaign
  function contribute() public payable {
    require(msg.value > minimumContribution, "The amount paid does not meet the minimum contribution requirement.");

    approvers[msg.sender] = true;
    approversCount++;
  }

  /// @notice Request a payment from the campaign fund
  /// @dev Only contract manager is authorized to perform this action
  /// @param description The purpose of the request
  /// @param value The amount you want to request (in wei)
  /// @param recipient The address you are requesting the amount to be sent to
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

  /// @notice Approve a payment request
  /// @param index The index of the request to be approved
  function approveRequest(uint index) public {
    Request storage request = requests[index];
    
    require(approvers[msg.sender], "The sender is not authorized to perform this action");
    require(!request.approvals[msg.sender], "The sender has already approved this request");

    request.approvals[msg.sender] = true;
    request.approvalCount++;
  }

  /// @notice Finalize a request and pay out the funds
  /// @param index The index of the request to be finalized
  function finalizeRequest(uint index) public restricted {
    Request storage request = requests[index];

    require(request.approvalCount > (approversCount / 2), "Not enough approvers have approved this request.");
    require(!request.complete, "This request has already been finalized.");


    request.recipient.transfer(request.value);
    request.complete = true;
  }

  /// @notice Get a summary of contract data for our DApp
  /// @dev This function is for convenience so that we don't have to make a separate
  /// request for each public variable
  /// @return minimum contribution required to become an approver
  /// @return balance/current funds in the campaign
  /// @return number of open requests
  /// @return number of approvers in the campaign
  /// @return the manager of the campaign
  function getSummary() public view returns (uint, uint, uint, uint, address) {
    return (
      minimumContribution,
      address(this).balance,
      requests.length,
      approversCount,
      manager
    );
  }

/// @notice Get the number of payment requests to the campaign
/// @return the number of requests
  function getRequestCount() public view returns (uint) {
    return requests.length;
  }
}
