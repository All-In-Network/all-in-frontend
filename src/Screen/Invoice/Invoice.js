import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import EmailInvoice from "../../Component/Invoice/EmailInvoice";
import InvoiceList from "../../Component/Invoice/InvoiceList";
import SimpleInvoice from "../../Component/Invoice/SimpleInvoice";

function Invoice() {
    return (
        <div className="container-xxl">
            <Tab.Container defaultActiveKey="second">
                <Row>
                    <Col sm={12}>
                    <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0 py-3 pb-2">Invoices</h3>
                        <div className="col-auto py-2 w-sm-100">
                            <Nav className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="first" href="#Invoice-list">Invoice List</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey="second" href="#Invoice-Simple" >Simple invoice</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="third" href="#Invoice-Email" >Email invoice</Nav.Link></Nav.Item>
                            </Nav>
                        </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12">
                                <Tab.Content className="tab-content">
                                    <Tab.Pane className="tab-pane fade  show" eventKey="first" id="Invoice-list">
                                        <InvoiceList />
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade  show" eventKey="second" id="Invoice-Simpl">
                                        <SimpleInvoice />
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade show" eventKey="third" id="Invoice-Email">
                                        <EmailInvoice />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}
export default Invoice;