import React from 'react';
import { useRouter } from 'next/router'

const CampaignShow = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>Post: {pid} </div>
   )
}

export default CampaignShow;