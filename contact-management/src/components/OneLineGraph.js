import React, { useEffect, useRef } from "react";
import { Chart, initTE } from "tw-elements";

const OneLineGraph = ({ name, datasetsData }) => {
  const lineChart = useRef();
  const dataLine = {
    type: "line",
    data: {
      labels: Object.keys(datasetsData),
      datasets: [
        {
          label: `${name.toUpperCase()} Fluctuations`,
          data: Object.values(datasetsData),
        },
      ],
    },
  };
  useEffect(() => {
    initTE({ Chart });
    new Chart(lineChart.current, dataLine);
  }, []);
  return (
    <div
      className="mx-auto w-3/5 overflow-hidden"
      style={{ width: "60vw", margin: "auto", textAlign: "center" }}
    >
      <canvas ref={lineChart} id="line-chart"></canvas>
    </div>
  );
};

export default OneLineGraph;
