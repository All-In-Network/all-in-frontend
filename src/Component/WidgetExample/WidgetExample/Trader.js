import { Dropdown } from "react-bootstrap";
import React from "react";
import Avatar1 from '../../../assets/images/xs/avatar2.svg';
import Avatar2 from '../../../assets/images/xs/avatar3.svg';
import Avatar3 from '../../../assets/images/xs/avatar4.svg';
import Avatar4 from '../../../assets/images/xs/avatar5.svg';
import Avatar5 from '../../../assets/images/xs/avatar6.svg';
import Avatar6 from '../../../assets/images/xs/avatar7.svg';

function Trader() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row align-items-center mb-4">
                    <div className="col text-truncate fs-6 fw-bold">Traders</div>
                    <div className="col-auto">
                        <Dropdown className="dropdown">
                            <Dropdown.Toggle as='a' href="#!" className="btn btn-link btn-sm dropdown-toggle pulse" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-expanded="false" aria-expanded="false">
                                <i className="fa fa-ellipsis-h"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end" >
                                <Dropdown.Item href="#!" className="dropdown-item">Action</Dropdown.Item>
                                <Dropdown.Item href="#!" className="dropdown-item">Another action</Dropdown.Item>
                                <Dropdown.Item href="#!" className="dropdown-item">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <img className="avatar" src={Avatar1} alt="" />
                    <div className="flex-fill ms-3">
                        <div className="h6 mb-0">Hossein Shams</div>
                        <small className="text-muted">Today Profit 15%</small>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <img className="avatar" src={Avatar2} alt="" />
                    <div className="flex-fill ms-3">
                        <div className="h6 mb-0">Maryam Amiri</div>
                        <small className="text-muted">Today Profit 25%</small>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <img className="avatar" src={Avatar3} alt="" />
                    <div className="flex-fill ms-3">
                        <div className="h6 mb-0">Cindy Anderson</div>
                        <small className="text-muted">Today Loss 10%</small>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <img className="avatar" src={Avatar4} alt="" />
                    <div className="flex-fill ms-3">
                        <div className="h6 mb-0">Hiren Colt</div>
                        <small className="text-muted">Today Loss 5%</small>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <img className="avatar" src={Avatar5} alt="" />
                    <div className="flex-fill ms-3">
                        <div className="h6 mb-0">Andorson Faith</div>
                        <small className="text-muted">Today Profit 85%</small>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <img className="avatar" src={Avatar6} alt="" />
                    <div className="flex-fill ms-3">
                        <div className="h6 mb-0">Chintu Dail</div>
                        <small className="text-muted">Today Profit 65%</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trader;