import { Modal } from "react-bootstrap";
import React, { useState } from "react";

function AdvanceSecurity() {
    const [enableModel, setEnableModel] = useState(false);
    const [changeModel, setChangeModel] = useState(false);
    return (
        <div className="col-xl-12">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent align-items-center ">
                    <h6 className="mb-0 fw-bold">Advanced Security</h6>
                </div>
                <div className="card-body">
                    <div className="border-bottom py-2 mb-2">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-xl-4">
                                <div className="d-flex">
                                    <i className="icofont-ui-lock fs-5 text-primary"></i>
                                    <div className="d-flex flex-column px-2">
                                        <span className="fw-bold">Login Password</span>
                                        <span className="text-muted small">Login password is used to log in to your account.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <button type="button" className="btn flex-fill btn-light-success py-2 fs-6 text-uppercase px-3 mt-2 mt-lg-0 float-lg-end" onClick={() => { setChangeModel(true) }}>Change</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom py-2 mb-2">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-xl-4">
                                <div className="d-flex">
                                    <i className="icofont-tasks fs-5 text-primary"></i>
                                    <div className="d-flex flex-column px-2">
                                        <span className="fw-bold">Withdrawal Whitelist</span>
                                        <span className="text-muted small">whitelisted withdrawal addresses.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-close-circled fs-5 text-danger"></i>
                                    <span className="px-2">OFF</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <button type="button" className="btn flex-fill btn-light-warning py-2 fs-6 text-uppercase px-3 mt-2 mt-lg-0 float-lg-end" onClick={() => { setEnableModel(true) }}>Enable</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-xl-4">
                                <div className="d-flex">
                                    <i className="icofont-anchor fs-5 text-primary"></i>
                                    <div className="d-flex flex-column px-2">
                                        <span className="fw-bold">Anti-Phishing Code</span>
                                        <span className="text-muted small">Protect your account from phishing attempts </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-close-circled fs-5 text-danger"></i>
                                    <span className="px-2">OFF</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <button type="button" className="btn flex-fill btn-light-warning py-2 fs-6 text-uppercase px-3 mt-2 mt-lg-0 float-lg-end" data-bs-toggle="modal" data-bs-target="#EnableModal">Enable</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modal" id="EnableModal" style={{ display: 'block' }} show={enableModel} onHide={() => { setEnableModel(false) }}>
                <div className="modal-content">
                    <Modal.Header className="modal-header" closeButton>
                        <h5 className="modal-title">Enable Settings</h5>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Set Your Code</label>
                                <input type="text" className="form-control" />
                                <div className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Your Code</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Check me out</label>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setEnableModel(false) }}>Close</button>
                        <button type="button" className="btn btn-primary">Activate</button>
                    </Modal.Footer>
                </div>
            </Modal>
            <Modal className="modal" id="ChangeModal" style={{ display: 'block' }} show={changeModel} onHide={() => { setChangeModel(true) }}>
                <div className="modal-content">
                    <Modal.Header className="modal-header" closeButton>
                        <h5 className="modal-title">Change Settings</h5>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Old Detail</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Detail</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Check me out</label>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setChangeModel(false) }}>Close</button>
                        <button type="button" className="btn btn-primary">Save Change</button>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    )
}

export default AdvanceSecurity;