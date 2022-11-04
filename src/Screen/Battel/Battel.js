import React from 'react';
import StartBattel from '../../Component/Battel/StartBattel';
import WinningStreak from '../../Component/Battel/WinningStreak';
import MyResult from '../../Component/Battel/MyResult';
import LiveStatus from '../../Component/Battel/LiveStatus';
import PageTitle from '../../Component/Comman/PageTitle';
import BattleChart from '../../Component/Battel/BattleChart';

function Battel() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Battel' downloadbutton='Download' reportbutton='Generate Report' />
            </div>
            <div className='container-xxl'>
                <div className='row g-3 mb-3 row-deck'>
                    <BattleChart />
                </div>
                <div className='row g-3 mb-3 row-deck'>
                    <StartBattel />
                    <WinningStreak />
                </div>
                <div className='row g-3 mb-3 row-deck'>
                    <MyResult />
                    <LiveStatus />
                </div>
            </div>
        </>
    )
}

export default Battel;