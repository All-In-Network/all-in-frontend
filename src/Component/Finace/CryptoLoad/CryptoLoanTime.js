import React from "react";

function CryptoLoanTime() {
    return (
        <div className="col">
            <div className="hor-timeline-steps">
                <div className="hor-timeline-step">
                    <div className="timeline-content">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">Hour - 10min</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Loan Request</p>
                    </div>
                </div>
                <div className="hor-timeline-step">
                    <div className="timeline-content">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">Hour - 05min</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Receive Loan</p>
                    </div>
                </div>
                <div className="hor-timeline-step">
                    <div className="timeline-content">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">Day - (0)</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Repay at any time</p>
                    </div>
                </div>
                <div className="hor-timeline-step">
                    <div className="timeline-content">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">Day - 1</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Receive Collateral</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CryptoLoanTime;