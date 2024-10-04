import React from "react";
import CreditCard from "../../components/CreditCard";
import HeaderSec from "../HeaderSec";
import Sumcard from "../../components/Sumcard";

function Cardswrapper() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"My Cards"} more={"Add Card"} />
      <div className="cards-wrapper flex gap-S20 w-full max-[510px]:flex-col">
        <CreditCard />
        <CreditCard />
      </div>
    </div>
  );
}

export default Cardswrapper;
