import React from 'react';
import { useRouter } from 'next/router';
import { Form } from 'semantic-ui-react';

const NewRequest = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>Create a Request</div>
   )
}

// NewRequest.getInitialProps = async (context) => {
//     const address = Campaign(context.query.pid);

//     return { address }
// }

export default NewRequest;