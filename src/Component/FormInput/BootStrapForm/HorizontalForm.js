import React from "react";

function HorizontalForm() {
    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header py-3 d-flex  bg-transparent">
                    <h6 className="mb-0 fw-bold">Horizontal Form</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="FirstName" className="col-sm-4 col-form-label">First Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="FirstName" onChange={()=>{}}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="LastName" className="col-sm-4 col-form-label">Last Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="LastName" onChange={()=>{}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default HorizontalForm;