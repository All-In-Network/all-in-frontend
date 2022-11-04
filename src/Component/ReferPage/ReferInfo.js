import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Nav, Tab } from "react-bootstrap";

function ReferInfo() {
    const [options, setOptions] = useState({
        chart: {
            height: 250,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            show: true,
        },
        colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)', 'var(--chart-color4)'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    });
    const [series, setSeries] = useState([30, 43, 124, 112]);
    return (
        <div className="card">
            <Tab.Container defaultActiveKey='first'>
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
                    <h6 className="mb-0 fw-bold">Refer Info</h6>
                    <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' href="#All" role="tab">All</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' href="#Yesterday" role="tab">Yesterday</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='third' href="#Week" role="tab">This Week</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='fourth' href="#Month" role="tab">This Month</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <div className="card-body">
                    <Tab.Content className="tab-content">
                        <Tab.Pane className="tab-pane" id="All" eventKey='first'>
                            <div className="row g-3">
                                <div className="col-lg-6">
                                    <div>Account balance:</div>
                                    <h3>30.18005388 BTC</h3>
                                    <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Top Referrer Bonus</div>
                                    <h5>43.0675432 BTC</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends</div>
                                    <h5>124</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends Who Started Trading</div>
                                    <h5>112</h5>
                                    <div className="mt-3 text-uppercase text-muted small">ID</div>
                                    <h5>195070150</h5>
                                </div>
                                <div className="col-lg-6" style={{ position: 'relative' }}>
                                    <Chart
                                        options={options}
                                        series={series}
                                        type="donut"
                                        height="250"
                                    />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane" id="All" eventKey='second'>
                        <div className="row g-3">
                                <div className="col-lg-6">
                                    <div>Account balance:</div>
                                    <h3>30.18005388 BTC</h3>
                                    <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Top Referrer Bonus</div>
                                    <h5>43.0675432 BTC</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends</div>
                                    <h5>124</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends Who Started Trading</div>
                                    <h5>112</h5>
                                    <div className="mt-3 text-uppercase text-muted small">ID</div>
                                    <h5>195070150</h5>
                                </div>
                                <div className="col-lg-6" style={{ position: 'relative' }}>
                                    <Chart
                                        options={options}
                                        series={series}
                                        type="donut"
                                        height="250"
                                    />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane" id="All" eventKey='third'>
                        <div className="row g-3">
                                <div className="col-lg-6">
                                    <div>Account balance:</div>
                                    <h3>30.18005388 BTC</h3>
                                    <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Top Referrer Bonus</div>
                                    <h5>43.0675432 BTC</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends</div>
                                    <h5>124</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends Who Started Trading</div>
                                    <h5>112</h5>
                                    <div className="mt-3 text-uppercase text-muted small">ID</div>
                                    <h5>195070150</h5>
                                </div>
                                <div className="col-lg-6" style={{ position: 'relative' }}>
                                    <Chart
                                        options={options}
                                        series={series}
                                        type="donut"
                                        height="250"
                                    />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane" id="All" eventKey='fourth'>
                        <div className="row g-3">
                                <div className="col-lg-6">
                                    <div>Account balance:</div>
                                    <h3>30.18005388 BTC</h3>
                                    <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Top Referrer Bonus</div>
                                    <h5>43.0675432 BTC</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends</div>
                                    <h5>124</h5>
                                    <div className="mt-3 text-uppercase text-muted small">Friends Who Started Trading</div>
                                    <h5>112</h5>
                                    <div className="mt-3 text-uppercase text-muted small">ID</div>
                                    <h5>195070150</h5>
                                </div>
                                <div className="col-lg-6" style={{ position: 'relative' }}>
                                    <Chart
                                        options={options}
                                        series={series}
                                        type="donut"
                                        height="250"
                                    />
                                </div>
                            </div>
                        </Tab.Pane>

                    </Tab.Content>
                </div>
            </Tab.Container>
        </div>
    )
}

export default ReferInfo;