import React from "react";
import CreditCard from "../../components/CreditCard";
import HeaderSec from "../HeaderSec";
import Sumcard from "../../components/Sumcard";

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

function Cardswrapper() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"My Cards"} more={"+ Add Card"} />
      <div className="cards-wrapper flex gap-S20 w-full max-[510px]:flex-col">
        <CreditCard cardcont={cardDetails[0]} />
        <CreditCard cardcont={cardDetails[1]} />
      </div>
    </div>
  );
}

export default Cardswrapper;
