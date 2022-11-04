import React from "react";

function MyResult() {
    return (
        <div className="col-xl-7">
            <div className="card no-bg">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">My Results</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                            <div id="myDataTable_filter" className="dataTables_filter">
                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                            </div>
                        </div>
                    </div>
                    <table id="myResult" className="table custom-table table-hover align-middle mb-0" style={{width:'100%'}}>
                        <thead>
                            <tr>
                                <th>Results</th>
                                <th>Profit &amp; Loss</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>1</strong></td>
                                <td><span className="color-price-up">12</span></td>
                                <td>198020</td>
                            </tr>
                            <tr>
                                <td><strong>2</strong></td>
                                <td><span className="color-price-down">48</span></td>
                                <td>178020</td>
                            </tr>
                            <tr>
                                <td><strong>3</strong></td>
                                <td><span className="color-price-up">88</span></td>
                                <td>188020</td>
                            </tr>
                            <tr>
                                <td><strong>4</strong></td>
                                <td><span className="color-price-down">475</span></td>
                                <td>128020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyResult;