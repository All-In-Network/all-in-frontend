import React from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthRight from "./AuthRight";

function ForgotPassword() {
    return (
        <>
            <div className="body d-flex p-0 p-xl-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100">
                            <div className="d-flex flex-column">
                                <h1>Reset Your Password</h1>
                                <Tab.Container defaultActiveKey="first">
                                    <Nav className="nav nav-pills mt-4" role="tablist">
                                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="first" href="#!">Email</Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="second" href="#!">Mobile</Nav.Link></Nav.Item>
                                    </Nav>
                                    <Tab.Content className="tab-content mt-4 mb-3">
                                        <Tab.Pane className="tab-pane fade" id="Email" eventKey="first">
                                            <div className="card">
                                                <div className="card-body p-4">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Email address</label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                        <Link to={process.env.PUBLIC_URL + "/verification"} className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Next</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="tab-pane fade" id="Mobile" eventKey="second">
                                            <div className="card">
                                                <div className="card-body p-4">
                                                    <form>
                                                        <label className="form-label fs-6">Mobile</label>
                                                        <Dropdown className="input-group mb-3">
                                                            <Dropdown.Toggle className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91 India</Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu">
                                                                <li><Dropdown.Item className="dropdown-item">+376 Andora</Dropdown.Item></li>
                                                                <li><Dropdown.Item className="dropdown-item">+61 Australia</Dropdown.Item></li>
                                                                <li><Dropdown.Item className="dropdown-item">+55 Brazil</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                            <input type="text" className="form-control" />
                                                        </Dropdown>
                                                        <Link to={process.env.PUBLIC_URL + "/verification"} className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Next</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                        <AuthRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword