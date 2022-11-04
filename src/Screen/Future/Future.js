import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import FutureChart from '../../Component/Future/FutureChart';
import FutureTrade from '../../Component/Future/FutureTrade';

function Future() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Future Trade' />
            </div>
            <div className='container-xxl'>
                <div className='row g-3 mb-3 row-deck'>
                    <FutureChart />
                    <FutureTrade />
                </div>
            </div>
        </>
    )
}

export default Future;