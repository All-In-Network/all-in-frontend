import React from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthRight from "./AuthRight";


function Signup() {
    return (
        <>
            <div className="body d-flex p-0 p-xl-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100">
                            <div className="d-flex flex-column">
                                <h1>Create Your Account</h1>
                                <span className="text-muted">Register with your email or mobile</span>
                                <Tab.Container defaultActiveKey="first">
                                    <Nav className="nav nav-pills mt-4" role="tablist">
                                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="first">Email</Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="second">Mobile</Nav.Link></Nav.Item>
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
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Password</label>
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Referral ID</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Create Account</button>
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
                                                            <Dropdown.Toggle className="btn btn-outline-secondary dropdown-toggle" type="button">+91 India</Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu">
                                                                <li><Dropdown.Item className="dropdown-item" href="#!">+376 Andora</Dropdown.Item></li>
                                                                <li><Dropdown.Item className="dropdown-item" href="#!">+61 Australia</Dropdown.Item></li>
                                                                <li><Dropdown.Item className="dropdown-item" href="#!">+55 Brazil</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                            <input type="text" className="form-control" />
                                                        </Dropdown>
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Password</label>
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Referral ID</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Create Account</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <Link to={process.env.PUBLIC_URL+"/sign-in"} title="#">Already registered? <span className="text-secondary text-decoration-underline">Log In</span></Link>
                            </div>
                        </div>
                        <AuthRight />
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Signup;