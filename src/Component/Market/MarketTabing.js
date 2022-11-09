import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import {
  AllCripto,
  favoritefutureData,
  favoriteMarginData,
  favoriteSpotData,
  feutureMarketCOIN,
  feutureMarketUSD,
  newListing,
  soptMarkebnb,
  soptMarkeBTC,
  soptMarketALTS,
  soptMarketETF,
  soptMarketFAIT,
} from '../Data/MarketData/MarketData';

function MarketTabing() {
  return (
    <>
      <Tab.Container defaultActiveKey="first">
        <div className="row g-3 my-5 border-bottom pb-4">
          <div className="col-lg-12 ">
            <Nav
              className="nav nav-tabs tab-body-header rounded d-inline-flex"
              role="tablist"
            >
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="first"
                  data-bs-toggle="tab"
                  href="#Favorites"
                  role="tab"
                  aria-selected="true"
                >
                  Favorites
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="second"
                  data-bs-toggle="tab"
                  href="#Spotmarkets"
                  role="tab"
                  aria-selected="false"
                >
                  Spot Markets
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="third"
                  data-bs-toggle="tab"
                  href="#Futuresmarkets"
                  role="tab"
                  aria-selected="false"
                >
                  Futures Markets
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="fourth"
                  data-bs-toggle="tab"
                  href="#Newlisting"
                  role="tab"
                  aria-selected="false"
                >
                  New listing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="fifth"
                  data-bs-toggle="tab"
                  href="#Allcryptos"
                  role="tab"
                  aria-selected="false"
                >
                  All Cryptos
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-lg-12 col-md-12">
            <Tab.Content className="tab-content">
              <Tab.Pane
                className="tab-pane fade"
                eventKey="first"
                id="Favorites"
              >
                <Tab.Container defaultActiveKey="first">
                  <Nav
                    className="nav nav-pills rounded d-inline-flex"
                    role="tablist"
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="first"
                        data-bs-toggle="tab"
                        href="#Spot"
                        role="tab"
                      >
                        Spot(6)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="second"
                        data-bs-toggle="tab"
                        href="#Futures"
                        role="tab"
                      >
                        Futures(6)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="third"
                        data-bs-toggle="tab"
                        href="#Margin"
                        role="tab"
                      >
                        Margin(3)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content mt-4">
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="first"
                      id="Spot"
                    >
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={favoriteSpotData.title}
                              columns={favoriteSpotData.columns}
                              data={favoriteSpotData.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="second"
                      id="Futures"
                    >
                      <div
                        id="DataTables_Table_1_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={favoritefutureData.title}
                              columns={favoritefutureData.columns}
                              data={favoritefutureData.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="third"
                      id="Margin"
                    >
                      <div
                        id="DataTables_Table_2_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={favoriteMarginData.title}
                              columns={favoriteMarginData.columns}
                              data={favoriteMarginData.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane
                className="tab-pane fade"
                eventKey="second"
                id="Spotmarkets"
              >
                <Tab.Container defaultActiveKey="first">
                  <Nav
                    className="nav nav-pills rounded d-inline-flex"
                    role="tablist"
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link "
                        eventKey="first"
                        data-bs-toggle="tab"
                        href="#BNB"
                        role="tab"
                      >
                        BNB
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="second"
                        data-bs-toggle="tab"
                        href="#BTC"
                        role="tab"
                      >
                        BTC
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="third"
                        data-bs-toggle="tab"
                        href="#ALTS"
                        role="tab"
                      >
                        ALTS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="fourth"
                        data-bs-toggle="tab"
                        href="#FIAT"
                        role="tab"
                      >
                        FIAT
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="fifth"
                        data-bs-toggle="tab"
                        href="#ETF"
                        role="tab"
                      >
                        ETF
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content mt-4">
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="first"
                      id="BNB"
                    >
                      <div
                        id="DataTables_Table_3_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={soptMarkebnb.title}
                              columns={soptMarkebnb.columns}
                              data={soptMarkebnb.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="second"
                      id="BTC"
                    >
                      <div
                        id="DataTables_Table_4_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={soptMarkeBTC.title}
                              columns={soptMarkeBTC.columns}
                              data={soptMarkeBTC.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>

                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="third"
                      id="ALTS"
                    >
                      <div
                        id="DataTables_Table_5_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={soptMarketALTS.title}
                              columns={soptMarketALTS.columns}
                              data={soptMarketALTS.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="fourth"
                      id="FIAT"
                    >
                      <div
                        id="DataTables_Table_6_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={soptMarketFAIT.title}
                              columns={soptMarketFAIT.columns}
                              data={soptMarketFAIT.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="fifth"
                      id="ETF"
                    >
                      <div
                        id="DataTables_Table_7_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={soptMarketETF.title}
                              columns={soptMarketETF.columns}
                              data={soptMarketETF.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane
                className="tab-pane fade"
                eventKey="third"
                id="Futuresmarkets"
              >
                <Tab.Container defaultActiveKey="first">
                  <Nav
                    className="nav nav-pills rounded d-inline-flex"
                    role="tablist"
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link "
                        eventKey="first"
                        data-bs-toggle="tab"
                        href="#USDFUTURES"
                        role="tab"
                      >
                        USDⓈ-M Futures
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="second"
                        data-bs-toggle="tab"
                        href="#COINFUTURE"
                        role="tab"
                      >
                        COIN-M Futures
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content mt-4">
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="first"
                      id="USDFUTURES"
                    >
                      <div
                        id="DataTables_Table_8_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={feutureMarketUSD.title}
                              columns={feutureMarketUSD.columns}
                              data={feutureMarketUSD.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="second"
                      id="COINFUTURE"
                    >
                      <div
                        id="DataTables_Table_9_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 col-md-6 mb-2 "
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              id="myDataTable_filter"
                              className="dataTables_filter"
                            >
                              <label className="d-flex align-items-center">
                                Search:
                                <div className="mx-1">
                                  <input
                                    type="search"
                                    className="form-control"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <DataTable
                              title={feutureMarketCOIN.title}
                              columns={feutureMarketCOIN.columns}
                              data={feutureMarketCOIN.rows}
                              defaultSortField="title"
                              selectableRows={false}
                              highlightOnHover={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3 ">
                          <div
                            className="col-sm-12 col-md-5"
                            style={{ float: 'left' }}
                          >
                            <div
                              className="dataTables_info"
                              id="myDataTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 7 of 7 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7 ">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="myDataTable_paginate"
                              style={{ float: 'right' }}
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="myDataTable_previous"
                                >
                                  <a href="#!" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#!" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="myDataTable_next"
                                >
                                  <a href="#!" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane
                className="tab-pane fade"
                eventKey="fourth"
                id="Newlisting"
              >
                <div
                  id="DataTables_Table_10_wrapper"
                  className="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-6 mb-2 "
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div
                        id="myDataTable_filter"
                        className="dataTables_filter"
                      >
                        <label className="d-flex align-items-center">
                          Search:
                          <div className="mx-1">
                            <input type="search" className="form-control" />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <DataTable
                        title={newListing.title}
                        columns={newListing.columns}
                        data={newListing.rows}
                        defaultSortField="title"
                        selectableRows={false}
                        highlightOnHover={true}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 ">
                    <div
                      className="col-sm-12 col-md-5"
                      style={{ float: 'left' }}
                    >
                      <div
                        className="dataTables_info"
                        id="myDataTable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 7 of 7 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7 ">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="myDataTable_paginate"
                        style={{ float: 'right' }}
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="myDataTable_previous"
                          >
                            <a href="#!" className="page-link">
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a href="#!" className="page-link">
                              1
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="myDataTable_next"
                          >
                            <a href="#!" className="page-link">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane
                className="tab-pane fade"
                eventKey="fifth"
                id="Allcryptos"
              >
                <div
                  id="DataTables_Table_11_wrapper"
                  className="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-6 mb-2 "
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div
                        id="myDataTable_filter"
                        className="dataTables_filter"
                      >
                        <label className="d-flex align-items-center">
                          Search:
                          <div className="mx-1">
                            <input type="search" className="form-control" />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <DataTable
                        title={AllCripto.title}
                        columns={AllCripto.columns}
                        data={AllCripto.rows}
                        defaultSortField="title"
                        selectableRows={false}
                        highlightOnHover={true}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 ">
                    <div
                      className="col-sm-12 col-md-5"
                      style={{ float: 'left' }}
                    >
                      <div
                        className="dataTables_info"
                        id="myDataTable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 7 of 7 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7 ">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="myDataTable_paginate"
                        style={{ float: 'right' }}
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="myDataTable_previous"
                          >
                            <a href="#!" className="page-link">
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a href="#!" className="page-link">
                              1
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="myDataTable_next"
                          >
                            <a href="#!" className="page-link">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
}
export default MarketTabing;
