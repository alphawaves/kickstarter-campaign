import React from 'react';
import { useRouter } from 'next/router'

const NewRequests = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>New requests for campaign: {pid} </div>
   )
}

export default NewRequests;