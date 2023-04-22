import React from "react";
import TempFile from "../TempFile";
import LineGraph from "./LineGraph";
import MapData from "./MapData";
const ChartsAndMaps = () => {
  const style = {
    position: "fixed",
    backgroundColor: "rgb(57, 106, 147)",
    width: "80%",
    textAlign: "center",
    zIndex: "2000",
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
      <div>
        <MapData />
      </div>
      {/* <div>
        <TempFile />
      </div> */}
    </div>
  );
};

export default ChartsAndMaps;
