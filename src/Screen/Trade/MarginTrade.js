import React from "react";
import PageTitle from "../../Component/Comman/PageTitle";
import MarginChart from "../../Component/Trade/MarginTrade/MarginChart";
import MarginStatus from "../../Component/Trade/MarginTrade/MarginStatus";
import OrderBookMarginTrade from "../../Component/Trade/MarginTrade/OrderBookMarginTrade";
import SelectTradeMargin from "../../Component/Trade/MarginTrade/SelectTradeMargin";

function MarginTrade() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Margin trade' downloadbutton='Download' reportbutton='Generate Report' />
            </div>
            <div className="container-xxl">
                <div className="row g-3 mb-3">
                    <MarginChart />
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-xxl-5">
                        <OrderBookMarginTrade />
                    </div>
                    <div className="col-xxl-7">
                        <SelectTradeMargin />
                        <MarginStatus />
                    </div>

                </div>

            </div>
        </>
    )
}

export default MarginTrade;