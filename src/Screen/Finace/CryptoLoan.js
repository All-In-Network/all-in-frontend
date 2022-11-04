import React from "react";
import CryptoLoanTime from "../../Component/Finace/CryptoLoad/CryptoLoanTime";
import Loan from "../../Component/Finace/CryptoLoad/Loan";
import { Link } from "react-router-dom";

function CryptoLoan() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <div className="container-xxl">
                    <div className="row align-items-center g-2">
                        <div className="col">
                            <h1 className="h4 mt-1">Crypto Loans</h1>
                        </div>
                        <div className="col-auto">
                            <Link to={process.env.PUBLIC_URL + "/crypto-pay"} title="#" className="btn btn-dark lift d-flex align-items-center">Pay</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl">
                <div className="row my-5">
                    <CryptoLoanTime />
                </div>
                <div className="row">
                    <Loan />
                </div>
            </div>

        </>
    )
}

export default CryptoLoan;