const CampaignFactory = artifacts.require("CampaignFactory");
const Campaign = artifacts.require("Campaign");

contract("CampaignFactory", accounts => {
  let campaignFactory;
  const creator = accounts[0];
  const campaignCreator = accounts[1];
  let campaignAddress;
  let campaign;

  beforeEach(async function() {
    campaignFactory = await CampaignFactory.new();
    await campaignFactory.createCampaign(100, {from: campaignCreator});

    [campaignAddress] = await campaignFactory.getDeployedCampaigns();

    campaign = await Campaign.at(campaignAddress);

    // TODO: figure out a way to reset account balances here.
  });

  it('deploys a factory and a campaign', async function() {
      assert.ok(campaignFactory.address);
      assert.ok(campaign.address);
  })

  it("should create a new campaign on behalf of the sender", async function() {
    const deployedContractManager = await campaign.manager()

    assert.equal(deployedContractManager, campaignCreator);
  });

  it('allows people to contribute money and marks them as approvers', async function() {
      await campaign.contribute({from: accounts[2], value: '200'});

      const isApprover = campaign.approvers(accounts[2]);

      assert(isApprover);
  })

  it('requires a minimum contribution', async function() {
      try {
        await campaign.contribute({from: accounts[2], value: '50'})
      } catch(e) {
          // console.log(e)
        assert(e)
        assert.equal(e.reason, 'The amount paid does not meet the minimum contribution requirement.')
      }
  })

  it('allows a manager to make a payment request', async function() {
    await campaign.createRequest('Buy supplies', '100', accounts[3], {from: campaignCreator});

    const request = await campaign.requests(0);

    assert.equal(request.description, 'Buy supplies');
  })

  it('processes requests', async function() {
    await campaign.contribute({from: accounts[2], value: '200'})

    await campaign.createRequest('Buy supplies', '100', accounts[3], {from: campaignCreator});

    await campaign.approveRequest(0, {from: accounts[2]});

    await campaign.finalizeRequest(0, {from: campaignCreator})

    // let weiBalance = new BigNumber(await web3.eth.getBalance(accounts[3]))

    // let balance = web3.utils.fromWei(weiBalance, 'ether');
    // balance = parseFloat(balance);

    let Balance = web3.utils.toBN(web3.utils.toWei('100', 'ether'));
    let actualBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[3]));

    assert.equal(expectedBalance.cmp(actualBalance), -1);
  })

  // it('has a symbol', async function () {
  //     const symbol = await token.symbol();
  //     assert.equal(symbol, 'GLD');
  //   });
  // // it('has 18 decimals', async function () {
  // //     const decimals = await token.decimals();
  // //     assert(decimals.eq(18));
  // //   });
  // it('assigns the initial total supply to the creator', async function () {
  //     const totalSupply = await token.totalSupply();
  //     const creatorBalance = await token.balanceOf(creator);
  //     assert(creatorBalance.eq(totalSupply));
  //   });
});
