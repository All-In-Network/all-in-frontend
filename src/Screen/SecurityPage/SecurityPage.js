import react from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import AdvanceSecurity from '../../Component/SecurityPage/AdvanceSecurity';
import Authentication from '../../Component/SecurityPage/Authentication';

function SecurityPage() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Security' sidebutton={true} />
            </div>
            <div className='container-xxl'>
                <div className='row align-item-center mb-3'>
                    <Authentication />
                </div>
                <div className='row align-item-center mb-3'>
                    <AdvanceSecurity />
                </div>

            </div>
        </>
    )
}

export default SecurityPage;