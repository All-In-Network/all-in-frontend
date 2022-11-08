import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import Chart from "react-apexcharts";
import { useWalletState } from '../../hooks/wallet';


function BalanceDetail() {


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
    const [series, setSeries] = useState([44, 55, 41, 17]);

    const [options1, setOptions1] = useState({
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
    const [series1, setSeries1] = useState([44, 55, 41]);
    const [circlemultile, setCirclemultile] = useState({
        chart: {
            height: 250,
            type: 'radialBar',
        },
        colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)', 'var(--chart-color4)'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    });
    const [seriescirclemultile, setSeriescirclemultile] = useState([44, 55, 67]);
    const [circleGradient, setCircleGradient] = useState({
        chart: {
            height: 250,
            type: 'radialBar',
            toolbar: {
                show: true
            }
        },
        colors: ['var(--chart-color1)'],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',

                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    showOn: 'always',
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ffd55d'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },

        stroke: {
            lineCap: 'round'
        },
        labels: ['Percent'],
    });
    const [seriesCircleGradient, setSeriesCircleGradient] = useState([75]);
    const [circleChart, setCircleChart] = useState({
        chart: {
            height: 250,
            type: 'radialBar',
        },
        colors: ['var(--chart-color1)'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        series: [70],
        labels: ['Cricket'],
    });
    const[seriesCircleChart,setSeriesCircleChart]=useState([70])



    const { totalBalance } = useWalletState()

    return (
        <div className='row g-3 mb-3 row-deck'>
            <div className="col-xl-12 col-xxl-5">
                <div className="card">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center">
                        <h6 className="mb-0 fw-bold">Goals</h6>
                    </div>
                    <div className="card-body">
                        <div className="row row-cols-2 g-0">
                            <div className="col">
                                <div className="security border-bottom border-end">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Profit Goal:</span>
                                            <span>$ 6.000</span>
                                            <span>In progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security border-bottom">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">EOD Drawdown</span>
                                            <span>$ 3.500</span>
                                            <span>In progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security  border-end">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Max Daily Loss</span>
                                            <span>$ 2.000</span>
                                            <span>In progress</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security ">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Maintain Consistency</span>
                                            <span>0 %</span>
                                            <span>In progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="security ">
                                    <div className="d-flex align-items-start px-2 py-3">
                                        <div className="dot-green mx-2 my-2"></div>
                                        <div className="d-flex flex-column">
                                            <span className="flex-fill text-truncate">Trade a Minimum of 15 Trading Days</span>
                                            <span>0 %</span>
                                            <span>Num Days: 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-xxl-7">
                <div className="card" >
                    <Tab.Container defaultActiveKey="first">
                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
                            <h6 className="mb-0 fw-bold">Balance Details</h6>
                        </div>
                        <div className="card-body">
                            <Tab.Content className="tab-content">
                                <Tab.Pane className="tab-pane fade show" id="Spot" eventKey="first">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div>Account balance:</div>
                                            <h3>{totalBalance}</h3>
                                            <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">Min Balance:</div>
                                            <h5>$ 9.600</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Total profit:</div>
                                            <h5>$ 2.000</h5>
                                            <div className="mt-3 text-uppercase text-muted small">Gain:</div>
                                            <h5>0 %</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ position: 'relative' }}>
                                            {/* <>apex Chart here</> */}
                                            <Chart
                                                options={options}
                                                series={series}
                                                type="donut"
                                                height="250"
                                            />
                                            <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '512px', height: '260px' }}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
            
        </div>
    )
}

export default BalanceDetail;