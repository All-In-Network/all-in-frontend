import React from 'react';
import { Link } from 'react-router-dom';

function AuthHeader(props) {
  return (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col">
          <Link className="d-flex align-item-center">
            <i className="fa fa-gg-circle fs-3"></i>
            <h5 className="mb-0 mt-1 mx-2">All In Network</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AuthHeader;
