import React from "react";
import PageTitle from "../../Component/Comman/PageTitle";
import Nftcard from "../../Component/Marketplace/Nftcard";
import ProfileSetting from "../../Component/Marketplace/ProfileSetting";

function Marketplace() {
    return (<>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Marketplace'/>
            </div>
            <div className="container-xxl">
                <div className='row g-3'>
                    <div className='col-xl-4 col-lg-5 col-md-12'>
                        <Nftcard />
                    </div>
                    <div className='col-xl-8 col-lg-7 col-md-12'>
                        <ProfileSetting />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Marketplace;
