import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Link from 'next/link';

// export default () => {

//     const getCampaigns = async () => {
//         const campaigns = await factory.methods.getDeployedCampaigns().call();
//         console.log(campaigns)
//     }
//     useEffect(() => {
//        getCampaigns()
//     }, [])
//     return <h1>This is the campaign list page!!</h1>
// }

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        // const campaigns = []
        return { campaigns }
    }

    async componentDidMount() {
    
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <Link href={`/campaigns/${address}`}><a>View Campaign</a></Link>,
                fluid: true
            }
        })

        return <Card.Group items={items } />
    }

    render() {
        return (
        <div>
            <h3>Open Campaigns</h3>
            <Link href="/campaigns/new">
                <a>
            <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
            />
            </a>
            </Link>
            {this.renderCampaigns()}
        </div>)
    }
}

export default CampaignIndex;