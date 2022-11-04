import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { OrderbookDatafirst, OrderbookDatasecond, OrderbookLongData, OrderbookSortData } from '../../Data/ExchangeData/OrderbookData';
import DataTable from 'react-data-table-component';


function OrderBookMarginTrade() {
    return (
        <div className="card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">BTC/USDT Order Book</h6>
            </div>
            <div className="card-body">
                <Tab.Container defaultActiveKey='first'>
                    <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Both" role="tab" aria-selected="false">Both</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Long" role="tab" aria-selected="false">Long</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='third' data-bs-toggle="tab" href="#Short" role="tab" aria-selected="true">Short</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                        <Tab.Pane className="tab-pane fade" id="Both" eventKey='first'>
                            <div id="priceTableup_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="priceTableup_length">
                                            <label>Show <select name="priceTableup_length" aria-controls="priceTableup" className="form-select form-select-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select> entries</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="priceTableup_filter" className="dataTables_filter">
                                            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="priceTableup" onChange={() => { }} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={OrderbookDatafirst.title}
                                            columns={OrderbookDatafirst.columns}
                                            data={OrderbookDatafirst.rows}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="priceTableup_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="priceTableup_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="priceTableup_previous">
                                                    <a href="#!" aria-controls="priceTableup" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a href="#!" aria-controls="priceTableup" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                                </li>
                                                <li className="paginate_button page-item next disabled" id="priceTableup_next">
                                                    <a href="#!" aria-controls="priceTableup" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="priceTabledown_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="priceTabledown_length">
                                            <label>Show <select name="priceTabledown_length" aria-controls="priceTabledown" className="form-select form-select-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select> entries</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="priceTabledown_filter" className="dataTables_filter">
                                            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="priceTabledown" onChange={() => { }} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={OrderbookDatasecond.title}
                                            columns={OrderbookDatasecond.columns}
                                            data={OrderbookDatasecond.rows}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="priceTabledown_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="priceTabledown_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="priceTabledown_previous">
                                                    <a href="#!" aria-controls="priceTabledown" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a href="#!" aria-controls="priceTabledown" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                                </li>
                                                <li className="paginate_button page-item next disabled" id="priceTabledown_next">
                                                    <a href="#!" aria-controls="priceTabledown" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" id="Long" eventKey='second'>

                            <div id="priceTableuponly_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="priceTableuponly_length">
                                            <label>Show <select name="priceTableuponly_length" aria-controls="priceTableuponly" className="form-select form-select-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select> entries</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="priceTableuponly_filter" className="dataTables_filter">
                                            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="priceTableuponly" onChange={() => { }} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={OrderbookLongData.title}
                                            columns={OrderbookLongData.columns}
                                            data={OrderbookLongData.rows}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="priceTableuponly_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="priceTableuponly_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="priceTableuponly_previous">
                                                    <a href="#!" aria-controls="priceTableuponly" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a href="#!" aria-controls="priceTableuponly" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                                </li>
                                                <li className="paginate_button page-item next disabled" id="priceTableuponly_next">
                                                    <a href="#!" aria-controls="priceTableuponly" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane fade" id="Short" eventKey='third'>

                            <div id="priceTabledownonly_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="priceTabledownonly_length">
                                            <label>Show <select name="priceTabledownonly_length" aria-controls="priceTabledownonly" className="form-select form-select-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select> entries</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="priceTabledownonly_filter" className="dataTables_filter">
                                            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="priceTabledownonly" onChange={() => { }} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <DataTable
                                            title={OrderbookSortData.title}
                                            columns={OrderbookSortData.columns}
                                            data={OrderbookSortData.rows}
                                            defaultSortField="title"
                                            selectableRows={false}
                                            highlightOnHover={true}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="priceTabledownonly_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="priceTabledownonly_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="priceTabledownonly_previous">
                                                    <a href="#!" aria-controls="priceTabledownonly" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a href="#!" aria-controls="priceTabledownonly" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                                </li>
                                                <li className="paginate_button page-item next disabled" id="priceTabledownonly_next">
                                                    <a href="#!" aria-controls="priceTabledownonly" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
                                                </li>
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
    )
}
export default OrderBookMarginTrade;
