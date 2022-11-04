import React from "react";

function PlaneOptionFirst(props) {
    const{header,price,chat,limit,support,domain,fees}=props;
    return (
        <>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-12 ">
                <div className="card">
                    <div className="card-body py-4 text-center">
                        <h6 className="text-uppercase">{header}</h6>
                        <div><span className="display-5 text-primary">${price}</span> <span className="text-muted">/Month</span></div>
                    </div>
                    <div className="border-top-0 px-5 card-footer">
                        <p className="d-flex justify-content-between py-1"><span><i className="fa fa-check-circle"></i> Voice chat:</span> <span>{chat}</span></p>
                        <p className="d-flex justify-content-between py-1"><span><i className="fa fa-check-circle"></i> Chat without limit:</span> <span>{limit}</span></p>
                        <p className="d-flex justify-content-between py-1"><span><i className="fa fa-check-circle"></i> Support:</span> <span>{support}</span></p>
                        <p className="d-flex justify-content-between py-1"><span><i className="fa fa-check-circle"></i> Domain:</span> <span>{domain}</span></p>
                        <p className="d-flex justify-content-between py-1"><span><i className="fa fa-check-circle"></i> Hidden Fees:</span> <span>{fees}</span></p>
                    </div>
                    <div className="card-body text-center">
                        <a href="#!" className="btn btn-white border lift">Get Started</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlaneOptionFirst;