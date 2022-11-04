import React from "react";
import SimpleChartTile from '../../../Component/WidgetExample/Charts Example/SimpleChartTile';
import RadarTile from '../../../Component/WidgetExample/Charts Example/RadarTile';
import OverviewTile from '../../../Component/WidgetExample/Charts Example/OverviewTile';
import ApexSparkTile from '../../../Component/WidgetExample/Charts Example/ApexSparkTile';
import { chartOverView, apexSparkData, radarChartData, simpleChartTileData, circleChart } from '../../../Component/Data/WidgetExampleData/ChartData/ChartsData';
import PageTitle from "../../../Component/Comman/PageTitle";

function ChartsExample() {
    return (
    <>
        <div className="body-header border-bottom d-flex py-3 mb-3">
            <PageTitle pagetitle='Charts' sidebutton={true} />
        </div>
       
        <div className="container-xxl">
            <div className="row clearfix mb-3">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row gx-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                        {
                            simpleChartTileData.map((data, i) => {
                                return <div key={"dfjhg" + i} className="col"><SimpleChartTile data={data} key={"SimpleChartTile" + i} /></div>
                            })
                        }
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
                        {
                            circleChart.map((data, i) => {
                                return <div key={"dfjdhg" + i} className="col"><RadarTile data={data} key={"RadarTile" + i} /></div>
                            })
                        }
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    {
                        chartOverView.map((data, i) => {
                            console.log(i)
                            return <OverviewTile data={data} key={"OverviewTile" + i} index={i} />
                        })
                    }
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3">
                        {
                            apexSparkData.map((data, i) => {
                                return <div key={"dfjdhg" + i} className="col"><ApexSparkTile data={data} key={"ApexSparkTile" + i} /></div>
                            })
                        }
                        {
                            radarChartData.map((data, i) => {
                                return <div key={"dfjdhg" + i} className="col"><RadarTile data={data} key={"RadarTile" + i} /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default ChartsExample;