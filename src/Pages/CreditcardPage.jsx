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


const cardDetails = [
  {
    cardNo: "3778 **** **** 4215",
    cardHolder: "John Sam",
    Balance: "571327",
    valid: "12/22",
  },
  {
    cardNo: "3778 **** **** 7843",
    cardHolder: "John Sam",
    Balance: "213",
    valid: "12/17",
  },
  {
    cardNo: "3778 **** **** 4237",
    cardHolder: "John Sam",
    Balance: "000",
    valid: "12/21",
  },
];
function CreditcardPage() {
  return (
    <div className="page-outer">
      <div className="content-outer-wrapper">
        <HeaderSec Header={"My Cards"} />
        <div className="cards-wrapper flex gap-S20 w-full max-[930px]:flex-col">
          
          <CreditCard cardcont={cardDetails[0]} />
          <CreditCard cardcont={cardDetails[1]} />
          <CreditCard cardcont={cardDetails[2]} opacity />
        </div>
      </div>
      <div className="flexsec max-[992px]:flex-col">
        <ExpenseChart />
        <Investmentbar />
      </div>
      <div className="flexsec max-[930px]:flex-col">
        <AddNewCard />
        <CardSettings />
      </div>
    </div>
  );
}

export default CreditcardPage;
