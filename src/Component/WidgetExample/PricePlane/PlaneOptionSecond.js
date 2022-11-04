import React from "react";

function PlaneOptionSecond(props) {
    const{header,discription,price}=props;
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h5>{header}</h5>
                    <small className="text-muted">{discription}</small>
                    <br></br>
                    <span className="h2">${price}</span>/month <br></br>
                    <div className="d-grid my-3">
                        <button className="btn btn-outline-primary btn-block">Select</button>
                    </div>
                    <ul className="px-4">
                        <li>Cras justo odio</li>
                        <li>Dapibus ac facilisis in</li>
                        <li>Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaneOptionSecond;