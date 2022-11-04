import React from "react";
import ProfileImage from '../../../assets/images/xs/avatar11.svg';

function WalletDetail() {
    return (
        <div className="card border-0">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col text-truncate">
                        <div className="d-flex align-items-center">
                            <img src={ProfileImage} data-bs-toggle="tooltip" title="" alt="Avatar" className="rounded-circle avatar" data-original-title="Avatar Name" data-bs-original-title="" />
                            <div className="ms-3">
                                <a href="#!" title="">Viaan Champ</a>
                                <p className="mb-0">Viaan.Champ@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3 mt-4">
                    <div className="col-12">
                        <div className="form-floating">
                            <select className="form-select" aria-label="Floating label select example">
                                <option>Bitcoin</option>
                                <option>Ethereum</option>
                                <option>Ripple</option>
                                <option>Cardano</option>
                                <option>Stellar</option>
                                <option>RaiBlocks</option>
                                <option>Monero</option>
                            </select>
                            <label>Selects Currency</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <select className="form-select" aria-label="Floating label select example">
                                <option>Bank of America ********65657</option>
                                <option>Master Card ***********12012</option>
                                <option>Pay with Paypal</option>
                            </select>
                            <label>Payment Method</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Enter Amount" />
                            <label>Enter Amount</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Enter Price" />
                            <label>Enter Price</label>
                        </div>
                    </div>
                    <div className="col-12 d-flex text-center">
                        <button type="button" className="btn flex-fill me-1 btn-light-primary">Buy</button>
                        <button type="button" className="btn flex-fill ms-1 btn-light-danger">Sell</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WalletDetail;