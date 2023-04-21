import React from "react";
import TempFile from "../TempFile";
import LineGraph from "./LineGraph";

const ChartsAndMaps = () => {
  const style = {
    position: "fixed",
    backgroundColor: "rgb(57, 106, 147)",
    width: "80%",
    textAlign: "center",
    zIndex: "50",
    margin: "0px",
    top: "5px",
  };
  return (
    <div>
      <div>
        <h1 style={style}>Charts and Maps</h1>
      </div>
      <div>
        <LineGraph />
      </div>
    </div>
  );
};

export default ChartsAndMaps;
