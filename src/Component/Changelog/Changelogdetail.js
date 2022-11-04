import React from "react";
import Changelogo from '../../assets/images/change-log.svg';

function Changelogdetail() {
    return (
        <>
            <div className="col-12">
                <div className="card">
                    <div className="card-body text-center p-5">
                        <img src={Changelogo} className="img-fluid mx-size" alt="No Data" />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="pt-2">
                            <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.0.0</span></h6>
                            <span className="text-muted">&nbsp;&nbsp;&nbsp;–- Sep 14, 2022</span>
                            <ul className="ms-5">
                                <li>Initial release ofcryptoon! Lots more coming soon though 😁</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Changelogdetail;