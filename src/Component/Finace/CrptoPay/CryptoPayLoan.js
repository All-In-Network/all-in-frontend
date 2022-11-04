import React from "react";
import { Tab ,Nav} from "react-bootstrap";
import DataTable from "react-data-table-component";
import QrCode from '../../../assets/images/qr-code.png'
import { LoanReceiveData } from "../../Data/FinaceData/LoanReceiveData";

function CryptoPayLoan() {
    return (
        <div className="col-xl-12">
            <div className="card">
            <Tab.Container defaultActiveKey='first'>
                <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center flex-wrap border-bottom">
                    <h6 className="mb-0 fw-bold">Loans</h6>
                    <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0" role="tablist">
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Pay" role="tab" aria-selected="true">Pay</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Receive" role="tab" aria-selected="false">Receive</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <div className="card-body">
                    <div>Funding Wallet:</div>
                    <h3>0.18005388 BTC</h3>
                    <div className="d-flex my-3 flex-wrap">
                        <div className="">
                            <div className="text-uppercase text-muted small">Amount Spent</div>
                            <h5>3.0675432 BTC</h5>
                        </div>
                        <div className="px-4">
                            <div className="text-uppercase text-muted small">Amount Recevied</div>
                            <h5>2.0345618 BTC</h5>
                        </div>
                    </div>

                    <Tab.Content className="tab-content">
                        <Tab.Pane className="tab-pane fade" eventKey='first' id="Pay">
                            <p className="text-muted">Only One Mandatory Fields</p>
                            <form>
                                <div className="row g-3 mb-3 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                                    <div className="col">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">PayID</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Select Coin</label>
                                        <select className="form-select">
                                            <option>ADA</option>
                                            <option value="1">BNB</option>
                                            <option value="2">BTC</option>
                                            <option value="3">SOL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Amout Pay</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                    <label  className="form-label">Add Note</label>
                                </div>
                                <button type="submit" className="btn flex-fill btn-light-warning py-2 fs-5 text-uppercase px-5 mt-4">Pay</button>
                            </form>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" eventKey='second' id="Receive">
                            <p className="text-muted">Accept Payments</p>
                            <div className="d-flex flex-wrap align-items-center">
                                <img src={QrCode} alt="Download App" className="img-fluid" />
                                <form className="px-3">
                                    <div className="row g-3 mb-3 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                                        <div className="col">
                                            <label className="form-label">Currency</label>
                                            <select className="form-select">
                                                <option>MATIC</option>
                                                <option value="1">BNB</option>
                                                <option value="2">BTC</option>
                                                <option value="3">SOL</option>
                                                <option value="4">Atom</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label className="form-label">Amount</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label className="form-label">Note</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-warning py-2 fs-5 text-uppercase px-5">Confirm</button>
                                </form>
                            </div>
                            <h5 className="mt-4 mb-4">Payment History</h5>
                            <div id="ordertabthree_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                        <div id="myDataTable_filter" className="dataTables_filter">
                                            <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                    <DataTable
                                    title={LoanReceiveData.title}
                                    columns={LoanReceiveData.columns}
                                    data={LoanReceiveData.rows}
                                    defaultSortField="title"
                                    selectableRows={false}
                                    highlightOnHover={true}
                                />
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
export default CryptoPayLoan;