import React, { useState } from "react";
import { Tab, Nav, Modal } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { p2pSellBtcData, p2pSellUsdtData } from "../Data/P2pData/P2pData";


function P2PsellTabing() {
    const [table_row, settable_row] = useState([...p2pSellUsdtData.rows]);
    const [table_row1, settable_row1] = useState([...p2pSellBtcData.rows]);
    const [iseditmodal, setiseditmodal] = useState(false);

    const columns = () => {
        return [
            {
                name: "ADVERTISER",
                selector: (row) => row.symbol,
                sortable: true,
                cell: (row) => <>
                    <div className="d-flex align-items-center">
                        <div className="avatar xs rounded-circle no-thumbnail">{row.symbol}</div>
                        <span className="mx-1 fs-6">{row.coinName}</span>
                        {
                            row.icon ? <i className="icofont-badge fs-5 text-warning"></i> : null

                        }
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="text-muted small mx-1">{row.orders}</span>
                        <span className="text-muted small mx-1">{row.completion}</span>
                    </div>
                </>,
                minWidth: '400px'

            },
            {
                name: "PRICE",
                selector: (row) => row.price,
                sortable: true,
                minWidth: '50px'
            },
            {
                name: "LIMIT/AVAILABLE",
                selector: (row) => row.executed,
                sortable: true,
                cell: (row) => <>
                    <div className="d-flex align-items-center">
                        <span className="text-muted small mx-1 min-width-5">Available</span>
                        <span className="mx-1">{row.availabel}</span>
                    </div><br></br>
                    <div className="d-flex align-items-center">
                        <span className="text-muted small mx-1 min-width-55">Limit</span>
                        <span className="mx-1">{row.limit}</span>
                    </div>
                </>,
                minWidth: '400px'
            },
            {
                name: "PAYMENT",
                selector: (row) => row.executed,
                sortable: true,
                cell: (row) => <>

                    {
                        row.upi ? <span className="badge bg-light text-dark mx-1">UPI</span> : null
                    }
                    {
                        row.imps ? <span className="badge bg-light color-light-success mx-1">IMPS</span> : null
                    }
                    {
                        row.paytm ? <span className="badge bg-light color-santa-fe  mx-1">Paytm</span> : null
                    }
                    {
                        row.phonepay ? <span className="badge bg-light color-lavender-purple mx-1">Phonepe</span> : null
                    }
                    {
                        row.gpay ? <span className="badge bg-light color-lightblue mx-1">GPay</span> : null
                    }
                    {
                        row.banktransfer ? <span className="badge bg-light color-careys-pink mx-1">Bank Transfer</span> : null
                    }

                </>,
                minWidth: '250px'
            },
            {
                name: "TRADE",
                selector: (row) => row.executed,
                sortable: true,
                cell: () => <button type="button" className="btn btn-light-danger text-uppercase p-1" onClick={() => setiseditmodal(true)}>Buy USDT</button>,
                minWidth: '100px'

            }
        ]
    }
    return (
        <div className="card no-bg">
            <Tab.Container defaultActiveKey='first'>
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center flex-wrap">
                    <h6 className="mb-0 fw-bold ">P2P BUY</h6>
                    <div className="col-12 col-md-auto">
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='first' data-bs-toggle="tab" href="#USDTBUY" role="tab">USDT</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#BTCBUY" role="tab">BTC</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='third' data-bs-toggle="tab" href="#BUSDBUY" role="tab">BUSD</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='fourth' data-bs-toggle="tab" href="#BNBBUY" role="tab">BNB</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='fifth' data-bs-toggle="tab" href="#ETHBUY" role="tab">ETH</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="card-body">
                    <Tab.Content className="tab-content">
                        <Tab.Pane className="tab-pane fade" id="USDTBUY" eventKey='first'>
                            <div id="p2pone_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row"><div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div></div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={p2pSellUsdtData.title}
                                            columns={columns()}
                                            data={table_row}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div></div>
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
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" id="BTCBUY" eventKey='second'>
                            <div id="p2ptwo_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row"><div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div></div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={p2pSellBtcData.title}
                                            columns={columns()}
                                            data={table_row}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div></div>
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
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" id="BTCBUY" eventKey='third'>
                            <div id="p2ptwo_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row"><div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div></div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={p2pSellBtcData.title}
                                            columns={columns()}
                                            data={table_row}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div></div>
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
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" id="BTCBUY" eventKey='fourth'>
                            <div id="p2ptwo_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row"><div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div></div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={p2pSellBtcData.title}
                                            columns={columns()}
                                            data={table_row}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div></div>
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
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" id="BTCBUY" eventKey='fifth'>
                            <div id="p2ptwo_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row"><div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div></div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={p2pSellBtcData.title}
                                            columns={columns()}
                                            data={table_row}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div></div>
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
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>

            <Modal className="modal fade" show={iseditmodal} onHide={() => setiseditmodal(false)} style={{ display: 'block' }} >
                <Modal.Header className="modal-header" closeButton>
                    <h5 className="modal-title  fw-bold">Sell Order</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-12">
                                    <label className="form-label">I want to sell</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">USDT</span>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label">I will recevied</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">INR</span>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label">Payment Method</label>
                                    <select className="form-select">
                                        <option selected="">UPI</option>
                                        <option value="1">UPI</option>
                                        <option value="2">IMPS</option>
                                        <option value="3">Bank Transfer</option>
                                        <option value="4">Google Pay(Gpay)</option>
                                        <option value="5">Paytm</option>
                                        <option value="6">Phonepay</option>
                                        <option value="7">Mokwikbi</option>
                                        <option value="8">SWIFT</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setiseditmodal(false)}>Done</button>
                    <button type="submit" className="btn btn-light-danger text-uppercase">Sell USDT</button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default P2PsellTabing;