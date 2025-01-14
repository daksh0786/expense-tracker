import "./Chart.css";

import ChartBar from "./ChartBar.js";

const Chart = (props) => {

    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxDataPoint = Math.max(...dataPointsValue);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
          <ChartBar
          key = {dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPoint}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
