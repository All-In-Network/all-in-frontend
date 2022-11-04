import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import AddYourCoin from '../../Component/Ico/AddYourCoin';
import UpCommingIcoList from '../../Component/Ico/UpCommingIcoList';

function Ico() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='List Your Coin' downloadbutton='Download' reportbutton='Generate Report' />
            </div>
            <div className='container-xxl'>
                <div className='row mb-3'>
                    <AddYourCoin />
                </div>
                <div className='row'>
                    <UpCommingIcoList />
                </div>
            </div>
        </>
    )
}

export default Ico;