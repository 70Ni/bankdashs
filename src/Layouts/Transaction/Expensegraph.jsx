import React from "react";
import data from "../../Data/weekly.json";
import HeaderSec from "../HeaderSec";
import { Bar } from "react-chartjs-2";



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
  const time = [2, 55, 2, 4, 5, 8, 5, 8, 5, 5, 5, 5, , 1, 1];
  
  const linechartData = {
    labels: data.map((day) => day.day),
    datasets: [
      {
        label: "Deposit",
        data: data.map((day) => day.Deposit),
        fillColor: "#79D1CF",
      },
      {
        label: "Withdraw",
        data: data.map((day) => day.withdraw),
        border: "rgb(75,192,192)",
      },
    ],
  };
  

function Expensegraph() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"Weekly Activity"} />
      <div className="card flex-1">
        <Bar data={linechartData} options={CHARTOPTIONS} />
      </div>
    </div>
  );
}

export default Expensegraph;
