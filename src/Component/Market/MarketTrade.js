import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

function MarketTrade() {
  return (
    <div className="col-xl-12 col-xxl-4">
      <div className="card">
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
          <h6 className="mb-0 fw-bold ">Trade Panel</h6>
        </div>
        <div className="card-body">
          <Tab.Container defaultActiveKey="first">
            <Nav
              className="nav nav-tabs tab-body-header rounded d-inline-flex mb-4"
              role="tablist"
            >
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="first"
                  data-bs-toggle="tab"
                  href="#Market"
                  role="tab"
                  aria-selected="true"
                >
                  Market
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content">
              <Tab.Pane className="tab-pane fade" id="Market" eventKey="first">
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <span className="small text-muted">Avbl</span>
                      <span className="">10.000 USD</span>
                    </div>
                    <form>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Price</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Entry Price"
                          onChange={() => {}}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">TP/SL</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Take Profit"
                            onChange={() => {}}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Stop Loss"
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                      <div className="mb-3 d-flex justify-content-between">
                        <button
                          type="submit"
                          className="btn btn-light-success px-5 py-2 text-uppercase"
                        >
                          Buy
                        </button>
                        <button
                          type="submit"
                          className="btn btn-light-danger px-5 py-2 text-uppercase"
                        >
                          Sell
                        </button>
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
  );
}

export default MarketTrade;
