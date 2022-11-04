import React from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthRight from "./AuthRight";

function Signin() {
    return (<>
        <div className="body d-flex p-0 p-xl-5">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100">
                        <div className="d-flex flex-column">
                            <h1>Connect wallet</h1>
                            <Tab.Container defaultActiveKey="first">
                                <Tab.Content className="tab-content mt-4 mb-3" >
                                    <Tab.Pane className="tab-pane fade " id="Email" eventKey="first">
                                        <div className="card">
                                            <div className="card-body p-4">
                                                <form>
                                                    <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Connect Wallet</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Signin;