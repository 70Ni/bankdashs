import React from "react";
import Sumsection from "../Layouts/Investment/Sumsection";
import Transactions from "../Layouts/Accounts/Transactions";
import CreditCard from "../components/CreditCard";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import Invoice from "../Layouts/Accounts/Invoice";
import HeaderSec from "../Layouts/HeaderSec";
import data from "../Data/DebitCredit.json";

const cardDetails = [
  {
    cardNo: "3778 **** **** 4215",
    cardHolder: "John Sam",
    Balance: "5713",
    valid: "12/22",
  },
  {
    cardNo: "3778 **** **** 7843",
    cardHolder: "John Sam",
    Balance: "213",
    valid: "12/24",
  },
];

function Accounts() {
  return (
    <div className="page-outer">
      <Sumsection />
      <div className="flexsec max-[930px]:flex-col">
        <Transactions />
        <div className="flex flex-col gap-S8 w-1/3 max-[930px]:w-full">
          <HeaderSec Header={"Recent Card"} more={"More"} />
          <CreditCard cardcont={cardDetails[0]} />
        </div>
      </div>
      <div className="flexsec max-[692px]:flex-col">
        <CommonGraph
          Header={"Debit & Credit Overview"}
          BAR
          flexauto
          DATA={data}
        />
        <Invoice />
      </div>
    </div>
  );
}

export default Accounts;
