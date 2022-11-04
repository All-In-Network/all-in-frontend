import React from "react";
import PageTitle from '../../Component/Comman/PageTitle';
import DefaultRefer from "../../Component/ReferPage/DefaultRefer";
import ReferInfo from "../../Component/ReferPage/ReferInfo";

function ReferalPage() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Refer Friends' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className="row g-3 mb-3 row-deck">
                    <div className="col-xl-12 col-xxl-8">
                        <ReferInfo />
                    </div>
                    <div className="col-xl-12 col-xxl-4">
                        <DefaultRefer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferalPage;