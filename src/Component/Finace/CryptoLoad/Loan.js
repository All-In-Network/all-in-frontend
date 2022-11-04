import React from "react";
import { Tab, Nav } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { LoanOngoingOrderData } from "../../Data/FinaceData/LoanOngoingOrderData";

function Loan() {
    return (
        <div className="col-xl-12">
            <div className="card">
                <Tab.Container defaultActiveKey='first'>
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center flex-wrap border-bottom">
                        <h6 className="mb-0 fw-bold">Loans</h6>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Borrow" role="tab" aria-selected="true">Borrow</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Orders" role="tab" aria-selected="false">Ongoing Orders (3)</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <div className="card-body">
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane fade" eventKey='first' id="Borrow">
                                <div className="row g-3">
                                    <div className="col-xl-6">
                                        <div className="color-bg-100 p-2 p-lg-4 mt-4">
                                            <h4>Initial LTV <span className="small">(Loan-to-Value Ratio)</span></h4>
                                            <h5 className="color-price-up">65%</h5>
                                            <span className="text-muted d-block">Initial LTV 65%, Margin Call 75%, Liquidation LTV 83%</span>
                                            <div className="d-flex justify-content-between flex-wrap my-3">
                                                <div>
                                                    <div className="truncated">Liquidation Price(BNB/USDT)</div>
                                                    <div className="text-muted truncated"> 0 BTC</div>
                                                </div>
                                                <div>
                                                    <div className="truncated">Total Interest Amount</div>
                                                    <div className="text-muted truncated"> 0 USDT</div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div>
                                                    <div className="truncated">Hourly &amp; Daily Interest Rate</div>
                                                    <div className="text-muted  truncated"> 0.003917% / 0.0800% </div>
                                                </div>
                                                <div>
                                                    <div className="truncated">Repayment Amount</div>
                                                    <div className="text-muted  truncated"> - USDT </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <form>
                                            <label className="form-label">I want to borrow</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Minimum Amount 100 USDT" />
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                                    <li><a className="dropdown-item" href="#!">1INCH</a></li>
                                                    <li><a className="dropdown-item" href="#!">ALICE</a></li>
                                                    <li><a className="dropdown-item" href="#!">ATOM</a></li>
                                                    <li><a className="dropdown-item" href="#!">ETH</a></li>
                                                    <li><a className="dropdown-item" href="#!">SOL</a></li>
                                                    <li><a className="dropdown-item" href="#!">BNB</a></li>
                                                    <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                    <li><a className="dropdown-item" href="#!">XRP</a></li>
                                                </ul>
                                            </div>
                                            <label className="form-label">Collateral Amount</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" />
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">BNB</button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                                    <li><a className="dropdown-item" href="#!">1INCH</a></li>
                                                    <li><a className="dropdown-item" href="#!">ALICE</a></li>
                                                    <li><a className="dropdown-item" href="#!">ATOM</a></li>
                                                    <li><a className="dropdown-item" href="#!">ETH</a></li>
                                                    <li><a className="dropdown-item" href="#!">SOL</a></li>
                                                    <li><a className="dropdown-item" href="#!">BNB</a></li>
                                                    <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                    <li><a className="dropdown-item" href="#!">XRP</a></li>
                                                </ul>
                                            </div>
                                            <label className="form-label mb-0">Loan Term</label>
                                            <span className="text-muted d-block small mb-3">No interest penalty for early repayment</span>
                                            <div className="btn-group mb-3 justify-content-center d-flex" role="group">
                                                <button type="button" className="btn btn-outline-primary p-3">  7 Days</button>
                                                <button type="button" className="btn btn-outline-primary p-3"> 14 Days</button>
                                                <button type="button" className="btn btn-outline-primary p-3"> 30 Days</button>
                                                <button type="button" className="btn btn-outline-primary p-3"> 90 Days</button>
                                            </div>
                                            <button type="submit" className="btn flex-fill btn-light-warning py-2 fs-5 text-uppercase px-5 mt-4">Start Borrowing Now</button>
                                        </form>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade" eventKey='second' id="Orders">
                                <div id="ordertabthree_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={LoanOngoingOrderData.title}
                                            columns={LoanOngoingOrderData.columns}
                                            data={LoanOngoingOrderData.rows}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-sm-12 col-md-5" style={{ float: 'left' }}>
                                        <div className="dataTables_info" id="myDataTable_info" role="status" aria-live="polite">Showing 1 to 7 of 7 entries</div>
                                    </div>
                                    <div className="col-sm-12 col-md-7 " >
                                        <div className="dataTables_paginate paging_simple_numbers" id="myDataTable_paginate" style={{ float: 'right' }}>
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="myDataTable_previous"><a href="#!" className="page-link">Previous</a></li>
                                                <li className="paginate_button page-item active"><a href="#!" className="page-link">1</a></li>
                                                <li className="paginate_button page-item next disabled" id="myDataTable_next"><a href="#!" className="page-link">Next</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}
export default Loan;