import React from "react";

function MyWallete() {
    return (
        <div className="card">
            <div className="card-header bg-primary border-bottom-0 py-3">
                <h6 className="card-title mb-0 text-light">My Wallet</h6>
            </div>
            <div className="card-body">
                <div>Available BTC</div>
                <h3>0.0386245 BTC</h3>
                <div className="mt-3 pt-3 text-uppercase text-muted border-top pt-2 small">Buy this month
                </div>
                <h5>3.0675432 BTC</h5>
                <div className="mt-3 text-uppercase text-muted small">Sell this month</div>
                <h5>2.0345618 BTC</h5>
                <div className="btn-group d-flex mt-4">
                    <input type="radio" className="btn-check" name="gm-btnradio" id="gm-btnradio1" checked="" onChange={()=>{}}/>
                    <label className="btn btn-outline-secondary" >Buy</label>
                    <input type="radio" className="btn-check" name="gm-btnradio" id="gm-btnradio2" onChange={()=>{}}/>
                    <label className="btn btn-outline-secondary" >Sell</label>
                </div>
            </div>
        </div>
    )
}
export default MyWallete;