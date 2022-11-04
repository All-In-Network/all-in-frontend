import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function LiveStatus() {
    const [ismodal, setismodal] = useState(false);
    const [convert, setConvertmodal] = useState(false);
    const [transfer, setTransfermodal] = useState(false);
    return (
        <div className="col-xl-5">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">Battle Live Status</h6>
                </div>
                <div className="card-body">
                    <div className="d-flex mb-5">
                        <button type="button" className="btn flex-fill btn-light-warning py-2 fs-6 text-uppercase" onClick={() => { setismodal(true) }}>BUY</button>
                        <button type="button" className="btn flex-fill btn-light-warning py-2 fs-6 mx-1 text-uppercase" onClick={() => { setConvertmodal(true) }}>Convert</button>
                        <button type="button" className="btn flex-fill btn-light-warning py-2 fs-6 text-uppercase" onClick={() => { setTransfermodal(true) }}>Transfer</button>
                    </div>
                    <div className="row g-2 row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4">
                        <div className="col text-center">
                            <h5 className="fw-bold mb-0">19802</h5>
                            <span className="text-muted small">Points</span>
                        </div>
                        <div className="col text-center">
                            <h5 className="fw-bold mb-0">22</h5>
                            <span className="text-muted small">Victories</span>
                        </div>
                        <div className="col text-center">
                            <h5 className="fw-bold mb-0">48</h5>
                            <span className="text-muted small">Winning Streak</span>
                        </div>
                        <div className="col text-center">
                            <h5 className="fw-bold mb-0">22.55%</h5>
                            <span className="text-muted small">Win Rate</span>
                        </div>
                    </div>
                    <div className="table-responsive mt-5">
                        <table className="table border">
                            <tbody><tr>
                                <td>Total Margin Balance</td>
                                <td>0.00058600 BTC</td>
                            </tr>
                                <tr>
                                    <td>Available Margin</td>
                                    <td>0.00055900 BTC</td>
                                </tr>
                                <tr>
                                    <td>Unrealized PNL</td>
                                    <td>0.00000400 BTC</td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
            <Modal className="modal fade" show={ismodal} onHide={() => { setismodal(false) }} style={{ display: 'block' }}>
                <Modal.Header className="modal-header" closeButton>
                    <h5 className="modal-title  fw-bold">Order</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="deadline-form">
                        <h4 className="text-muted">1 BTC ≈ 3,764,601.22 INR</h4>
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-12">
                                    <label className="form-label">Spend</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">INR</button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#!">AED</a></li>
                                            <li><a className="dropdown-item" href="#!">ARS</a></li>
                                            <li><a className="dropdown-item" href="#!">IDR</a></li>
                                            <li><a className="dropdown-item" href="#!">TRY</a></li>
                                            <li><a className="dropdown-item" href="#!">USD</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label">Receive</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#!">BNB</a></li>
                                            <li><a className="dropdown-item" href="#!">BTC</a></li>
                                            <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                            <li><a className="dropdown-item" href="#!">EOS</a></li>
                                            <li><a className="dropdown-item" href="#!">ETH</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                    <button type="submit" className="btn bg-buy">Confirm</button>
                </Modal.Footer>
            </Modal>
            <Modal className="modal fade" show={convert} onHide={() => { setConvertmodal(false) }} style={{ display: 'block' }}>
                <Modal.Header className="modal-header" closeButton>
                    <h5 className="modal-title  fw-bold">Convert</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-12">
                                    <label className="form-label">From</label>
                                    <select className="form-select">
                                        <option selected="">BNB</option>
                                        <option value="1">ETH</option>
                                        <option value="2">EOS</option>
                                        <option value="3">LINK</option>
                                        <option value="4">ADA</option>
                                        <option value="5">TRX</option>
                                        <option value="6">XRP</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label">To</label>
                                    <select className="form-select">
                                        <option selected="">BTC</option>
                                        <option value="1">ETH</option>
                                        <option value="2">EOS</option>
                                        <option value="3">LINK</option>
                                        <option value="4">ADA</option>
                                        <option value="5">TRX</option>
                                        <option value="6">XRP</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label">Convert Amount</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <button className="btn btn-outline-secondary" type="button">Max</button>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Real-Time Rate</span>
                                        <span>--</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">You Will Receive</span>
                                        <span>--</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </Modal.Footer>
            </Modal>
            <Modal className="modal fade"  show={transfer} onHide={() => { setTransfermodal(false) }} style={{display: 'block'}} >
                
                        <Modal.Header className="modal-header" closeButton>
                            <h5 className="modal-title  fw-bold" >Transfer</h5>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                            <div className="deadline-form">
                                <form>
                                    <div className="row g-3 mb-3">
                                        <div className="col-sm-12">
                                            <label className="form-label">From</label>
                                            <select className="form-select">
                                                <option selected="">SPOT</option>
                                                <option value="1">MARGIN</option>
                                                <option value="2">ISOLATE</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12">
                                            <label className="form-label">To</label>
                                            <select className="form-select">
                                                <option selected="">USDM-Future</option>
                                                <option value="1">COINM-Future</option>
                                                <option value="2">POOL</option>
                                                <option value="3">FUNDING</option>
                                                <option value="4">ISOLATE</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12">
                                            <label className="form-label">Coin</label>
                                            <select className="form-select">
                                                <option selected="">BTC</option>
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
                                                <input type="text" className="form-control"/>
                                                <button className="btn btn-outline-secondary" type="button">Max</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => { setTransfermodal(false) }}>Cancle</button>
                            <button type="submit" className="btn btn-primary">Confirm</button>
                        </Modal.Footer>
                   
            </Modal>
        </div>
    )
}

export default LiveStatus;