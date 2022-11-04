import React from "react";

function DocumentationDetail(){
    return(
        <>
            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-code me-2"></i>Installation Setup</h5>
                    </div>

                    <div className="card-body">
                        <p>To get started, you need to do the following:</p>
                        <p>This template is built in ReactJS and requires Node 14.17.3 and NPM 6.14.13 to be Installed</p>
                        <p>This template is built on react 18+</p>
                        <ul>
                            <li><strong>Node.js and NPM:</strong>  You can download Node.js from <a href="https://nodejs.org" target="_blank" className="text-primary text-decoration-underline">NodeJS</a>. NPM comes bundled with Node.js</li>
                            <li><strong>Project setup:</strong> After installing Node <code>npm install</code> command from the root of your project directory into terminal. It will install all the necessary dependencies for the application using package.json file.</li>
                            <li><strong>Development server:</strong> Run <code>npm Start</code> command from project directory and navigate to <strong>http://localhost:4200/</strong> into your browser.</li>
                            <li><strong>Build:</strong> Run <code>npm run build</code> command from project directory to build the project. The build artifacts will be stored in the dist/ directory.</li>
                            <li><strong>Further help:</strong> To get more help on the project setup, go and check out <a href="https://reactjs.org/" target="_blank" className="text-primary text-decoration-underline">https://reactjs.org/</a>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-folder me-2"></i>File Structure</h5>
                    </div>

                    <div className="card-body">
                        <ul>
                            <li><strong><i className="icofont-folder text-secondary me-2"></i>node_modules</strong> <span className="text-muted">- NPM dependencies (by default the folder is not included) <code>npm</code> installs dependencies. </span></li>
                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Public</strong></li>
                            <li>
                                <strong><i className="icofont-folder-open text-secondary me-2"></i>src</strong>
                                <ul className="mb-3">
                                    <li>
                                        <strong><i className="icofont-folder-open text-secondary me-2"></i>assets</strong>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-folder-open text-secondary me-2"></i>Components</strong>
                                        <ul className="mb-3">
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>App</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Auth</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Battel</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Changelog</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Common</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>DashboardOne</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Data</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Documentation</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Exchanges</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Expenses</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Finace</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Forminput</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Future</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Help</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Ico</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Invoice</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Market</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>P2P</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>RefPage</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>SalarySlip</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>SecurityPage</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Stater Page</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Trade</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Ui Component</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>WalletPage</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>WidgetExample</strong></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-folder-open text-secondary me-2"></i>screens</strong>
                                        <ul className="mb-3">
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>App</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Battel</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Changelog</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Dashboard</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Documentation</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Exchanges</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Expenses</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Finace</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Forminput</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Future</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Help</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>ICO</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Identification</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Invoice</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Market</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>P2P</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>ReferalPage</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Reward</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>SalarySlip</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>SecurityPage</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Stater Page</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Trade</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Ui Component</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>WalletPage</strong></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>Widget</strong></li>
                                            <li><strong><i className="icofont-file-code text-secondary me-2"></i>Authindex.js</strong></li>
                                            <li><strong><i className="icofont-file-code text-secondary me-2"></i>Mainindex.js</strong></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-file-code text-secondary me-2"></i>App</strong>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-file-code text-secondary me-2"></i>index</strong>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-file-code text-secondary me-2"></i>logo.svg</strong>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-file-code text-secondary me-2"></i>reportWebVitals</strong>
                                    </li>
                                    <li>
                                        <strong><i className="icofont-file-code text-secondary me-2"></i>setupTests</strong>
                                    </li>
                                </ul>
                            </li>
                            <li><strong><i className="icofont-file-code color-light-orange  me-2"></i>Gruntfile.js</strong> <span className="text-muted">- All the build commands</span></li>
                            <li><strong><i className="icofont-file-code color-light-orange  me-2"></i>package.json</strong> <span className="text-muted">- List of dependencies and npm information</span></li>
                            <li><strong><i className="icofont-file-code color-light-orange  me-2"></i>.gitignore</strong> <span className="text-muted">- Hide all unnecessary files from Git</span></li>
                            <li className="mt-3">
                                <strong><i className="icofont-folder text-secondary me-2"></i>documentation</strong> <span className="text-muted">- Project documentation</span>
                                <ul className="mb-3">
                                    <li>
                                        <strong><i className="icofont-folder-open text-secondary me-2"></i>assets</strong>
                                        <ul className="mb-3">
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>css</strong> <span className="text-muted">- Compiled CSS file</span></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>fonts</strong> <span className="text-muted">- Icon font and font awesome </span></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>images</strong> <span className="text-muted">- Image assets</span></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>js</strong> <span className="text-muted">-  Compiled JS file</span></li>
                                            <li><strong><i className="icofont-folder text-secondary me-2"></i>plugin</strong> <span className="text-muted">- plugins JS and css file</span></li>
                                        </ul>
                                    </li>
                                    <li><strong><i className="icofont-file-code color-light-orange me-2"></i>index.html</strong> <span className="text-muted">- well project document</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-paint-brush me-2"></i>Comman Utilities With Custom Class</h5>
                    </div>
                    <div className="card-header">
                        <h5 className="fw-bold">Text Color</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered  doc-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.text-primary</code></td>
                                    <td className="text-primary">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-secondary</code></td>
                                    <td className="text-secondary">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-success</code></td>
                                    <td className="text-success">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-info</code></td>
                                    <td className="text-info">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-warning</code></td>
                                    <td className="text-warning">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-danger</code></td>
                                    <td className="text-danger">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-dark</code></td>
                                    <td className="text-dark">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.color-lightyellow</code></td>
                                    <td className="color-lightyellow">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.color-lightblue</code></td>
                                    <td className="color-lightblue">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.color-light-success</code></td>
                                    <td className="color-light-success">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.color-light-orange</code></td>
                                    <td className="color-light-orange">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                                <tr>
                                    <td><code>.color-careys-pink</code></td>
                                    <td className="color-careys-pink">Lorem ipsum dolor sit amet consectecur.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-header">
                        <h5 className="fw-bold">Background Color</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered doc-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.bg-primary</code></td>
                                    <td className="bg-primary"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-secondary</code></td>
                                    <td className="bg-secondary"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-success</code></td>
                                    <td className="bg-success"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-info</code></td>
                                    <td className="bg-info"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-warning</code></td>
                                    <td className="bg-warning"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-danger</code></td>
                                    <td className="bg-danger"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-dark</code></td>
                                    <td className="bg-dark"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-white</code></td>
                                    <td className="bg-white"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-lightyellow</code></td>
                                    <td className="bg-lightyellow"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-lightblue</code></td>
                                    <td className="bg-lightblue"></td>
                                </tr>
                                <tr>
                                    <td><code>.bg-careys-pink</code></td>
                                    <td className="bg-careys-pink"></td>
                                </tr>
                                <tr>
                                    <td><code>.light-success-bg</code></td>
                                    <td className="light-success-bg"></td>
                                </tr>
                                <tr>
                                    <td><code>.light-orange-bg </code></td>
                                    <td className="light-orange-bg"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-paint me-2"></i>Layouts Components</h5>
                        <p className="text-muted">Comman Components Easy to customize by developer</p>
                    </div>
                    <div className="row g-2">
                        <div className="col-md-12">
                            <div className="card-header">
                                <h5 className="fw-bold">Button</h5>
                            </div>
                            <div className="card-body">
                                <div className="bd-example">
                                    <button type="button" className="btn btn-primary me-1">Primary</button>
                                    <button type="button" className="btn btn-secondary me-1">Secondary</button>
                                    <button type="button" className="btn btn-success me-1">Success</button>
                                    <button type="button" className="btn btn-danger me-1">Danger</button>
                                    <button type="button" className="btn btn-warning me-1">Warning</button>
                                    <button type="button" className="btn btn-info me-1">Info</button>
                                    <button type="button" className="btn btn-light me-1">Light</button>
                                    <button type="button" className="btn btn-dark me-1">Dark</button>

                                    <button type="button" className="btn btn-link">Link</button>
                                    <pre className=" language-html p-3 mt-2"><code className=" language-html" data-lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-info<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-light<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />

                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-flag-alt-2 me-2"></i>Advantages </h5>
                    </div>

                    <div className="card-body">
                        <ul style={{ fontSize: 16 }}>
                            <li>Very easy access to any starters components and core settings from anywhere in the template.</li>
                            <li>Intuitive clear architecture.</li>
                            <li>Avoiding the probabilities of conflicts between Front codes and third party plugins (libraries).</li>
                            <li>Creation of wrapper components simply solves complicated initializations structures for the users.</li>
                            <li>Everything is structured, each component in its own file and in its component in the main object.</li>
                            <li>The ability of extending functionality without affecting the behavior of the core object and not changing the existing functionality.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-diamond me-2"></i>Cryptoon Template Credit</h5>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Google font</td>
                                        <td><a href="https://fonts.google.com/">https://fonts.google.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Bootstrap</td>
                                        <td><a href="https://v5.getbootstrap.com/">https://v5.getbootstrap.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Jquery</td>
                                        <td><a href="https://jquery.com/">https://jquery.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>SASS</td>
                                        <td><a href="https://sass-lang.com/">https://sass-lang.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Grunt</td>
                                        <td><a href="https://gruntjs.com/">https://gruntjs.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>NPM</td>
                                        <td><a href="https://www.npmjs.com/">https://www.npmjs.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Fontawesome</td>
                                        <td><a href="https://fontawesome.com/v4.7.0/">https://fontawesome.com/v4.7.0/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Icon Font</td>
                                        <td><a href="https://icofont.com/icons">https://icofont.com/icons</a></td>
                                    </tr>
                                    <tr>
                                        <td>Apex Charts</td>
                                        <td><a href="https://apexcharts.com/">https://apexcharts.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Sparkline Charts</td>
                                        <td><a href="https://omnipotent.net/jquery.sparkline/#s-about">https://omnipotent.net/jquery.sparkline/#s-about</a></td>
                                    </tr>
                                    <tr>
                                        <td>Fullcalendar</td>
                                        <td><a href="https://fullcalendar.io/">https://fullcalendar.io/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Pexels</td>
                                        <td><a href="https://www.pexels.com/">https://www.pexels.com/</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-3 pt-3 card">
                    <div className="card-header">
                        <h5 className="fw-bold"><i className="icofont-love me-2"></i>THANK YOU!</h5>
                    </div>
                    <div className="card-body">
                        <div className="row mt-2">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="card overflow-hidden mb-3">
                                    <div className="bg-primary py-5 px-4 text-light">
                                        <h4>pixelwibes.com</h4>
                                        <span className="small">Once again, thank you so much for purchasing this template. As I said at the beginning, I'd be glad to help you if you have any questions relating to this template.
                                            If you really like our work, design, performance and support then <a className="text-dark" href="https://themeforest.net/downloads"> Please don't forgot to rate us</a> on Themeforest, it really motivate us to provide something better.</span>
                                    </div>
                                    <div className="p-4">
                                        <h6>Customize Code and Devlopment</h6>
                                        <span>We Can provide Bunch of Services to Customize Template According To Your Requirements</span>
                                        <div className="mt-4 mb-2">
                                            <a href="http://www.pixelwibes.com" target="_blank" rel="noreferrer" className="btn btn-primary">Hire Us</a>
                                        </div>
                                        <div className="dividers-block"></div>
                                        <h6>Cryptoon guide</h6>
                                        <span>Get started with Cryptoon Business and learn about features for admins and users.</span>
                                        <div className="mt-4 mb-2">
                                            <a href="http://pixelwibes.com/" className="btn btn-primary">Check out the guide</a>
                                        </div>
                                        <div className="dividers-block"></div>
                                        <h6>Get answers</h6>
                                        <span>Visit the help centre for answers to common issues.</span>
                                        <div className="mt-4 mb-2">
                                            <a href="http://pixelwibes.com/" className="btn btn-primary">Go to Help Centre</a>
                                        </div>
                                        <div className="dividers-block"></div>
                                        <span className="text-muted">Thanks for choosing <strong className="text-warning">Pixel Wibes</strong> Admin.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="card bg-info-light mb-3">
                                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                        <div className="preview-pane text-center">
                                            <svg width="100" fill="currentColor" className="bi bi-chat-text color-defult " viewBox="0 0 16 16">
                                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                                                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"></path>
                                            </svg>
                                            <a href="http://pixelwibes.com/" className="fw-bold fs-6 mt-2 d-flex justify-content-center color-defult ">Chat with us</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-lightyellow">
                                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                        <div className="preview-pane text-center">
                                            <svg width="100" fill="currentColor" className="bi bi-envelope color-defult " viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path>
                                            </svg>
                                            <a href="mailto:pixelwibes@gmail.com" className="fw-bold  fs-6 mt-2 d-flex justify-content-center color-defult ">Email us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DocumentationDetail;