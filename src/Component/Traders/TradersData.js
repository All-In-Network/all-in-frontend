import React, { useRef } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import Avatar1 from '../../assets/images/xs/avatar1.svg'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'

const data = [
  { title: 'All Time Return', value: '100%' },
  { title: 'Annualized Return', value: '20%' },
  { title: 'Track Record', value: '210 days' },
  { title: 'Max Drawdown', value: '-10%' },
  { title: 'Best Month', value: '20%' },
  { title: 'Worst Month', value: '-8%' },
]

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const chart = {
  labels,
  datasets: [
    {
      label: 'Track Record',
      data: [10, 30, 20, 50, 30, 40, 70],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

function MyBar() {
  const chartRef = useRef(null)

  return <Line ref={chartRef} data={chart} />
}

function TraderModal() {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          DeGen's trader profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyBar />
        <Container>
          {data.map(item => {
            return (
              <Row>
                <Col xs={12} md={8}>
                  {item.title}
                </Col>
                <Col xs={6} md={4}>
                  {item.value}
                </Col>
              </Row>
            )
          })}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const TradersListData = {
  title: 'Leaders List',
  columns: [
    {
      name: 'Trader Nickname',
      selector: row => row.nickname,
      sortable: true,
      cell: row => (
        <>
          <img className="avatar rounded-circle" src={row.image} alt="" />{' '}
          <span className="fw-bold ms-1">{row.nickname}</span>
        </>
      ),
      minWidth: '250px',
    },
    {
      name: 'Total Profit',
      selector: row => row.totalprofit,
      sortable: true,
    },
    {
      name: 'Active Days',
      selector: row => row.activedays,
      sortable: true,
    },
    {
      name: 'Followers Equity',
      selector: row => row.followersequity,
      sortable: true,
    },
    {
      name: 'Followers',
      selector: row => row.followers,
      sortable: true,
    },
    {
      name: '',
      selector: row => {},
      sortable: true,
      cell: () => (
        <div>
          <div className="openbtn text-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Show More
            </button>
            <div className="modal" tabIndex="-1" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">DeGen's trader profile</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <MyBar />
                    <Container>
                      {data.map(item => {
                        return (
                          <Row>
                            <Col xs={12} md={8}>
                              {item.title}
                            </Col>
                            <Col xs={6} md={4}>
                              {item.value}
                            </Col>
                          </Row>
                        )
                      })}
                    </Container>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  rows: [
    {
      nickname: 'Degen1',
      image: Avatar1,
      totalprofit: '$ 200',
      activedays: '20 Days',
      followersequity: '$ 200',
      followers: '30',
    },
    {
      nickname: 'Degen2',
      image: Avatar1,
      totalprofit: '$ 100',
      activedays: '50 Days',
      followersequity: '$ 200',
      followers: '30',
    },
    {
      nickname: 'Degen3',
      image: Avatar1,
      totalprofit: '$ 500',
      activedays: '52 Days',
      followersequity: '$ 200',
      followers: '30',
    },
    {
      nickname: 'Degen4',
      image: Avatar1,
      totalprofit: '$ 600',
      activedays: '10 Days',
      followersequity: '$ 400',
      followers: '30',
    },
  ],
}
