import React from 'react';

function FloatingForm() {
    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header py-3 d-flex  bg-transparent">
                    <h6 className="mb-0 fw-bold">Floating Form</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FloatingForm;