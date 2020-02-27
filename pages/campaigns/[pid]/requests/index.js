import React from 'react';
import { useRouter } from 'next/router'

const Requests = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>Requests for campaign: {pid} </div>
   )
}

export default Requests;