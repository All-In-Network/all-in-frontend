import React from "react";

function OrderBook() {
    return (
        <div className="col-xl-5">
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold">Order Book</h6>
                </div>
                <div className="card-body">
                    <table id="priceTableup" className="priceTable table table-hover custom-table-2 table-bordered align-middle mb-0" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Price(USDT)</th>
                                <th>Amount(USDT)</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="color-price-up">43978.43</span></td>
                                <td>0.11228</td>
                                <td>6,938.88312</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-down">44279.20</span></td>
                                <td>0.17214</td>
                                <td>76,053.29043</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-up">43928.23</span></td>
                                <td>0.08881</td>
                                <td>1,677.76807</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-up">43978.90</span></td>
                                <td>0.00062</td>
                                <td>1,151.15971</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-down">43978.90</span></td>
                                <td>0.00062</td>
                                <td>1,151.15971</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-up">44279.20</span></td>
                                <td>0.17214</td>
                                <td>76,053.29043</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-up">42978.43</span></td>
                                <td>0.11228</td>
                                <td>6,938.88312</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-up">42925.73</span></td>
                                <td>0.08752</td>
                                <td>5,022.51319</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-down">43978.43</span></td>
                                <td>0.11228</td>
                                <td>6,938.88312</td>
                            </tr>
                            <tr>
                                <td><span className="color-price-up">42978.90</span></td>
                                <td>0.00062</td>
                                <td>1,151.15971</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderBook;