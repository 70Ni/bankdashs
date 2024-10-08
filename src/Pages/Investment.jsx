import React from "react";
import Sumsection from "../Layouts/Investment/Sumsection";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import data from "../Data/weekly.json";
import Investmentbar from "../Layouts/Investment/Investmentbar";
import Stocktable from "../Layouts/Investment/Stocktable";
import { color } from "chart.js/helpers";

const root = document.documentElement;

// Get the computed styles for the root element
const rootStyles = getComputedStyle(root);

// Access a specific CSS variable value
const primaryColor = rootStyles.getPropertyValue("--primary-color");
const secondaryColor = rootStyles.getPropertyValue("--secondary-color");
const orange = rootStyles.getPropertyValue("--orange-color");

function Investment() {
  return (
    <div className="page-outer">
      <Sumsection />
      <div className="flexsec">
        <CommonGraph
          Header={"Debit & Credit Overview"}
          DATA={data.map((item) => {
            return { Deposit: item.Deposit, day: item.day };
          })}
        />
        <CommonGraph
          Header={"Debit & Credit Overview"}
          DATA={data.map((item) => {
            return { Deposit: item.withdraw, day: item.day };
          })}
          OPTIONS={{ color: orange }}
        />
      </div>
      <div className="flexsec">
        <Investmentbar />
        <Stocktable />
      </div>
    </div>
  );
}

export default Investment;
