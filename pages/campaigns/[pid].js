import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

const CampaignShow = (props) => {
    const { minimumContribution, balance, requestsCount, approversCount, manager, contractAddress } = props;

    const renderCards = () => {
        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created this campaign and can create requests to withdraw money.'
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver.',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to the campaign.',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'How much money this campaign has left to spend.',
            }
        ]

        return <Card.Group style={{ overflowWrap: 'break-word'}} items={items} />
    }
    const router = useRouter();
    const { pid } = router.query;
    return (
        <Grid>
            <h3>Campaign Show</h3>
            <Grid.Row>
                <Grid.Column width={10}>
                    {renderCards()}
                </Grid.Column>
                <Grid.Column width={6}>
                    <ContributeForm contractAddress={contractAddress} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <Link href={`/campaigns/${contractAddress}/requests`}>
                    <a>
                        <Button primary>View Requests</Button>
                    </a>
                </Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
   )
}

CampaignShow.getInitialProps = async (context) => {
    const campaign = Campaign(context.query.pid);
    const summary = await campaign.methods.getSummary().call()

    return {
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4],
        contractAddress: context.query.pid
    }
}

export default CampaignShow;