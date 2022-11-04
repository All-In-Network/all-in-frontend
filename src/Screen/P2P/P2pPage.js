import React from "react";
import { Tab, Nav } from 'react-bootstrap';
import PageTitle from "../../Component/Comman/PageTitle";
import P2PBuyTabing from "../../Component/P2P/P2PBuyTabing";
import P2PsellTabing from "../../Component/P2P/P2PsellTabing";
import P2PTopCard from "../../Component/P2P/P2PTopCard";

function P2pPage() {
    return (
        <>
            <Tab.Container defaultActiveKey='first'>
                <div className="body-header border-bottom d-flex py-3 mb-3">
                    <PageTitle pagetitle='P2P: Buy/Sell Your Crypto Locally' sidebutton={true}  p2pheader={true}/>
                </div>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-3">
                                <P2PTopCard />
                            </div>
                            <Tab.Content className="tab-content">
                                <Tab.Pane className="tab-pane fade" id="Buy" eventKey='first'>
                                    <P2PBuyTabing />
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane fade" id="Sell" eventKey='second'>
                                    <P2PsellTabing />
                                </Tab.Pane>

                            </Tab.Content>

                        </div>

                    </div>

                </div>
            </Tab.Container>
        </>
    )
}

export default P2pPage;