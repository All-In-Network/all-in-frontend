import React from "react";
import CryptoLoanPayTime from "../../Component/Finace/CrptoPay/CryptoLoanPayTime";
import CryptoPayLoan from '../../Component/Finace/CrptoPay/CryptoPayLoan'
import { Link } from "react-router-dom";

function CryptoPay() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <div className="container-xxl">
                    <div className="row align-items-center g-2">
                        <div className="col">
                            <h1 className="h4 mt-1">Pay</h1>
                        </div>
                        <div className="col-auto">
                            <Link to={process.env.PUBLIC_URL + "/crypto-loan"} title="#" className="btn btn-dark lift d-flex align-items-center">Apply Crypto Loan</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl">
                <div className="row my-5">
                    <CryptoLoanPayTime />
                </div>
                <div className="row">
                <CryptoPayLoan/>

                </div>

            </div>
        </>
    )
}
export default CryptoPay;