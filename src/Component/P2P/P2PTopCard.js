import React from "react";

function P2PTopCard() {
    return (
        <div className="card-body">
            <div className="row g-3">
                <div className="col-lg-4">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Amount" onChange={()=>{}}/>
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
                <div className="col-lg-2">
                    <select className="form-select">
                        <option>INR</option>
                        <option value="1">JPY</option>
                        <option value="2">KES</option>
                        <option value="3">KHR</option>
                        <option value="4">KWD</option>
                        <option value="5">KZT</option>
                        <option value="6">LAK</option>
                        <option value="7">LBP</option>
                        <option value="8">LKR</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <select className="form-select">
                        <option>All Payments</option>
                        <option value="1">UPI</option>
                        <option value="2">IMPS</option>
                        <option value="3">Bank Transfer</option>
                        <option value="4">Google Pay(Gpay)</option>
                        <option value="5">Paytm</option>
                        <option value="6">Phonepay</option>
                        <option value="7">Mokwikbi</option>
                        <option value="8">SWIFT</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <button type="button" className="btn btn-outline-secondary"><i className="fa fa-refresh px-1" aria-hidden="true"></i>Refresh</button>
                </div>
            </div>
        </div>
    )
}

export default P2PTopCard;