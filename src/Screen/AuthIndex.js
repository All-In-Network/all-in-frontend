import React from "react";
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { onModalOpen } from '../Redux/Actions/Actions';
import AuthHeader from "../Component/Comman/AuthHeader";
import ConnectWallet from "../Component/Auth/ConnectWallet";
import NewModal from "../Component/Comman/NewModal";
import RegisterSoulbound from "../Component/Auth/Register";

function AuthIndex(props) {
    const { modalopen, darkMode, highcontrast, rtlmode } = props.Mainreducer;
    const baseUrl = process.env.PUBLIC_URL;
    return (
        <div className="main p-2 py-3 p-xl-5">
            <AuthHeader
                onModalOpen={(val) => { props.onModalOpen(true) }}
            />
            <NewModal
                show={modalopen}
                highcontrast={highcontrast}
                darkMode={darkMode}
                onHide={(val) => { props.onModalOpen(false) }}
                onChangeDarkMode={() => { props.onChangeDarkMode(darkMode === 'dark' ? 'light' : 'dark') }}
                onChangeHighcontrast={() => { props.onChangeHighcontrast(highcontrast === 'high-contrast' ? 'light' : 'high-contrast') }}
                OnchangeRTLmode={() => { props.OnchangeRTLmode(rtlmode === 'rtl_mode' ? true : false) }}
            />
            <Routes>
                <Route exact path={baseUrl+'/connect'} element={<ConnectWallet />} />
                <Route exact path={baseUrl+"/register"} element={<RegisterSoulbound />} />
            </Routes>
        </div>
    )
}

const mapStateToProps = ({ Mainreducer }) => ({
    Mainreducer
})

export default connect(mapStateToProps, {
    onModalOpen
})(AuthIndex); 