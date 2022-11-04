import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';

function Reward() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Personal Verification' reward={true} sidebutton={true}/>
            </div>
            <div className="container-xxl">
                <div className="row mb-3">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-lg-4">
                                        <label className="form-label">Voucher Type</label>
                                        <select className="form-select">
                                            <option >All</option>
                                            <option value="1">Bouns Voucher</option>
                                            <option value="2">Cashback Voucher</option>
                                            <option value="3">Trial Voucher</option>
                                            <option value="4">Vip Voucher</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="form-label">Status</label>
                                        <select className="form-select">
                                            <option>All</option>
                                            <option value="1">Available</option>
                                            <option value="2">Redeemed</option>
                                            <option value="3">Expired</option>
                                            <option value="4">Invalid</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="form-label">Order by</label>
                                        <select className="form-select">
                                            <option>Latest to Earliest</option>
                                            <option value="1">Earliest to Latest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-lg-12 col-xl-12 col-xxl-6">
                        <div className="card p-3 flex-sm-row align-items-center coupon">
                            <div className="col-12 col-sm-3 text-sm-center price">
                                <h4>200</h4>
                                <span className="text-muted">USDT</span>
                            </div>
                            <div className="col-12 col-sm-9 px-2 px-sm-3 px-lg-4 px-xl-5 px-xxl-4 detail">
                                <h5 className="mb-0">0% Interest Voucher</h5>
                                <span className="text-muted mb-2 d-block">Expiry date : 2021-06-03</span>
                                <div className="row g-2 row-cols-2">
                                    <div className="col">Reward time: 7 days</div>
                                    <div className="col">Isolated Margin</div>
                                    <div className="col">Loan Discount</div>
                                    <div className="col">Voucher All</div>
                                </div>
                                <button type="button" className="btn btn-light-warning text-uppercase fs-6 px-4 mt-3">Redeem</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-12 col-xxl-6">
                        <div className="card p-3 flex-sm-row align-items-center coupon">
                            <div className="col-12 col-sm-3 text-sm-center price">
                                <h4>100</h4>
                                <span className="text-muted">USDT</span>
                            </div>
                            <div className="col-12 col-sm-9 px-2 px-sm-3 px-lg-4 px-xl-5 px-xxl-4 detail">
                                <h5 className="mb-0">Cashback Voucher</h5>
                                <span className="text-muted mb-2 d-block">Expiry date : 2021-06-04</span>
                                <div className="row g-2 row-cols-2">
                                    <div className="col">Reward time: 7 days</div>
                                    <div className="col">Future Trade</div>
                                    <div className="col">Cashback 2time</div>
                                    <div className="col">Voucher All</div>
                                </div>
                                <button type="button" className="btn btn-light-warning text-uppercase fs-6 px-4 mt-3">Redeem</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-12 col-xxl-6">
                        <div className="card p-3 flex-sm-row align-items-center coupon">
                            <div className="col-12 col-sm-3 text-sm-center price">
                                <h4>200</h4>
                                <span className="text-muted">USDT</span>
                            </div>
                            <div className="col-12 col-sm-9 px-2 px-sm-3 px-lg-4 px-xl-5 px-xxl-4 detail">
                                <h5 className="mb-0">Vip Upgrade</h5>
                                <span className="text-muted mb-2 d-block">Expiry date : 2021-06-07</span>
                                <div className="row g-2 row-cols-2">
                                    <div className="col">Reward time: 1 days</div>
                                    <div className="col">Vip Subscribe</div>
                                    <div className="col">Subscribe</div>
                                    <div className="col">Voucher All</div>
                                </div>
                                <button type="button" className="btn btn-light-warning text-uppercase fs-6 px-4 mt-3">Redeem</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-12 col-xxl-6">
                        <div className="card p-3 flex-sm-row align-items-center coupon">
                            <div className="col-12 col-sm-3 text-sm-center price">
                                <h4>150</h4>
                                <span className="text-muted">USDT</span>
                            </div>
                            <div className="col-12 col-sm-9 px-2 px-sm-3 px-lg-4 px-xl-5 px-xxl-4 detail">
                                <h5 className="mb-0">Trial Fund</h5>
                                <span className="text-muted mb-2 d-block">Expiry date : 2021-06-06</span>
                                <div className="row g-2 row-cols-2">
                                    <div className="col">Reward time: 5 days</div>
                                    <div className="col">Spot Trade</div>
                                    <div className="col">Trial</div>
                                    <div className="col">Voucher All</div>
                                </div>
                                <button type="button" className="btn btn-light-success text-uppercase fs-6 px-4 mt-3">XR0058</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reward;
