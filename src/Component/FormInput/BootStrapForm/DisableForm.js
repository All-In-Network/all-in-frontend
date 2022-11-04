import React from "react";

function DisableForm() {
    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header py-3 d-flex  bg-transparent">
                    <h6 className="mb-0 fw-bold">Disabled Form</h6>
                </div>
                <div className="card-body">
                    <form>
                        <fieldset disabled>
                            <div className="mb-3">
                                <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" onChange={()=>{}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                                <select id="disabledSelect" className="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="" onChange={()=>{}}/>
                                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                            Can't check this
                                        </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DisableForm;