import React from "react";

function RequestInquiry() {
    return (
        <div className="card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Request Inquiry</h6>
            </div>
            <div className="card-body">
                <form className="row g-3">
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="Name"/>
                                <label>Enter Name</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="Mobile No."/>
                                <label>Mobile No.</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="Email"/>
                                <label>Email address</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" style={{height: '100px'}}></textarea>
                            <label>Please type what you want...</label>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="btn btn-default">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RequestInquiry;