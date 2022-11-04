import React from "react";

function Transfer() {
    return (
        <div className="col-xl-6 col-xxl-5">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center">
                    <h6 className="mb-0 fw-bold">Transfer</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row g-3 mb-3">
                            <div className="col-sm-12">
                                <label className="form-label">From</label>
                                <select className="form-select">
                                    <option>SPOT</option>
                                    <option value="1">MARGIN</option>
                                    <option value="2">ISOLATE</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">To</label>
                                <select className="form-select">
                                    <option>USDM-Future</option>
                                    <option value="1">COINM-Future</option>
                                    <option value="2">POOL</option>
                                    <option value="3">FUNDING</option>
                                    <option value="4">ISOLATE</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">Coin</label>
                                <select className="form-select">
                                    <option>BTC</option>
                                    <option value="1">ETH</option>
                                    <option value="2">EOS</option>
                                    <option value="3">LINK</option>
                                    <option value="4">ADA</option>
                                    <option value="5">TRX</option>
                                    <option value="6">XRP</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">Amount</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" onChange={() => { }} />
                                    <button className="btn btn-outline-secondary" type="button">Max</button>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn flex-fill btn-light-warning py-2 fs-5 text-uppercase px-5">Confirm</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive mt-1">
                        <table className="table border">
                            <tbody>
                                <tr>
                                    <td>Total Transfer</td>
                                    <td>0.00058600 BTC</td>
                                </tr>
                                <tr>
                                    <td>Available Margin</td>
                                    <td>0.000059000 BTC</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer;