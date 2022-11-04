import React from "react";
import { Switch, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { onModalOpen } from '../Redux/Actions/Actions';
import AuthHeader from "../Component/Comman/AuthHeader";
import Signin from "../Component/Auth/SignIn";
import NewModal from "../Component/Comman/NewModal";
import Signup from "../Component/Auth/Signup";
import ForgotPassword from "../Component/Auth/ForgotPassword";
import Verification from "../Component/Auth/Verification";
import ErrorPage from "../Component/Auth/ErrorPage";

function AuthIndex(props) {
    const { modalopen, darkMode, highcontrast, rtlmode } = props.Mainreducer;
    const baseUrl =process.env.PUBLIC_URL;
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
                <Route exact path={baseUrl+'/sign-in'} element={<Signin />} />
                <Route exact path={baseUrl+"/sign-up"} element={<Signup />} />
                <Route exact path={baseUrl+"/forgot-password"} element={<ForgotPassword />} />
                <Route exact path={baseUrl+"/verification"} element={<Verification />} />
                <Route exact path={baseUrl+"/404page"} element={<ErrorPage />} />
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