import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function DefaultRefer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent">
                <h6 className="mb-0 fw-bold">Default Referral</h6>
            </div>
            <div className="card-body">
                <div className="bg-light p-2">
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="d-flex flex-column">
                            <span>You Receive</span>
                            <h5>60%</h5>
                        </div>
                        <div className="d-flex flex-column">
                            <span>Friends Receive</span>
                            <h5>10%</h5>
                        </div>
                    </div>
                </div>
                <form className="mt-5">
                    <div className="mb-3">
                        <label className="form-label">Referral ID</label>
                        <input type="text" className="form-control" value="195070150" onChange={()=>{}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Referral Link</label>
                        <input type="text" className="form-control" value="https://accounts/195070150" onChange={()=>{}}/>
                    </div>
                    <button type="button" className="btn btn-light-primary"  onClick={handleShow}>Click to Invite Friends</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <h5 className="modal-title">Invite Friends</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Enter Mobile Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Email</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Sent
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </form>
            </div>
        </div>
    )
}

export default DefaultRefer;