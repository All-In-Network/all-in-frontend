import React, { useState } from 'react';
import { Tab,Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FutureTrade() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col-xl-12 col-xxl-4">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">Future Trade</h6>
                    <Button className="btn btn-secondary" onClick={handleShow}>10X</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <h5 className="modal-title">Adjust Leverage</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-12">
                                        <label className="form-label">Leverage</label>
                                        <input type="Number" className="form-control"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                                <span className="text-muted">1X</span>
                                                <span className="text-muted px-2">25X</span>
                                                <span className="text-muted px-1">50X</span>
                                                <span className="text-muted px-1">75X</span>
                                                <span className="text-muted">100X</span>
                                                <span className="text-muted">125X</span>
                                            </div>
                                            <Form.Range />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p>Maximum position at current leverage: 20,000,000 <div className="d-block">USDT <span className="text-primary">Check on Leverage &amp; Margin table</span></div></p>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="card-body">
                    <Tab.Container defaultActiveKey='first'>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mb-4" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Limit" role="tab" aria-selected="false">Limit</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Market" role="tab" aria-selected="false">Market</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='third' data-bs-toggle="tab" href="#Stoplimit" role="tab" aria-selected="true">Stop Limit</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane fade" id="Limit" eventKey='first'>
                                <div className="row g-3">
                                    <div className="col-lg-12">
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <span className="small text-muted">Avbl</span>
                                            <span className="">310.800000 USDT</span>
                                        </div>
                                        <form>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Price</span>
                                                <input type="text" className="form-control" onChange={() => { } } />
                                                <span className="input-group-text">USDT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Size</span>
                                                <input type="text" className="form-control" />
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#!">USDT</a></li>
                                                    <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                </ul>
                                            </div>
                                            <div className="input-group">
                                                <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                                    <span className="text-muted">0%</span>
                                                    <span className="text-muted px-2">25%</span>
                                                    <span className="text-muted px-1">50%</span>
                                                    <span className="text-muted px-1">75%</span>
                                                    <span className="text-muted">100%</span>
                                                </div>
                                                <Form.Range />
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap mb-3">
                                                <div className="d-flex">
                                                    <div className="truncated">Buy</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Sell</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">TP/SL</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Take Profit" onChange={() => { } } />
                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#!">Last</a></li>
                                                        <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                    </ul>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Stop Loss" onChange={() => { } } />
                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#!">Last</a></li>
                                                        <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-between">
                                                <button type="submit" className="btn btn-light-success py-2 text-uppercase">BUY/Long</button>
                                                <button type="submit" className="btn btn-light-danger py-2 text-uppercase">Sell/Short</button>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="d-flex">
                                                    <div className="truncated">Cost</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Cost</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="d-flex">
                                                    <div className="truncated">Max</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Max</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane className="tab-pane fade" id="Market" eventKey='second'>
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
                                            <div className="input-group">
                                                <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                                    <span className="text-muted">0%</span>
                                                    <span className="text-muted px-2">25%</span>
                                                    <span className="text-muted px-1">50%</span>
                                                    <span className="text-muted px-1">75%</span>
                                                    <span className="text-muted">100%</span>
                                                </div>
                                                <Form.Range />
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap mb-3">
                                                <div className="d-flex">
                                                    <div className="truncated">Buy</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Sell</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">TP/SL</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Take Profit" onChange={() => { } } />
                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#!">Last</a></li>
                                                        <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                    </ul>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Stop Loss" onChange={() => { } } />
                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#!">Last</a></li>
                                                        <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-between">
                                                <button type="submit" className="btn btn-light-success py-2 text-uppercase">BUY/Long</button>
                                                <button type="submit" className="btn btn-light-danger py-2 text-uppercase">Sell/Short</button>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="d-flex">
                                                    <div className="truncated">Cost</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Cost</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="d-flex">
                                                    <div className="truncated">Max</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Max</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane className="tab-pane fade" id="Stoplimit" eventKey='third'>
                                <div className="row g-3">
                                    <div className="col-lg-12">
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <span className="small text-muted">Avbl</span>
                                            <span className="">310.800000 USDT</span>
                                        </div>
                                        <form>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Stop Price</span>
                                                <input type="text" className="form-control" onChange={() => { } } />
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#!">Limit</a></li>
                                                    <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                </ul>
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Price</span>
                                                <input type="text" className="form-control" onChange={() => { } } />
                                                <span className="input-group-text">USDT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Size</span>
                                                <input type="text" className="form-control" onChange={() => { } } />
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#!">USDT</a></li>
                                                    <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                </ul>
                                            </div>
                                            <div className="input-group">
                                                <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                                    <span className="text-muted">0%</span>
                                                    <span className="text-muted px-2">25%</span>
                                                    <span className="text-muted px-1">50%</span>
                                                    <span className="text-muted px-1">75%</span>
                                                    <span className="text-muted">100%</span>
                                                </div>
                                                <Form.Range />
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap mb-3">
                                                <div className="d-flex">
                                                    <div className="truncated">Buy</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Sell</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">TP/SL</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Take Profit" onChange={() => { } } />
                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#!">Last</a></li>
                                                        <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                    </ul>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Stop Loss" onChange={() => { } } />
                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#!">Last</a></li>
                                                        <li><a className="dropdown-item" href="#!">Mark</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-between">
                                                <button type="submit" className="btn btn-light-success py-2 text-uppercase">BUY/Long</button>
                                                <button type="submit" className="btn btn-light-danger py-2 text-uppercase">Sell/Short</button>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="d-flex">
                                                    <div className="truncated">Cost</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Cost</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="d-flex">
                                                    <div className="truncated">Max</div>
                                                    <div className="text-muted truncated px-1"> 0.00 USDT</div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="truncated">Max</div>
                                                    <div className="text-muted  truncated px-1"> 0.00 USDT </div>
                                                </div>
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