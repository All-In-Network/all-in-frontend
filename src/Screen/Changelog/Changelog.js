import React from "react";
import Changelogdetail from "../../Component/Changelog/Changelogdetail";

function Changelog() {
    return (
        <div className="container-xxl">
            <div className="row align-items-center mb-4">
                <div className="col">
                    <h1 className="h4 mt-1">Changelog</h1>
                </div>
                <div className="col-auto">
                    <a href="#!" title="" className="btn btn-white border lift">Get Support</a>
                    <a href="#!" title="" className="btn btn-primary border lift">Our Portfolio</a>
                </div>
            </div>
            <div className="row">
                <Changelogdetail />
            </div>
        </div>
    )
}

export default Changelog;