import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import data from "../Data/weekly.json";
import HeaderSec from "./HeaderSec";

// const data = [
//   { Time: 2, orders: 20 },
//   { Time: 3, orders: 22 },
//   { Time: 4, orders: 24 },
// ];

const CHARTOPTIONS = {
  maintainAspectRatio: false,
  responsive: true,
  padding: 4,
  layout: {},
  barThickness: 12,
  borderRadius: 80,
  categoryPercentage: 0.8,
  barPercentage: 0.2,
  // categoryPercentage:0.5,
  

  plugins: {
    tooltip: {
      //   callbacks: {
      //     afterTitle: "Hello there",
      //   },
      titleColor: "#fff",
      titleAlign: "center",
      bodyAlign: "center",
      //   bodyFont: 14,
    },
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 24,
          weight: "bold",
        },
      },
    },
  },

  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: true,
        color: "#A1A7C4",
      },

      // to remove the x-axis grid
      grid: {
        borderWidth: 0,
        drawOnChartArea: false,
        drawBorder: false,
        display: false,
      },
    },
    y: {
      border: { dash: [2, 4] }, // for the grid lines
      borderWidth: 1,
      ticks: {
        stepSize: 100,
        padding: 14,
        autoSkip: false,
        color: "#A1A7C4",
        font: {
          size: 12,
          weight: "Normal",
        },
      },
      grid: {
        borderWidth: 0,
        color: "#E6E9F4",
      },

      beginAtZero: true,
    },
  },
};
const time = [2, 55, 2, 4, 5, 8, 5, 8, 5, 5, 5, 5, , 1, 1];

// Get the root element
const root = document.documentElement;
const element = document.querySelector(":root"); 
  
// Get the computed styles for the root element
const rootStyles = getComputedStyle(element);

// Access a specific CSS variable value
const primaryColor = rootStyles.getPropertyValue('--primary-color');
const secondaryColor = rootStyles.getPropertyValue('--lightblue-color');

console.log(primaryColor); // Outputs the value of the --primary-color variable

const linechartData = {
  labels: data.map((day) => day.day),
  datasets: [
    {
      label: "Deposit",
      data: data.map((day) => day.Deposit),
      backgroundColor: primaryColor,
    },
    {
      label: "Withdraw",
      data: data.map((day) => day.withdraw),
      backgroundColor: secondaryColor,
    },
  ],
};

function Weeklygraph() {
  return (
    <div className="content-outer-wrapper flex-auto">
      <HeaderSec Header={"Weekly Activity"} />
      <div className="card grphbelow h-[354px]">
        <Bar data={linechartData} options={CHARTOPTIONS} />
      </div>
    </div>
  );
}

export default Weeklygraph;
