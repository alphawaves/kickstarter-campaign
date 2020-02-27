import React, { useState } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import Router from 'next/router'

const ContributeForm = ({ contractAddress }) => {
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setLoading(true);

        const campaign = Campaign(contractAddress);

        try {
            const accounts = await web3.eth.getAccounts();
            

            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(amount, 'ether')
            })

            Router.reload();
        } catch (e) {
            setErrorMessage(e.message)
        }
        setLoading(false);
    }
    return (
        <Form onSubmit={handleSubmit} error={!!errorMessage}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    label='ether'
                    labelPosition='right'
                    value={amount}
                    onChange={handleChange}
                />
            </Form.Field>
            <Message error header="Oops!" content={errorMessage} />
            <Button loading={loading} primary>
                Contribute!
            </Button>
        </Form>
    )
};

export default ContributeForm;