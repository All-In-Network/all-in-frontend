import React from 'react';
import { Nav, Tab, TabContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BalanceDetail() {
    return (
        <>
            <div className="col-xl-12 col-xxl-7">
                <div className="card" >
                    <Tab.Container defaultActiveKey="first">
                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
                            <h6 className="mb-0 fw-bold">Balance Details</h6>
                            <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0" role="tablist">
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey="first" data-bs-toggle="tab" href="#Spot" role="tab">Spot</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="second" data-bs-toggle="tab" href="#P2P" role="tab">P2P</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="third" data-bs-toggle="tab" href="#Margin" role="tab">Margin</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="foruth" data-bs-toggle="tab" href="#Future" role="tab">Future</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="fifth" data-bs-toggle="tab" href="#Earn" role="tab">Earn</Nav.Link></Nav.Item>
                            </Nav>
                        </div>
                        <div className="card-body">
                            <Tab.Content className="tab-content">
                                <Tab.Pane className="tab-pane fade show" id="Spot" eventKey="first">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div>Account balance:</div>
                                            <h3>0.18005388 BTC</h3>
                                            <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Buy this month</div>
                                            <h5>3.0675432 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Sell this month</div>
                                            <h5>2.0345618 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Estimated Value:</div>
                                            <h5>$22000.29</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ position: 'relative' }}>   
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '512px', height: '260px' }}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane fade" id="P2P" eventKey="second">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div>Account balance:</div>
                                            <h3>0.00005388 BTC</h3>
                                            <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Buy this month</div>
                                            <h5>0.00005388 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Sell this month</div>
                                            <h5>2.0345618 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Estimated Value:</div>
                                            <h5>$2000.29</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ position: 'relative' }}>
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '1px', height: '1px' }}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane fade" id="Margin" eventKey="third">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div>Total balance:</div>
                                            <h3>0.00095000 BTC≈$3570</h3>
                                            <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Total Debt:</div>
                                            <h5>0.00005388 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Account Equity:</div>
                                            <h5>2.0345618 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Profit &amp; Loss:</div>
                                            <h5>0.95 BTC(1.6.00%) $25 (8.00%)</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ position: 'relative' }}>   
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '1px', height: '1px' }}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane fade" id="Future" eventKey="foruth">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div>Total Margin Balance:</div>
                                            <h3>0.00095000 BTC≈$3570</h3>
                                            <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Total Wallet Balance:</div>
                                            <h5>0.00005388 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Total Unrealized PNL:</div>
                                            <h5>2.0345618 BTC</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ position: 'relative' }}>
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '1px', height: '1px' }}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane fade" id="Earn" eventKey="fifth">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div>Total Margin Balance:</div>
                                            <h3>0.00095000 BTC≈$3570</h3>
                                            <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Locked:</div>
                                            <h5>0.00000388 BTC</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Flexible:</div>
                                            <h5>0.0000018 BTC</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ position: 'relative' }}>
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '1px', height: '1px' }}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
            <div className="col-xl-12 col-xxl-5">
                <div className="card">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center">
                        <h6 className="mb-0 fw-bold">Increase your account security</h6>
                        <Link to={process.env.PUBLIC_URL +"/security-page"} className="d-inline-flex"><i className="icofont-caret-right fs-5"></i></Link>
                    </div>
                    <div className="card-body">
                        <div className="row row-cols-2 g-0">
                            <div className="col">
                                <div className="security border-bottom border-end">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Enable 2FA</span>
                                            <span>Enabled</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security border-bottom">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Identity Verification</span>
                                            <span>Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security border-bottom border-end">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-red mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Anti-phishing Code</span>
                                            <Link to={process.env.PUBLIC_URL +"/security-page"} className="text-decoration-underline">Setup</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security border-bottom">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-red mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Withdrawal Whitelist</span>
                                            <Link to={process.env.PUBLIC_URL +"/security-page"} className="text-decoration-underline">Turn on</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security border-bottom border-end">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-red mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Security Key</span>
                                            <Link to={process.env.PUBLIC_URL +"/security-page"} className="text-decoration-underline">Setup</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security border-bottom">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-red mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Google Authenticator</span>
                                            <Link to={process.env.PUBLIC_URL +"/security-page"} className="text-decoration-underline">Setup</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security  border-end">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Phone Number</span>
                                            <span>74****57</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security ">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Email Address </span>
                                            <span>ni***@gmail.com</span>
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

export default BalanceDetail;