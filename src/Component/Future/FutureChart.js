import React from "react";

function FutureChart() {
    return (
        <div className="col-xl-12 col-xxl-8">
            <div className='col-xl-12'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='tradingview-widget-container'>
                            <div id='tradingview_85dc0' style={{ height: "690px" }}>
                                <div id='tradingview_cd990-wrapper' style={{ position: "relative", boxSizing: "content-box", width: "100%", height: "100%", margin: "0 auto !important", padding: "0 !important", fontFamily: "-apple-system" }}>
                                    <div style={{ width: "100%", height: "100%", background: "transparent", padding: "0 !important" }}>
                                        <iframe
                                            id='tradingview_cd990'
                                            src='https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cd990&symbol=BINANCE%3ABTCUSDT&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=in&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSDT'
                                            style={{ width: "100%", height: "100%", margin: "0 !important", padding: "0 !important" }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FutureChart;