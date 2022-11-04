import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';

function Identification(){
    return(<>
        <div className="body-header border-bottom d-flex py-3 mb-3">
            <PageTitle pagetitle='Personal Verification' sidebutton={true}/>
        </div>
        <div className="container-xxl">
                <div className="row mb-3">
                    <div className="col-xl-12">
                        <div className="card">
                        <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center ">
                            <h6 className="mb-0 fw-bold">Verification</h6>
                        </div>
                            <div className="card-body">
                                <div className="row g-3">
                                <div className="col-xl-3">
                                    <div className="d-flex flex-column">
                                        <h6 className="mb-3">Verified</h6>
                                        <span className="text-muted my-1"><i className="icofont-check-circled fs-5 text-success px-2"></i>Personal information</span>
                                        <span className="text-muted my-1"><i className="icofont-check-circled fs-5 text-success px-2"></i>Government-issued ID</span>
                                        <span className="text-muted my-1"><i className="icofont-check-circled fs-5 text-success px-2"></i>Facial recognition</span>
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <h6 className="mb-3">Current Features</h6>
                                    <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3">
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Fiat Deposit &amp; Withdrawal Limits</span>
                                                    <span className="fw-bold">$50K Daily</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Crypto Deposit Limit</span>
                                                    <span className="fw-bold">Unlimited</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Crypto Withdrawal Limit</span>
                                                    <span className="fw-bold">100 BTC Daily</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">P2P Transaction Limits</span>
                                                    <span className="fw-bold">Unlimited</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Other Features</span>
                                                    <span className="fw-bold">LPD/OTC/Cryptoon card</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Ico Apply</span>
                                                    <span className="fw-bold">Unlimited</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Loan Apply</span>
                                                    <span className="fw-bold">Unlimited</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Pay Transaction</span>
                                                    <span className="fw-bold">$20K Daily</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Future Trade</span>
                                                    <span className="fw-bold">Unlimited</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted">Spot Stand</span>
                                                    <span className="fw-bold">Unlimited Day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
    )
}

export default Identification;