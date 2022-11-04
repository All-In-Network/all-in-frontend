import React from "react";
import PageTitle from "../../Component/Comman/PageTitle";
import HorizontalForm from "../../Component/FormInput/VizardForm/HorizontalForm";
import VerticleForm from "../../Component/FormInput/VizardForm/VerticleForm";

function VizardForm() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Form Wizard' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        <HorizontalForm />
                        <VerticleForm />
                    </div>
                </div>
            </div>
        </>
    )
}
export default VizardForm;