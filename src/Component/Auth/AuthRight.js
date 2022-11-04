import React from "react";
import QRcode from '../../assets/images/qr-code.png';

function AuthRight() {
    return (
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
            <div className="qr-block text-center">
                <img src={QRcode} alt="#" className="img-fluid my-4" />
                <h4>Log in with QR code</h4>
                <p>Scan this code with the <span className="text-primary">mobile app</span><br /> to log in instantly.</p>
            </div>
        </div>
    )
}

export default AuthRight;