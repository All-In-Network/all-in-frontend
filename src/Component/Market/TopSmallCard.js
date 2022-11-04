import React from "react";

function TopSmallCard(props) {
    const{header,coin,color,rate,doller,percentag}=props;
    return (
        <div className="col">
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <div className="flex-fill text-truncate">
                        <span className="text-muted small text-uppercase">{header}</span>
                        <span className="h6 mt-3 mb-1 fw-bold d-block">{coin}</span>
                        <div className="d-flex justify-content-between">
                            <div className="price-block">
                                <span className={`fs-6 fw-bold ${color ? "color-price-up" : "color-price-down"}`}>{rate}</span>
                                <span className="small text-muted px-2">{doller}</span>
                            </div>
                            <div className="price-report">
                                <span className={`small  ${color ? "text-success" : "text-danger"}`}>{percentag}{color ? <i className="fa fa-level-up"></i> : <i className="fa fa-level-down"></i>}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopSmallCard;