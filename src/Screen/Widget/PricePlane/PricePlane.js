import React from "react";
import PlaneOptionFirst from "../../../Component/WidgetExample/PricePlane/PlaneOptionFirst";
import { Tab, Nav } from "react-bootstrap";
import { PricePlaneFirstData, PricePlaneSecondData, PricePlaneThirdData } from "../../../Component/Data/WidgetExampleData/PricePlaneData/PricePlaneData";
import PlaneOptionSecond from "../../../Component/WidgetExample/PricePlane/PlaneOptionSecond";
import PlaneOptionThird from "../../../Component/WidgetExample/PricePlane/PlaneOptionThird";

function PricePlane() {
    return (
        <div className="container-xxl">
            <div className="row mb-5 mt-4">
                <div className="col-12">
                    <h2 className="text-center my-5">Choose Your Plan <span className="text-primary">Option-1</span></h2>
                </div>
                <Tab.Container defaultActiveKey='first'>
                    <div className="d-inline-flex justify-content-center mx-auto">
                        <Nav className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#!" role="tab">Month Plan</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#!" role="tab">Yearly Plan</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </Tab.Container>
            </div>

            <div className="row g-2 justify-content-center align-items-center mb-3" >
                {
                    PricePlaneFirstData.map((d, i) => {
                        return <PlaneOptionFirst
                            header={d.header}
                            price={d.price}
                            chat={d.chat}
                            limit={d.limit}
                            support={d.support}
                            domain={d.domain}
                            fees={d.fees}
                            key={'s'+i}
                        />
                    })
                }
            </div>
            <div className="row mb-5 mt-4">
                <div className="col-12">
                    <h2 className="text-center my-5">Choose Your Plan <span className="text-primary">Option-2</span></h2>
                </div>
                <Tab.Container defaultActiveKey='first'>
                    <div className="d-inline-flex justify-content-center mx-auto">
                        <Nav className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#!" role="tab">Month Plan</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#!" role="tab">Yearly Plan</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </Tab.Container>
            </div>
            <div className="row g-2 justify-content-center align-items-center ">
                {
                    PricePlaneSecondData.map((d, i) => {
                        return <PlaneOptionSecond
                            header={d.header}
                            discription={d.discription}
                            price={d.price}
                            key={'s'+i}
                        />
                    })
                }
            </div>
            <div className="row mb-5 mt-4">
                <div className="col-12">
                    <h2 className="text-center my-5">Choose Your Plan <span className="text-primary">Option-3</span></h2>
                </div>
                <Tab.Container defaultActiveKey='first'>
                    <div className="d-inline-flex justify-content-center mx-auto">
                        <Nav className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#!" role="tab">Month Plan</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#!" role="tab">Yearly Plan</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </Tab.Container>
            </div>
            <div className="row g-2 justify-content-center align-items-center mb-3">
                {
                    PricePlaneThirdData.map((d, i) => {
                        return <PlaneOptionThird
                            header={d.header}
                            price={d.price}
                            chat={d.chat}
                            limit={d.limit}
                            support={d.support}
                            domain={d.domain}
                            fees={d.fees}
                            key={'s'+i}
                        />
                    })
                }

            </div>

        </div>
    )
}
export default PricePlane;