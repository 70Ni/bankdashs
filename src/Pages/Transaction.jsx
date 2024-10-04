import React from "react";
import Cardswrapper from "../Layouts/Dashboard/Cardswrapper";
import Expensegraph from "../Layouts/Transaction/Expensegraph";
import Sumsection from "../Layouts/Investment/Sumsection";

function Transaction() {
  return (
    <div className="page-outer flex flex-col gap-S28">
      <div className="flexsec">
        <Cardswrapper />
        <Expensegraph />
        {/* <Recentransaction /> */}
      </div>
      <div className="flexsec">
        {/* <Weeklygraph />
        <ExpenseChart /> */}
      </div>
    </div>
  );
}

export default Transaction;
