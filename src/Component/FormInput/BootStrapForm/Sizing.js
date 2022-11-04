import React from "react";

function Sizing() {
    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header py-3 d-flex  bg-transparent">
                    <h6 className="mb-0 fw-bold">Sizing</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" onChange={()=>{}} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="text" placeholder="Default input"  onChange={()=>{}} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" onChange={()=>{}} />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" onChange={()=>{}} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" onChange={()=>{}} />
                        </div>

                        <div className="input-group input-group-lg">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" onChange={()=>{}} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Sizing;