import React, { useState } from "react";

function HorizontalForm() {

    const [firststep, setFirststep] = useState(false);
    const [secondstep, setSecondstep] = useState(false);
    const [thirdstep, setThirdstep] = useState(false);
    const [prebutton, setPrebutton] = useState(false);
    const [nextbtn, setNextbtn] = useState(false);


    return (<div className="col-lg-12">
        <div className="card mb-3">
            <div className="card-header">
                <h5 className="mb-0">Form Wizard Horizontal</h5>
            </div>
            <div className="card-body">
                <div className="wizard-main" id="w-horizontal">
                    <div className="step-app">
                        <ul className="step-steps list-unstyled">
                            <li data-step-target="step1" className={`${!firststep?"active":""}`} onClick={()=>{setFirststep(false);setSecondstep(false);setThirdstep(false)}}><span>1</span> Account Information</li>
                            <li data-step-target="step2" className={`${secondstep?"active":""}`}  onClick={()=>{setSecondstep(true);setFirststep(true);setThirdstep(false) }}><span>2</span> User Information</li>
                            <li data-step-target="step3" className={`${thirdstep?"active":""}`} onClick={()=>{setThirdstep(true);setFirststep(true);setSecondstep(false)}}><span>3</span> Social ID</li>
                        </ul>
                        <div className="step-content">

                            <div className={`step-tab-panel active ${ firststep ? "d-none" : ""}`} data-step="step1">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4 col-12 mb-3">
                                            <label className="col-form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-4 col-12 mb-3">
                                            <label className="col-form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Maxwell" />
                                        </div>
                                        <div className="col-md-4 col-12 mb-3">
                                            <label className="col-form-label">User ID</label>
                                            <input type="text" className="form-control" placeholder="Nellie_Maxwell" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Password</label>
                                            <input type="text" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Confirm Password</label>
                                            <input type="text" className="form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={`step-tab-panel ${secondstep ? "" : "d-none"}`} data-step="step2">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder="Nellie" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Maxwell" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Country</label>
                                            <input type="hidden" className="form-control" />
                                            <fieldset>
                                                <select className="country form-control form-select" aria-label="example">
                                                    <option >Select Country</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="France">France</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="India">India</option>
                                                    <option value="Japan">Japan</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Language</label>
                                            <input type="hidden" className="form-control" />
                                            <fieldset>
                                                <select className="language form-control form-select" aria-label="example">
                                                    <option >Select Language</option>
                                                    <option>English</option>
                                                    <option>Mandari</option>
                                                    <option>Spanish</option>
                                                    <option>German</option>
                                                    <option>Portuguese</option>
                                                    <option>Arabic</option>
                                                    <option>French</option>
                                                    <option>Japanese</option>
                                                    <option>Russian</option>
                                                    <option>Hindi</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={`step-tab-panel ${thirdstep ? "" : "d-none"}`} data-step="step1">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Facebook</label>
                                            <input type="text" className="form-control" placeholder="Facebook Profile Link" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Instagram</label>
                                            <input type="text" className="form-control" placeholder="Instagram Profile Link" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Google+</label>
                                            <input type="text" className="form-control" placeholder="Google+ Profile Link" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="col-form-label">Twitter</label>
                                            <input type="text" className="form-control" placeholder="Twitter Profile Link" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="step-footer d-flex">
                            <button data-step-action="prev" className={`btn btn-primary step-btn ${prebutton ? "" : "d-none"}`} onClick={()=>{ setFirststep(false);setSecondstep(false);setThirdstep(false)}}>Prev</button>
                            {
                                nextbtn ? null : <button data-step-action="next" className="btn btn-primary step-btn" onClick={() => { setSecondstep(true); setPrebutton(true);setNextbtn(true);setFirststep(true) }}>Next</button>
                            }
                            {
                                nextbtn ? <button data-step-action="next" className="btn btn-primary step-btn" onClick={() => {setFirststep(true);setThirdstep(true);setSecondstep(false) }}>Next</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HorizontalForm;