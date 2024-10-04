import React from "react";
import HeaderSec from "../HeaderSec";
import Weeklygraph from "../WeeklyGraph";

function YearlyInvGraph() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"Yearly Total Investment"} />
      <div className="flexsec">
        <Weeklygraph />
      </div>
    </div>
  );
}

export default YearlyInvGraph;
