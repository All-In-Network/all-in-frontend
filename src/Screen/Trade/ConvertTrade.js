import { Tab,Nav } from 'react-bootstrap';
import React from 'react';
import OtcPortalLimit from '../../Component/Trade/Convert/OtcPortalLimit';
import OtcPortalMarket from '../../Component/Trade/Convert/OtcPortalMarket';
import PageTitle from '../../Component/Comman/PageTitle';

function Convert() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Convert trade' downloadbutton='Download' reportbutton='Generate Report' />
            </div>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                        <Tab.Container defaultActiveKey='first'>
                            <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center flex-wrap border-bottom">
                                <h6 className="mb-0 fw-bold">OTC Portal</h6>
                                <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0" role="tablist">
                                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Limit" role="tab">Limit</Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Market" role="tab">Market</Nav.Link></Nav.Item>
                                </Nav>
                            </div>
                            <div className="card-body">
                                <div>BTC/USDT:</div>
                                <h3>55499.54566058</h3>
                                <div className="d-flex my-3 flex-wrap">
                                    <div className="">
                                        <div className="text-uppercase text-muted small">Percentage</div>
                                        <h5 className="color-price-up">+2.61%</h5>
                                    </div>
                                    <div className="px-4">
                                        <div className="text-uppercase text-muted small">Periods</div>
                                        <h5>24Hours</h5>
                                    </div>
                                </div>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane className="tab-pane fade" id="Limit" eventKey='first'>
                                        <div className="row g-3">
                                            <OtcPortalLimit />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" id="Market" eventKey='second'>
                                        <div className="row g-3">
                                            <OtcPortalMarket />
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Convert;