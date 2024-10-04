import React from "react";
import { Doughnut } from "react-chartjs-2";
import HeaderSec from "./HeaderSec";
import data from "../Data/weekly.json";

const linechartData = {
  labels: ["a", "b", "c", "d", "r"],
  datasets: [
    {
      label: "step",
      data: [20, 20, 40, 15, 5],
      //   backgroundColor: [
      //     'rgba(255, 99, 132, 0.5)',
      //     'rgba(54, 162, 235, 0.2)',
      //     'rgba(255, 206, 86, 0.2)',
      //     'rgba(75, 192, 192, 0.2)'
      //   ],
    },
  ],
};
function ExpenseChart() {
  return (
    <div className="content-outer-wrapper flex-grow-0">
      <HeaderSec Header="Expense Statistics" />
      <div className="card flex justify-center items-center max-[930px]:h-[400px]">
        <Doughnut data={linechartData} options={{ borderWidth: 0 }} />
      </div>
    </div>
  );
}

export default ExpenseChart;
