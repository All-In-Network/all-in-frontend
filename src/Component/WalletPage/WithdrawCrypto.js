import { Dropdown } from 'react-bootstrap';
import React from 'react';

function WithdrawCrypto() {
    return (
        <div className="col-xl-12 col-xxl-5">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center">
                    <h6 className="mb-0 fw-bold">Withdraw Crypto</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row g-3 mb-3">
                            <Dropdown className="col-sm-12">
                                <label className="form-label">Select coin</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" onChange={() => { }} />
                                    <Dropdown.Toggle className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                        <li><Dropdown.Item className="dropdown-item" href="#">BNB</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="#">BTC</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="#">BUSD</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="#">EOS</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="#">ETH</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                            <div className="col-sm-12">
                                <label className="form-label">Withdraw Address</label>
                                <input type="text" className="form-control" onChange={() => { }} />
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">Select Withdraw Network</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option> BNB (Arrival time ≈ 2 mins)</option>
                                    <option value="1">BTC (Arrival time ≈ 1 mins)</option>
                                    <option value="2">BSC (Arrival time ≈ 2 mins)</option>
                                    <option value="3">ETH (Arrival time ≈ 3 mins)</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div>
                                        <div className="truncated">BTC spot balance</div>
                                        <div className="text-muted truncated"> 0 BTC</div>
                                    </div>
                                    <div>
                                        <div className="truncated">Minimum withdrawal</div>
                                        <div className="text-muted  truncated"> 0.0000086 BTC </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div>
                                        <div className="truncated">Network fee</div>
                                        <div className="text-muted truncated"> 0.0000043 ~ 0.00055 BTC</div>
                                    </div>
                                    <div>
                                        <div className="truncated">24h remaining limit</div>
                                        <div className="text-muted  truncated"> 100 BTC/100 BTC </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WithdrawCrypto;