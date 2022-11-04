import React, { useState } from 'react';
import { Tab,Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FutureTrade() {
    return (
        <div className="col-xl-12 col-xxl-4">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">Test Market</h6>
                </div>
                <div className="card-body">
                    <Tab.Container defaultActiveKey='first'>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mb-4" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Market" role="tab" aria-selected="true">Market</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane fade" id="Market" eventKey='first'>
                                <div className="row g-3">
                                    <div className="col-lg-12">
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <span className="small text-muted">Avbl</span>
                                            <span className="">310.800000 USDT</span>
                                        </div>
                                        <form>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Size</span>
                                                <input type="text" className="form-control" onChange={() => { } } />
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#!">USDT</a></li>
                                                    <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                </ul>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">TP/SL</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Take Profit" onChange={() => { } } />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Stop Loss" onChange={() => { } } />
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-between">
                                                <button type="submit" className="btn btn-light-success px-5 py-2 text-uppercase">Buy</button>
                                                <button type="submit" className="btn btn-light-danger px-5 py-2 text-uppercase">Sell</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}
export default FutureTrade;