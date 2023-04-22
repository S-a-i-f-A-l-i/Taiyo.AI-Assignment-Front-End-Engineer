import React from "react";
import LineGraph from "./LineGraph";
import MapData from "./MapData";
import World from "./World";
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
        <World />
      </div>
      <div>
        <LineGraph />
      </div>
      <div>
        <MapData />
      </div>
    </div>
  );
};

export default ChartsAndMaps;
