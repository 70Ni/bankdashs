import React from "react";
import HeaderSec from "../HeaderSec";
import { Bar, Line } from "react-chartjs-2";
import data from "../../Data/weekly.json";

const CHARTOPTIONS = {
  maintainAspectRatio: false,
  responsive: true,
  layout: {},
  barThickness: 20,
  borderRadius: 80,
  barPercentage: 0.2,

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

const linechartData = {
  labels: data.map((day) => day.day),
  datasets: [
    {
      label: "Deposit",
      data: data.map((day) => day.Deposit),
      fillColor: "#79D1CF",
      tension: 0.4

    },
    // {
    //   label: "Withdraw",
    //   data: data.map((day) => day.withdraw),
    //   border: "rgb(75,192,192)",
    // },
  ],
};

function 






CommonGraph({ Header }) {
  return (
    <div className="content-outer-wrapper  flex-auto">
      <HeaderSec Header={Header} />
      <div className="card grphbelow h-full">
        <Line data={linechartData} options={CHARTOPTIONS} />
      </div>
    </div>
  );
}

export default CommonGraph;
