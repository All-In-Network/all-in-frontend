import React from "react";

function TopCard(props) {
    const{coinname,price,doller,percentage,volume,priceDown,pricecolor}=props;
    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="flex-fill ms-3 text-truncate">
                            <span className="text-muted small text-uppercase">{coinname}</span>
                            <div className="d-flex flex-column">
                                <div className="price-block">
                                    <span className={`fs-6 fw-bold ${pricecolor?"color-price-up":!pricecolor?"color-price-down":""} `}>{price}</span>
                                    <span className="small text-muted px-2">{doller}</span>
                                </div>
                                <div className="price-report">
                                    <span className={`small ${priceDown?"text-danger":"text-success"} `}>{percentage} <i className={`${priceDown?"fa fa-level-down":"fa fa-level-up"}`}></i></span>
                                    <span className="small text-muted px-2">Volume:{volume}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCard;