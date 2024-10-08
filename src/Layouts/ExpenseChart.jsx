import React from "react";
import { Doughnut } from "react-chartjs-2";
import HeaderSec from "./HeaderSec";
import data from "../Data/weekly.json";

// Get the root element
const root = document.documentElement;

// Get the computed styles for the root element
const rootStyles = getComputedStyle(root);

// Access a specific CSS variable value
const primaryColor = rootStyles.getPropertyValue("--primary-color");
const secondaryColor = rootStyles.getPropertyValue("--lightblue-color");
const orange = rootStyles.getPropertyValue("--orange-color");
const yellow = rootStyles.getPropertyValue("--yellow-color");
const dark = rootStyles.getPropertyValue("--purple-color");

const options = {
  borderWidth: 4,
  cutout: "80%",
  // aspectRatio: 1.4,
  padding: {
    bottom: 20
  },

  plugins: {
    legend: {
      display: true,
      align: "start",
      position: "bottom",
    },
  },
};
const linechartData = {
  labels: ["Bill", "Entertainment", "Investment", "others", "Food"],
  datasets: [
    {
      borderRadius: [
        { outerStart: 20, outerEnd: 20, innerStart: 20, innerEnd: 20 },
      ],
      label: "Value",
      data: [20, 20, 40, 15, 5],
      backgroundColor: [yellow, secondaryColor, primaryColor, dark, orange],
    },
  ],
};
function ExpenseChart() {
  return (
    <div className="content-outer-wrapper flex-grow-0">
      <HeaderSec Header="Expense Statistics" />
      <div className="card h-full flex justify-center h-[250px] items-center max-[930px]:h-[400px]">
        <Doughnut data={linechartData} options={options} />
      </div>
    </div>
  );
}

export default ExpenseChart;
