import React, { useEffect, useRef } from "react";
import { Chart, initTE } from "tw-elements";

const OneLineGraph = ({ name, datasetsData }) => {
  let bgColor = "";
  if (name === "cases") bgColor = "blue";
  if (name === "deaths") bgColor = "yellow";
  else if (name === "recovered") bgColor = "green";
  const lineChart = useRef();
  const dataLine = {
    type: "line",
    data: {
      labels: Object.keys(datasetsData),
      datasets: [
        {
          label: `${name.toUpperCase()} Fluctuations`,
          data: Object.values(datasetsData),
          backgroundColor: bgColor,
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          borderColor: bgColor,
          // "rgba(255,99,132,1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
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
      style={{ width: "60vw", margin: "60px auto", textAlign: "center" }}
    >
      <canvas ref={lineChart} id="line-chart"></canvas>
    </div>
  );
};

export default OneLineGraph;
