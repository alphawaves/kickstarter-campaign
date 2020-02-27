import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Router from 'next/router'

// class CampaignNew extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Create a Campaign</h3>
//                 <Form>
//                     <Form.Field>
//                         <label>Minimum Contribution</label>
//                         <Input label="wei" labelPosition="right" />
//                     </Form.Field>
//                     <Button primary>Create!</Button>
//                 </Form>
//             </div>
//         )
//     }
// }

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMinimumContribution(e.target.value);
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage('');
      setLoading(true);

      try {
        const accounts = await web3.eth.getAccounts();

        await factory.methods.createCampaign(minimumContribution).send({
            from: accounts[0]
        });
        Router.push('/')
      } catch(e) {
          setErrorMessage(e.message);
      }

      setLoading(false);
  }

  return (
    <div>
      <h3>Create a Campaign</h3>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={handleChange}
            />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button loading={loading} primary>Create!</Button>
      </Form>
    </div>
  );
};

export default CampaignNew;
