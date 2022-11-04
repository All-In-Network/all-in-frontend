import React from 'react';
import BalanceDetail from '../../Component/DashboardOne/BalanceDetail';
import ChartSmallCard from '../../Component/DashboardOne/ChartSmallCard';
import CoinValue from '../../Component/DashboardOne/CoinValue';
import LoginActivity from '../../Component/DashboardOne/LoginActivity';
import RecentTransaction from '../../Component/DashboardOne/RecentTransaction';
import UserDetailcard from '../../Component/DashboardOne/UserDetailcard';

function Dashboard() {
    return (
        <div className='container-xxl'>
            <UserDetailcard />
            <ChartSmallCard />
            <BalanceDetail />
            <div className='row g-3 mb-3 row-deck'>
                <CoinValue />
                <LoginActivity />
            </div>
            <RecentTransaction />
        </div>
    )
}
export default Dashboard;