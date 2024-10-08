import React from "react";
import Cardswrapper from "../Layouts/Dashboard/Cardswrapper";
import Recentransaction from "../Layouts/Dashboard/Recentransaction";
import ExpenseChart from "../Layouts/ExpenseChart";
import Weeklygraph from "../Layouts/WeeklyGraph";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import PaymentUI from "../components/PaymentUI";
import EditProfile from "../Layouts/EditProfile";
import data from "../Data/weekly.json";

function Dashboard() {
  return (
    <div className="page-outer">
      <div className="flexsec max-[1300px]:flex-col">
        <Cardswrapper />
        <Recentransaction />
      </div>
      <div className="flexsec max-[930px]:flex-col">
        <Weeklygraph />
        <ExpenseChart />
      </div>
      <div className="flexsec  max-[930px]:flex-col">
        <CommonGraph
          Header={"Balance History"}
          DATA={data.map((item) => {
            return { Deposit: item.Deposit, day: item.day };
          })}
          flexauto
        />

        <PaymentUI />
      </div>
    </div>
  );
}

export default Dashboard;
