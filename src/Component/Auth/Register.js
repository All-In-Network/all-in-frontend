import React from "react";
import { useIsConnected } from "../../hooks/useIsConnected";
import Nftcard from "../Marketplace/Nftcard";
import ProfileSetting from "../Marketplace/ProfileSetting";


function RegisterSoulbound() {

    useIsConnected()

    return (
        <>
            <div className="body d-flex p-0 p-xl-5">
                <div className="container">
                    <div className="row g-3">
                        <Nftcard />
                        <ProfileSetting />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterSoulbound;
