import React, { useState, useEffect, useRef } from "react";
import { Chart, initTE } from "tw-elements";

const TempFile = () => {
  const [lineGraphData, setLineGraphData] = useState();
  const [countrySpecificData, SetCountrySpecificData] = useState();
  const [graphDataOfCases, setGraphDataOfCases] = useState({
    cases: {},
  });
  const lineChartCases = useRef();
  const lineChartDeaths = useRef();
  const lineChartRecovered = useRef();
  const dataLine = {
    type: "line",
    data: {
      labels: Object.keys(graphDataOfCases.cases) || [],
      datasets: [
        {
          label: "Cases Fluctuations",
          data: Object.values(graphDataOfCases.cases) || [],
        },
      ],
    },
  };
  //   const casesLine = {
  //     type:"line",
  //     data:{labels:Object.keys(graphDataOfCases.cases),datasets:[{label:"Cases Fluctuations",data:Object.values(graphDataOfCases.cases)||[]}]}
  //   }
  const getWorldData = () => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("getWorldData", data);
      });
  };
  const getCountrySpecificData = () => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("getCountrySpecificData", data);
      });
  };
  const getGraphDataOfCases = () => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("getGraphDataOfCases", data);
        console.log(typeof data);
        console.log(typeof data.cases);
        setGraphDataOfCases(data);
      });
  };
  useEffect(() => {
    // initTE({ Chart });
    // getWorldData();
    // getCountrySpecificData();
    getGraphDataOfCases();
    new Chart(lineChartCases.current, dataLine);
    new Chart(lineChartDeaths.current, dataLine);
    new Chart(lineChartRecovered.current, dataLine);
  }, []);
  return (
    <div>
      <div ref={lineChartCases}></div>
      <div ref={lineChartDeaths}></div>
      <div ref={lineChartRecovered}></div>
    </div>
  );
};

export default TempFile;
