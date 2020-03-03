import React from 'react';
import { useRouter } from 'next/router'
import { Button, Table } from 'semantic-ui-react';
import Link from 'next/link';
import Campaign from '../../../../ethereum/campaign';
import RequestRow from '../../../../components/RequestRow';

const Requests = (props) => {
    const router = useRouter();
    const { Header, Row, HeaderCell, Body } = Table;

    const { pid } = router.query;

    const renderRows = () => {
        return props.requests.map((request, index) => <RequestRow key={index} id={index} request={request} address={pid} approversCount={props.approversCount} />)
    }

    return (
        <div>
            <h3>Requests</h3>
            <Link href={`/campaigns/${pid}/requests/new`}>
                <a>
                    <Button primary floated="right" style={{ marginBottom: 10 }}>
                        Create Request
                    </Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {renderRows()}
                </Body>
            </Table>
            <div>Found {props.requestsCount} requests.</div>
        </div>
   )
}

Requests.getInitialProps = async (context) => {
    const campaign = Campaign(context.query.pid);
    const requestsCount = await campaign.methods.getRequestCount().call()
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
        Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
            return campaign.methods.requests(index).call();
        })
    )

    return {
        requests, requestsCount, approversCount
    }
}

export default Requests;