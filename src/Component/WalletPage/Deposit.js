import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Qrcode from '../../assets/images/qr-code.png';

function Deposit() {
    return (
        <div className="col-xl-6 col-xxl-7">
            <div className="card">
                <Tab.Container defaultActiveKey='first'>
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
                        <h6 className="mb-0 fw-bold">Deposit</h6>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='first' >Crypto</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second'>Cash</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <div className="card-body">
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane" eventKey='first' id="crypto">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Trending</label>
                                        <div className="row row-cols-3 row-cols-md-3 row-cols-lg-6 row-cols-xl-6">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaultbtc" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultbtc">
                                                        BTC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaulteth" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaulteth">
                                                        ETH
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaultusdt" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultusdt">
                                                        USDT
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaultbnb" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultbnb">
                                                        BNB
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaulteos" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaulteos">
                                                        EOS
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaultsol" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultsol">
                                                        SOL
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Choose Network</label>
                                        <div className="row row-cols-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultnetwork" id="flexRadioDefaulterc" checked="" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaulterc">
                                                        Ethereum(ERC20)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultnetwork" id="flexRadioDefaultcry" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultcry">
                                                        Cryptoon(CRC20)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultnetwork" id="flexRadioDefaultsep" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultsep">
                                                        SmartC(SEP20)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultnetwork" id="flexRadioDefaultsolana" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultsolana">
                                                        Solana
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultnetwork" id="flexRadioDefaulttron" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaulttron">
                                                        Tron(TRC20)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultnetwork" id="flexRadioDefaulterr" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaulterr">
                                                        Ethereum(ERC30)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label d-block">Select Network <span className="text-primary">USDT</span></label>
                                        <div className="d-flex flex-wrap align-items-center">
                                            <img src={Qrcode} alt="Download App" className="img-fluid" />
                                            <div className="d-flex flex-wrap px-lg-2">
                                                <div>
                                                    <div className="truncated">Minimum Deposit</div>
                                                    <div className="text-muted truncated mb-1"> 0.0005086 USDT </div>
                                                    <div className="truncated">Expected Arrival</div>
                                                    <div className="text-muted truncated mb-1"> 1 network confirm</div>
                                                    <div className="truncated">Expected Unlock</div>
                                                    <div className="text-muted truncated"> 1 network confirm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn flex-fill btn-light-warning py-2 fs-5 text-uppercase px-5">Confirm</button>
                                    </div>
                                </form>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade" eventKey='second' id="cash">
                                <p>Deposit Ammount from your bank account and receive fund in <span className="text-primary">USD</span></p>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Select Currency</label>
                                        <select className="form-select">
                                            <option>INR</option>
                                            <option value="1">AED</option>
                                            <option value="2">ARS</option>
                                            <option value="3">IDR</option>
                                            <option value="4">TRY</option>
                                            <option value="5">USD</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Currency to Deposit</label>
                                        <select className="form-select">
                                            <option>USD</option>
                                            <option value="1">AED</option>
                                            <option value="2">ARS</option>
                                            <option value="3">IDR</option>
                                            <option value="4">TRY</option>
                                            <option value="5">Euro</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Pay with</label>
                                        <div className="row row-cols-1">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultcash" id="flexRadioDefaultcard" checked="" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultcard">
                                                        Bank Card(Visa/MC) <span className="text-muted small">1.8% fee</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefaultcash" id="flexRadioDefaultbank" onChange={() => { }} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultbank">
                                                        Advance cash Account Balance <span className="text-muted small">0 fee</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn flex-fill btn-light-warning py-2 fs-5 text-uppercase px-5">Confirm</button>
                                    </div>
                                </form>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Deposit;