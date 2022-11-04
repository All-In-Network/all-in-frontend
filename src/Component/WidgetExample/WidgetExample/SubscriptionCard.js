import React from "react";

function SubscriptionCard() {
    return (
        <div className="card text-center">
            <div className="card-body">
                <div className="p-4">
                    <div className="fs-1 text-uppercase">get 10% off</div>
                    <span>subscribe to our newsletter &amp; receive a coupon</span>
                </div>
                <div className="form-group mb-3 p-4 d-grid gap-2">
                    <input className="form-control" type="text" placeholder="ENTER YOUR EMAIL" name="email"/>
                        <button className="btn btn-light-primary btn-block" type="button">GET IT NOW!</button>
                </div>
                <div className="mt-3">
                    <a href="#!" title="">no thanks</a>
                    <p className="mt-2">* $50 minimum purchase</p>
                </div>
            </div>
        </div>
    )
}
export default SubscriptionCard;