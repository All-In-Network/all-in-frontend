import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import CustomStyles from '../../Component/FormInput/BootStrapForm/CustomStyles';
import DisableForm from '../../Component/FormInput/BootStrapForm/DisableForm';
import FileInput from '../../Component/FormInput/BootStrapForm/FileInput';
import FloatingForm from '../../Component/FormInput/BootStrapForm/FloatingForm';
import HorizontalForm from '../../Component/FormInput/BootStrapForm/HorizontalForm';
import SimpleForm from '../../Component/FormInput/BootStrapForm/SimpleForm';
import Sizing from '../../Component/FormInput/BootStrapForm/Sizing';

function BootStrapForm() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Form Bootstrap' sidebutton={true}/>
            </div>
            <div className='container-xxl'>
                <div className='row g-3 row-deck mb-3'>
                    <SimpleForm />
                    <DisableForm />
                </div>
                <div className='row g-3 row-deck mb-3'>
                    <FileInput />
                    <Sizing />
                </div>
                <div className='row g-3 row-deck mb-3'>
                    <CustomStyles />
                </div>
                <div className='row g-3 row-deck'>
                    <HorizontalForm />
                    <FloatingForm />
                </div>

            </div>

        </>
    )
}

export default BootStrapForm;