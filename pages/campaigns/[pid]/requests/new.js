import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';
import Link from 'next/link';

const NewRequest = () => {
    const router = useRouter();
    const { pid } = router.query;

    const [formState, setFormState] = useState({
        description: '',
        value:'',
        recipient:''
    })
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e, { name, value }) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        setLoading(true);
        const campaign = Campaign(pid);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                formState.description,
                web3.utils.toWei(formState.value, 'ether'),
                formState.recipient
            ).send({
                from: accounts[0]
            })

            router.push(`/campaigns/${pid}/requests`)
        } catch(e) {
            setErrorMessage(e.message)
        }

        setLoading(false);
    }

    return (
        <div>
            <Link href={`/campaigns/${pid}/requests`}>
                <a>
                    <Button content='Back' icon='left arrow' labelPosition='left' />
                </a>
            </Link>
            <h3>Create a Request</h3>
       <Form onSubmit={handleSubmit} error={!!errorMessage}>
           <Form.Field>
               <label>Description</label>
               <Input
                value={formState.description}
                onChange={handleChange}
                name="description"
               />
           </Form.Field>
           <Form.Field>
               <label>Value in Ether</label>
               <Input
                value={formState.value}
                onChange={handleChange}
                name="value"
               />
           </Form.Field>
           <Form.Field>
               <label>Recipient</label>
               <Input
                value={formState.recipient}
                onChange={handleChange}
                name="recipient"
               />
           </Form.Field>
           <Message error header="Oops!" content={errorMessage} />
           <Button loading={loading} primary>Create!</Button>
       </Form>
       </div>
   )
}

// NewRequest.getInitialProps = async (context) => {
//     const address = Campaign(context.query.pid);

//     return { address }
// }

export default NewRequest;