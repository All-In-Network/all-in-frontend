import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import FutureChart from '../../Component/Future/FutureChart';
import FutureStatus from '../../Component/Future/FutureStatus';
import FutureTrade from '../../Component/Future/FutureTrade';
import OrderBook from '../../Component/Future/OrderBook';

function Future() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Future Trade' downloadbutton='Download' reportbutton='Generate Report' />
            </div>
            <div className='container-xxl'>
                <div className='row g-3 mb-3 row-deck'>
                    <FutureChart />
                    <FutureTrade />
                </div>
                <div className='row g-3 mb-3'>
                    <OrderBook />
                    <FutureStatus />
                </div>
            </div>
        </>
    )
}

export default Future;