import React from "react";
import DocumentationDetail from "../../Component/Documentation/DocumentationDetail";

function Documentation() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="h4 mt-1">Documentation</h1>
                        </div>
                        <div className="col-auto">
                            <a href="https://themeforest.net/user/pixelwibes/portfolio" title="Download" className="btn btn-white border lift">Download</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3 pt-3 card" style={{ fontSize: 16 }}>
                            <div className="card-header">
                                <h5 className="fw-bold"><i className="icofont-thumbs-up me-2"></i>Getting Started</h5>
                            </div>
                            <div className="card-body">
                                <p>This guide will help you get started with <strong className="text-secondary">Cryptoon</strong>! All the important stuff –&nbsp;compiling the source, file structure, build tools, file includes –&nbsp;is documented here, but should you have any questions, always feel free to reach out to <span className="text-muted">pixelwibes@gmail.com</span></p>
                                <p>If you really like our work, design, performance and support then <a href="https://themeforest.net/downloads"> please don't forgot to rate us</a> on Themeforest,<br /> it really motivate us to provide something better.
                                    <span className="ms-2">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </span>
                                </p>
                                <p className="mb-0"><strong>Please Note :</strong></p>
                                <p>- All images are just used for Preview Purpose Only. They are not part of the template and NOT included in the final purchase files.</p>
                                <p>- It does not include any Business logic to produce database records.</p>
                                <p>- All the Third-party plugins we use are installed via NPM and have their own support and updates separately. Pixelwibes can only provide support for the version of plugins used in the template. It applies to all the framework packages as well</p>
                            </div>
                        </div>
                    </div>
                    <DocumentationDetail />
                </div>
            </div>
        </>
    )
}
export default Documentation;