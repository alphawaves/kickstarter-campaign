import React from 'react';
import { useRouter } from 'next/router'
import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import Campaign from '../../../../ethereum/campaign';

const Requests = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>
            <h3>Requests</h3>
            <Link href="">
                <a>
                    <Button primary>
                        Create Reqeust
                    </Button>
                </a>
            </Link>
        </div>
   )
}

Requests.getInitialProps = async (context) => {
    const campaign = Campaign(context.query.pid);
    const summary = await campaign.methods.getSummary().call()

    return {
    }
}

export default Requests;