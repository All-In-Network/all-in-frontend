import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import FutureChart from '../../Component/Future/FutureChart';
import MarketTrade from '../../Component/Market/MarketTrade';

function Market() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Test Market' />
            </div>
            <div className='container-xxl'>
                <div className='row g-3 mb-3 row-deck'>
                    <FutureChart />
                    <MarketTrade />
                </div>
            </div>
        </>
    )
}

export default Market;
