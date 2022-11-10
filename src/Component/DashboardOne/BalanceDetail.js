import React, { useState } from 'react'
import { Tab } from 'react-bootstrap'
import Chart from 'react-apexcharts'
import { useWalletState } from '../../hooks/wallet'

function BalanceDetail() {
  const [options] = useState({
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
    colors: [
      'var(--chart-color1)',
      'var(--chart-color2)',
      'var(--chart-color3)',
      'var(--chart-color4)',
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  })
  const [series] = useState([44, 55, 41, 17])

  const { totalBalance } = useWalletState()

  return (
    <div className="row g-3 mb-3 row-deck">
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
                    <div className="dot-green mx-2 my-2" />
                    <div className="d-flex flex-column">
                      <span className="flex-fill text-truncate">
                        Profit Goal:
                      </span>
                      <span>$ 6.000</span>
                      <span>In progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security border-bottom">
                  <div className="d-flex align-items-start px-2 py-3">
                    <div className="dot-green mx-2 my-2" />
                    <div className="d-flex flex-column">
                      <span className="flex-fill text-truncate">
                        EOD Drawdown
                      </span>
                      <span>$ 3.500</span>
                      <span>In progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security  border-end">
                  <div className="d-flex align-items-start px-2 py-3">
                    <div className="dot-green mx-2 my-2" />
                    <div className="d-flex flex-column">
                      <span className="flex-fill text-truncate">
                        Max Daily Loss
                      </span>
                      <span>$ 2.000</span>
                      <span>In progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security ">
                  <div className="d-flex align-items-start px-2 py-3">
                    <div className="dot-green mx-2 my-2" />
                    <div className="d-flex flex-column">
                      <span className="flex-fill text-truncate">
                        Maintain Consistency
                      </span>
                      <span>0 %</span>
                      <span>In progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security ">
                  <div className="d-flex align-items-start px-2 py-3">
                    <div className="dot-green mx-2 my-2" />
                    <div className="d-flex flex-column">
                      <span className="flex-fill text-truncate">
                        Trade a Minimum of 15 Trading Days
                      </span>
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
        <div className="card">
          <Tab.Container defaultActiveKey="first">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
              <h6 className="mb-0 fw-bold">Balance Details</h6>
            </div>
            <div className="card-body">
              <Tab.Content className="tab-content">
                <Tab.Pane
                  className="tab-pane fade show"
                  id="Spot"
                  eventKey="first"
                >
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div>Account balance:</div>
                      <h3>{totalBalance}</h3>
                      <div className="mt-3 pt-3 text-uppercase text-muted pt-2 small">
                        Min Balance:
                      </div>
                      <h5>$ 9.600</h5>
                      <div className="mt-3 text-uppercase text-muted small">
                        Total profit:
                      </div>
                      <h5>$ 2.000</h5>
                      <div className="mt-3 text-uppercase text-muted small">
                        Gain:
                      </div>
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
                      <div className="resize-triggers">
                        <div className="expand-trigger">
                          <div style={{ width: '512px', height: '260px' }} />
                        </div>
                        <div className="contract-trigger" />
                      </div>
                    </div>
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

export default BalanceDetail
