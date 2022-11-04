import React from "react";
import { Link } from "react-router-dom";
import AuthRight from "./AuthRight";

function Verification() {
    return (
        <>
            <div className="body d-flex p-0 p-xl-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100">
                            <div className="d-flex flex-column">
                                <h1>Verification</h1>
                                <span className="text-muted">We sent a verification code to your email or phone. <br />Enter the code from the field below.</span>
                                <div className="card mt-4 mb-3" style={{ maxWidth: '30rem' }} >
                                    <div className="card-body p-4">
                                        <form className="row g-1">
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="text" className="form-control form-control-lg text-center" placeholder="-" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="text" className="form-control form-control-lg text-center" placeholder="-" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="text" className="form-control form-control-lg text-center" placeholder="-" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="text" className="form-control form-control-lg text-center" placeholder="-" />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center mt-4">
                                                <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100">Verify my account</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <Link to={process.env.PUBLIC_URL+"#!"} title="#" className="text-primary text-decoration-underline">Resend a new code?</Link>
                            </div>
                        </div>

                        <AuthRight/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification;