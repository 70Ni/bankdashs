import React from "react";
import Sumsection from "../Layouts/Investment/Sumsection";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import data from "../Data/weekly.json";
import Investmentbar from "../Layouts/Investment/Investmentbar";
import Stocktable from "../Layouts/Investment/Stocktable";

function Investment({ Header, data, options }) {
  return (
    <div className="page-outer">
      <Sumsection />
      <div className="flexsec">
        <CommonGraph Header={"Yearly Total Investment"} />
        <CommonGraph Header={"Monthly Revenue"} />
      </div>
      <div className="flexsec">
        <Investmentbar />
        <Stocktable />
      </div>
    </div>
  );
}

export default Investment;
