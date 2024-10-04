import React from "react";
import Sumsection from "../Layouts/Investment/Sumsection";
import Transactions from "../Layouts/Accounts/Transactions";
import CreditCard from "../components/CreditCard";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import Invoice from "../Layouts/Accounts/Invoice";

function Accounts() {
  return (
    <div className="page-outer">
      <Sumsection />
      <div className="flexsec">
        <Transactions />
        <div className="card-wrpr w-1/2">
          <CreditCard />
        </div>
      </div>
      <div className="flexsec">
        <CommonGraph />
        <Invoice />
      </div>
    </div>
  );
}

export default Accounts;
