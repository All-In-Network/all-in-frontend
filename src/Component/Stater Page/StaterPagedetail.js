import React from "react";
import StaterPageImage from '../../assets/images/no-data.svg';
import { Link } from "react-router-dom";

function StaterPagedetail() {
    return (
        <div className="col-12">
            <div className="card mb-3">
                <div className="card-body text-center p-5">
                    <img src={StaterPageImage} className="img-fluid mx-size" alt="No Data"/>
                    <div className="mt-4 mb-2">
                        <span className="text-muted">No data to show</span>
                    </div>
                    <button type="button" className="btn btn-white border lift mt-1">Get Started</button>
                    <Link to={process.env.PUBLIC_URL +"/exchange"} className="btn btn-primary border lift mt-1">Go to Exchange</Link>
                </div>
            </div>
        </div>
    )
}
export default StaterPagedetail;