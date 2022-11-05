import React, { useRef } from "react";
import PageTitle from "../../Component/Comman/PageTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { TradersListData } from "../../Component/Traders/TradersData";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
import DataTable from "react-data-table-component";


function Traders() {
    return (<>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Traders List' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className="row align-item-center">
                    <div className="col-md-12">
                    <div className="card mb-3">
                        <DataTable
                            title="Datatable"
                            columns={TradersListData.columns}
                            data={TradersListData.rows}
                            defaultSortField="title"
                            pagination

                            subHeaderComponent={() => {
                            return <input type="text" />
                            }}
                            selectableRows={false}
                            className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                            highlightOnHover={true}
                        />
    </div>
                    </div>
                </div>
            </div>

            <TraderModal />
        </>
    )
}
export default Traders;



const data = [
    { title: "All Time Return", value: "100%" },
    { title: "Annualized Return", value: "20%" },
    { title: "Track Record", value: "210 days" },
    { title: "Max Drawdown", value: "-10%" },
    { title: "Best Month", value: "20%" },
    { title: "Worst Month", value: "-8%" },
  ];
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  
  export const chart = {
    labels,
    datasets: [
      {
        label: "Track Record",
        data: [10, 30, 20, 50, 30, 40, 70],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };


  const MyBar = () => {
    const chartRef = useRef(null);
  
    return <Line ref={chartRef} data={chart} />;
  };

const TraderModal = () => {
    return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        DeGen's trader profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyBar/>
        <Container>
            {data.map((item)=> {
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
