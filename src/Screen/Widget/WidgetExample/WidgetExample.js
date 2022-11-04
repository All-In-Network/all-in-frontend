import React from 'react';
import PageTitle from '../../../Component/Comman/PageTitle';
import { topCardData } from '../../../Component/Data/WidgetExampleData/WidgetData/WidgetData';
import BalanceDetail from '../../../Component/WidgetExample/WidgetExample/BalanceDetail';
import CoinDetail from '../../../Component/WidgetExample/WidgetExample/CoinDetail';
import MyWallete from '../../../Component/WidgetExample/WidgetExample/MyWallete';
import RequestInquiry from '../../../Component/WidgetExample/WidgetExample/RequestInquiry';
import SubscriptionCard from '../../../Component/WidgetExample/WidgetExample/SubscriptionCard';
import TopCard from '../../../Component/WidgetExample/WidgetExample/TopCard';
import TopChartCard from '../../../Component/WidgetExample/WidgetExample/TopChartCard';
import Trade from '../../../Component/WidgetExample/WidgetExample/Trade';
import Trader from '../../../Component/WidgetExample/WidgetExample/Trader';
import WalletDetail from '../../../Component/WidgetExample/WidgetExample/WalletDetail';


function WidgetExample() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Widgets' sidebutton={true} />
            </div>
            <div className='container-xxl'>
                <div className='row g-3 mb-3 row-cols-1 row-cols-md-2 row-cols-lg-4'>
                    {
                        topCardData.map((d, i) => {
                            return <TopCard
                                coinname={d.coinname}
                                price={d.price}
                                doller={d.doller}
                                percentage={d.percentage}
                                volume={d.volume}
                                priceDown={d.priceDown}
                                pricecolor={d.pricecolor}
                                key={'s'+i}
                            />
                        })
                    }
                </div>
                <div className='row g-3 mb-3 row-cols-1 row-cols-md-2 row-cols-lg-4'>
                 <TopChartCard/>
                </div>
                <div className='row g-3 mb-3 row-deck'>
                    <div className='col-xl-4 col-lg-6 col-md-12'>
                        <MyWallete />
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-12'>
                        <WalletDetail />
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-12'>
                        <SubscriptionCard />
                    </div>
                </div>
                <div className='row g-3 mb-3 row-deck'>
                    <div className='col-xl-4 col-lg-6 col-md-12'>
                        <CoinDetail />
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-12'>
                        <RequestInquiry />
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-12'>
                        <Trader />
                    </div>
                </div>
                <div className='row g-3 mb-3 row-deck'>
                    <BalanceDetail />
                </div>
                <div className='row g-3 mb-3 row-deck'>
                    <div className='col-xl-12'>
                        <Trade />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WidgetExample;