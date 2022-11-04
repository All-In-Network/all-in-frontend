import React, { useState } from "react";

function AddYourCoin() {
    const [firststep, setFirststep] = useState(false);
    const [secondstep, setSecondstep] = useState(false);
    const [thirdstep, setThirdstep] = useState(false);
    const [prebutton, setPrebutton] = useState(false);
    const [nextbtn, setNextbtn] = useState(false);


    return (<div className="col-lg-12">
        <div className="card">
            <div className="card-header">
                <h5 className="mb-0">Form Wizard Horizontal</h5>
            </div>
            <div className="card-body">
                <div className="wizard-main" id="w-horizontal">
                    <div className="step-app">
                        <ul className="step-steps">
                            <li data-step-target="step1" className={`${!firststep ? "active" : ""}`} onClick={() => { setFirststep(false); setSecondstep(false); setThirdstep(false) }}><span>1</span> Fill Out Basic Inforamtion</li>
                            <li data-step-target="step2" className={`${secondstep ? "active" : ""}`} onClick={() => { setSecondstep(true); setFirststep(true); setThirdstep(false) }}><span>2</span> Complete Detailed Inforamtion</li>
                            <li data-step-target="step3" className={`${thirdstep ? "active" : ""}`} onClick={() => { setThirdstep(true); setFirststep(true); setSecondstep(false) }}><span>3</span> Application Submitted</li>
                        </ul>
                        <div className="step-content">

                            <div className={`step-tab-panel active ${firststep ? "d-none" : ""}`} data-step="step1">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4 col-12 mb-3">
                                            <label className="col-form-label">Project Name</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-4 col-12 mb-3">
                                            <label className="col-form-label">Token/Coin Full Name</label>
                                            <input type="text" className="form-control" placeholder="Maxwell" />
                                        </div>
                                        <div className="col-md-4 col-12 mb-3">
                                            <label className="col-form-label">Token/Coin Symbol</label>
                                            <input type="text" className="form-control" placeholder="Nellie_Maxwell" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Email</label>
                                            <input type="text" className="form-control" placeholder="Password" />
                                        </div>
                                        {/* <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Confirm Password</label>
                                            <input type="text" className="form-control" placeholder="Confirm Password" />
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                            <div className={`step-tab-panel ${secondstep ? "" : "d-none"}`} data-step="step2">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Email</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Your full Name</label>
                                            <input type="text" className="form-control" placeholder="Maxwell" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Company Name</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Position with this Project</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Project Name</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Token/Coin full name</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Project's official website Link</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-12 col-12 mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">I have completed all information required in the form.</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={`step-tab-panel ${thirdstep ? "" : "d-none"}`} data-step="step1">
                                <div className="step-tab-panel active" data-step="step1">
                                    <div className="d-flex justify-content-center flex-column align-items-center">
                                        <i className="icofont-checked fs-1 my-2"></i>
                                        <h1 className="mt-4">Application Submmited SuccessFully</h1>
                                        <p>Your application has been placed into a queue for review.Application passing the intial review will be contacted al a later date,as outline during the submission process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="step-footer d-flex">
                            <button data-step-action="prev" className={`btn btn-primary step-btn ${prebutton ? "" : "d-none"}`} onClick={() => { setFirststep(false); setSecondstep(false); setThirdstep(false) }}>Prev</button>
                            {
                                nextbtn ? null : <button data-step-action="next" className="btn btn-primary step-btn" onClick={() => { setSecondstep(true); setPrebutton(true); setNextbtn(true); setFirststep(true) }}>Next</button>
                            }
                            {
                                nextbtn ? <button data-step-action="next" className="btn btn-primary step-btn" onClick={() => { setFirststep(true); setThirdstep(true); setSecondstep(false) }}>Next</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddYourCoin;