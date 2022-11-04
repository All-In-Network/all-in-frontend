import React from 'react';
import BalanceDetail from '../../Component/DashboardOne/BalanceDetail';
import PageTitle from "../../Component/Comman/PageTitle";

function Dashboard() {
    return (<>
        <div className="body-header border-bottom d-flex py-3 mb-3">
            <PageTitle pagetitle='Trader Dashboard' sidebutton={true} />
        </div><div className='container-xxl'>
                <BalanceDetail />
                <div className='row g-3 mb-3 row-deck'>
                </div>
            </div>
        </>
    )
}
export default Dashboard;
