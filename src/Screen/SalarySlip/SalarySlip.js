import React from "react";
import SalarySlipdetail from "../../Component/SalarySlip/SalarySlipDetail";

function SalarySlip() {
    return (
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="border-0 mb-4">
                    <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                        <h3 className="fw-bold mb-0 py-3 pb-2">Salaryslip</h3>
                    </div>
                </div>
            </div>
            <SalarySlipdetail/>
        </div>
    )
}

export default SalarySlip;