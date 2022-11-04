import React from 'react';
import DataTable from 'react-data-table-component';
import { FutureStatusOpenOrderData, FutureStatusOrederHistoryData, FutureStatusTradeHistoryData } from '../Data/FutureData/FutureStatusData';
import { Tab, Nav } from 'react-bootstrap';

function FutureStatus() {
    return (
        <div className="col-xl-7">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">Future Status</h6>
                </div>
                <div className="card-body">
                    <Tab.Container defaultActiveKey='first'>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mb-3" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link eventKey='first' className="nav-link" data-bs-toggle="tab" href="#OpenOrder" role="tab">Open Order(5)</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link eventKey='second' className="nav-link" data-bs-toggle="tab" href="#OrderHistory" role="tab">Order History</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link eventKey='third' className="nav-link" data-bs-toggle="tab" href="#TradeHistory" role="tab">Trade History</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane fade" eventKey='first' id="OpenOrder">
                                <div id="ordertabone_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                                                title={FutureStatusOpenOrderData.title}
                                                columns={FutureStatusOpenOrderData.columns}
                                                data={FutureStatusOpenOrderData.rows}
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
                            <Tab.Pane className="tab-pane fade" eventKey='second' id="OrderHistory">
                                <div id="ordertabtwo_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                                                title={FutureStatusOrederHistoryData.title}
                                                columns={FutureStatusOrederHistoryData.columns}
                                                data={FutureStatusOrederHistoryData.rows}
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
                                </div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade" eventKey='third' id="TradeHistory">
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
                                                title={FutureStatusTradeHistoryData.title}
                                                columns={FutureStatusTradeHistoryData.columns}
                                                data={FutureStatusTradeHistoryData.rows}
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
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}
export default FutureStatus;