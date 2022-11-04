import React from 'react';
import BalanceDetail from '../../Component/DashboardOne/BalanceDetail';

function Dashboard() {
    return (
        <div className='container-xxl'>
            <BalanceDetail />
            <div className='row g-3 mb-3 row-deck'>
            </div>
        </div>
    )
}
export default Dashboard;