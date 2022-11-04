import React from "react";
import PageTitle from "../../Component/Comman/PageTitle";
import AdvanceValidationForm from "../../Component/FormInput/CustomeForm/AdvanceValidationForm";
import BasicForm from "../../Component/FormInput/CustomeForm/BasicForm";
import BasicValidationFrom from "../../Component/FormInput/CustomeForm/BasicValidationFrom";

function CustomeForm() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Forms' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className="row align-item-center">
                    <div className="col-md-12">
                        <BasicForm />
                        <BasicValidationFrom />
                        <AdvanceValidationForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomeForm;