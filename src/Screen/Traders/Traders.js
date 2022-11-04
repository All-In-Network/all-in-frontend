import React from "react";
import PageTitle from "../../Component/Comman/PageTitle";
import Traderstable from "../../Component/Traders/Traderstable";


function Traders() {
    return (<>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Traders List' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className="row align-item-center">
                    <div className="col-md-12">
                        <Traderstable />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Traders;
