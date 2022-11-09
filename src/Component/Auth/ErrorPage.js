import React from 'react';
import { Link } from 'react-router-dom';
import Img1m from '../../assets/images/not_found.svg';

function ErrorPage() {
  return (
    <>
      <div className="body d-flex p-0 p-xl-5">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-lg-6 d-none d-lg-flex auth-h100">
              <img src={Img1m} className="img-fluid" alt="#" />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center auth-h100">
              <div className="card">
                <div className="card-body p-4">
                  <h1>Oh No! Error 404</h1>
                  <span className="text-muted">
                    Maybe Bigfoot has broken this page.Come back to the homepage
                  </span>
                  <Link
                    to={process.env.PUBLIC_URL + '/'}
                    title="#"
                    className="btn btn-primary text-uppercase py-2 fs-5 mt-3 d-block"
                  >
                    Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
