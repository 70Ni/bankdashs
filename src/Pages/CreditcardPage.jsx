import React from "react";
import CreditCard from "../components/CreditCard";
import HeaderSec from "../Layouts/HeaderSec";
import Investmentbar from "../Layouts/Investment/Investmentbar";
import Investment from "./Investment";
import Transactions from "../Layouts/Accounts/Transactions";
import Invoice from "../Layouts/Accounts/Invoice";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import Expensegraph from "../Layouts/Transaction/Expensegraph";
import Weeklygraph from "../Layouts/WeeklyGraph";
import ExpenseChart from "../Layouts/ExpenseChart";
import CardSettings from "../Layouts/CardSettings";
import AddNewCard from "../Layouts/AddNewCard";

function CreditcardPage() {
  return (
    <div className="page-outer">
      <div className="content-outer-wrapper">
        <HeaderSec Header={"My Cards"} />
        <div className="cards-wrapper flex gap-S20 w-full">
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </div>
      </div>
      <div className="flexsec">
        <ExpenseChart />
        <Investmentbar />
      </div>
      <div className="flexsec">
        <AddNewCard />
        <CardSettings />
      </div>
    </div>
  );
}

export default CreditcardPage;
