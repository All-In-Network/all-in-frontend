import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { ExpenseData } from "../Data/ExpensesData/ExpensesData";

function ExpensesDetail() {
    const [ismodal, setIsmodal] = useState(false);
    const [table_row, setTable_row] = useState([...ExpenseData.rows]);
    const columns = () => {
        return [
            {
                name: " ID",
                selector: (row) => row.id,
                sortable: true,
                // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
            },
            {
                name: "EXP ITEM",
                selector: (row) => row.item,
                sortable: true,

            },
            {
                name: "EXP ORDER BY",
                selector: (row) => row.name,
                cell: row => <><img className="avatar rounded-circle mx-3" src={row.image} alt="" /> <span className="fw-bold">{row.name}</span></>,
                sortable: true, minWidth: "250px"
            },
            {
                name: "DATE",
                selector: (row) => row.date,
                sortable: true
            },
            {
                name: "FROM",
                selector: (row) => row.from,
                sortable: true
            },
            {
                name: "AMOUNT",
                selector: (row) => row.amount,
                sortable: true
            },
            {
                name: "STATUS",
                selector: (row) => row.status,
                sortable: true,
                cell: row => <span className={`badge ${row.status === "Completed" ? 'bg-success' : "bg-warning"}`}>{row.status}</span>
            },
            {
                name: "ACTION",
                selector: (row) => { },
                sortable: true,
                cell: (row) => <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" onClick={() => { setIsmodal(true) }} className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                    <button type="button" onClick={() => { onDeleteRow(row) }} className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                </div>
            }

        ]
    }

    async function onDeleteRow(row) {
        // console.log(row);
        var result = await table_row.filter((d) => { console.log(d); if (d !== row) { return d } });
        // console.log(result);
        setTable_row([...result])
    }
    return (
        <>
            <div className="col-sm-12">
                <div className="card mb-3">
                    <div className="card-body">
                        <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                            <div className="row">
                                <div className="col-sm-12">
                                    <DataTable
                                        columns={columns()}
                                        data={table_row}
                                        defaultSortField="title"
                                        pagination
                                        selectableRows={false}
                                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                                        highlightOnHover={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modal fade" show={ismodal} onHide={()=>{setIsmodal(false)}} id="expedit" style={{ display: 'block' }} >
                <Modal.Header className="modal-header" closeButton>
                    <h5 className="modal-title  fw-bold" id="expeditLabel"> Edit Expenses</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="item1" className="form-label">Exp Item</label>
                                    <input type="text" className="form-control" id="item1" value="Mortgage Payments" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="amount1" className="form-label">Amount</label>
                                    <input type="text" className="form-control" id="amount1" value="$50000" />
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label className="form-label">Exp Order By</label>
                                    <select className="form-select">
                                        <option selected="">Joan Dyer</option>
                                        <option value="1">Ryan Randall</option>
                                        <option value="2">Phil Glover</option>
                                        <option value="3">Victor Rampling</option>
                                        <option value="4">Sally Graham</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="abc1" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="abc1" value="2021-05-12" />
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="deptwo1" className="form-label">From</label>
                                    <input type="text" className="form-control" id="deptwo1" value="Office Owner" />
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
                    <button type="submit" className="btn btn-warning">Save</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ExpensesDetail;