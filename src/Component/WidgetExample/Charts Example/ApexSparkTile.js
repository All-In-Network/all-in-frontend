import React, { useState } from "react";
import Chart from "react-apexcharts";

function ApexSparkTile(props) {
  const [options, setOptions] = useState(props.data.chartData ? props.data.chartData.options : "");
  const [series, setSeries] = useState(props.data.chartData ? props.data.chartData.series : "")
  return (
    <div className="card mb-3">
      <div className="card-body">
        {options ? <Chart
          options={options}
          series={series}
          type={options ? options.chart.type : "bar"}
          height={options ? options.chart.height : 315}
        /> : null}
      </div>
    </div>
  );
}

export default ApexSparkTile;