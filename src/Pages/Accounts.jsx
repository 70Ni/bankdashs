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
      <div className="flexsec max-[930px]:flex-col">
        <Transactions />
        <div className="card-wrpr w-1/2 max-[930px]:w-full">
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
