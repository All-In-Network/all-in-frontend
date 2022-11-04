import React from 'react';

function ProfileSetting() {

    return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Register</h6>
            </div>
            <div className="card-body">
                <form className="row g-4">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label">Nickname</label>
                            <input className="form-control" type="text" placeholder="Nickname" />
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <button type="button" className="btn btn-primary text-uppercase px-5">Faucet</button>
                    </div>
                    <div className="col-12 mt-4">
                        <button type="button" className="btn btn-primary text-uppercase px-5">Get Soulbound</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ProfileSetting;