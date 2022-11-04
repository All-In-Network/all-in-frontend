import React from "react";

function FileInput() {
    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header py-3 d-flex  bg-transparent">
                    <h6 className="mb-0 fw-bold">File Input</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile" onChange={()=>{}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple="" onChange={()=>{}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={()=>{}}/>
                        </div>
                        <div>
                            <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                            <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={()=>{}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FileInput;