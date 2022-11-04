import React from "react";
import PageTitle from "../../../Component/Comman/PageTitle";
import Profile from "../../../Component/WidgetExample/Profile page/Profile";
import ProfileSetting from "../../../Component/WidgetExample/Profile page/ProfileSetting";

function ProfilePage() {
    return (<>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Admin Profile' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className='row g-3'>
                    <div className='col-xl-4 col-lg-5 col-md-12'>
                        <Profile />
                    </div>
                    <div className='col-xl-8 col-lg-7 col-md-12'>
                        <ProfileSetting />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProfilePage;