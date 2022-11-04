import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import ExpensesDetail from "../../Component/Expenses/ExpensesDetail";

function Expenses() {
    const[modal,setModal]=useState(false)
    return (
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="border-0 mb-4">
                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                        <h3 className="fw-bold mb-0">Compnay Expense</h3>
                        <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                            <button type="button" className="btn btn-primary w-sm-100" data-bs-toggle="modal" data-bs-target="#expadd" onClick={()=>{setModal(true)}}><i className="icofont-plus-circle me-2 fs-6"></i>Add Expenses</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix g-3">
                <ExpensesDetail />
            </div>
            <Modal className="modal fade" show={modal} onHide={()=>{setModal(false)}} style={{ display: 'block' }}>
                <Modal.Header className="modal-header" closeButton>
                    <h5 className="modal-title  fw-bold" id="expaddLabel"> Add Expenses</h5>
                    
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="item" className="form-label">Exp Item</label>
                                    <input type="text" className="form-control" id="item" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input type="text" className="form-control" id="amount" />
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="depone" className="form-label">Exp Order By</label>
                                    <input type="text" className="form-control" id="depone" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="abc" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="abc" />
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="deptwo" className="form-label">From</label>
                                    <input type="text" className="form-control" id="deptwo" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Status</label>
                                    <select className="form-select">
                                        <option selected="">In Progress</option>
                                        <option value="1">Completed</option>
                                        <option value="2">Wating</option>
                                        <option value="3">Decline</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                    <button type="submit" className="btn btn-warning">Add</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Expenses;