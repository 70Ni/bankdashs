import React from "react";
import HeaderSec from "../HeaderSec";
import { Bar, Line } from "react-chartjs-2";
import data from "../../Data/weekly.json";

// Get the root element
const root = document.documentElement;

// Get the computed styles for the root element
const rootStyles = getComputedStyle(root);

// Access a specific CSS variable value
const primaryColor = rootStyles.getPropertyValue("--primary-color");
const secondaryColor = rootStyles.getPropertyValue("--secondary-color");
const orange = rootStyles.getPropertyValue("--orange-color");

function CommonGraph({ Header, DATA, OPTIONS, BAR, flexauto }) {
  const CHARTOPTIONS = {
    maintainAspectRatio: false,
    responsive: true,
    layout: {},
    pointRadius: 0,

    barThickness: 20,
    borderRadius: 80,
    barPercentage: 0.2,
    categoryPercentage: 0.8,
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
    labels: DATA.map((day) => day.day),
    datasets: [
      {
        label: "Deposit",
        data: DATA.map((day) => day.Deposit),
        borderColor: OPTIONS ? OPTIONS.color : primaryColor,
        tension: 0.4,
        fill: true,
        backgroundColor: BAR
          ? primaryColor
          : OPTIONS
          ? OPTIONS.color + 10
          : primaryColor + 10,
      },
      {
        label: "Withdraw",
        data: DATA.map((day) => day.withdraw),
        border: OPTIONS ? OPTIONS.color : primaryColor,
        tension: 0.4,
        fill: true,

        backgroundColor: BAR
          ? secondaryColor
          : OPTIONS
          ? OPTIONS.color + 10
          : secondaryColor + 10,
      },
    ],
  };

  return (
    <div className={`content-outer-wrapper h-full ${flexauto && "flex-auto"}`}>
      <HeaderSec Header={Header} />
      <div className="card grphbelow h-full min-h-[250px]">
        {BAR ? (
          <Bar data={linechartData} options={CHARTOPTIONS} />
        ) : (
          <Line data={linechartData} options={CHARTOPTIONS} />
        )}
      </div>
    </div>
  );
}

export default CommonGraph;
