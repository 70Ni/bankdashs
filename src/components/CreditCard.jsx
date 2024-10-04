import React from "react";
import cardIcon from "../Img/Chip_Card.png";

function CreditCard() {
  return (
    <div className="card  border rounded-xl w-full flex-1 text-left flex flex-col gap-S20">
      <div className="header-section flex w-full justify-between">
        <div className="balance-wrap">
          <div className="smalltxt">Balance</div>
          <div className="font20">$5753</div>
        </div>
        <div className="para h-8 w-8">
          <img src={cardIcon} alt="" />
        </div>
      </div>
      <div className="card-detils">
        <div className="font20">3778 **** **** 1234</div>
      </div>
      <div className="card-holders flex justify-between">
        <div className="details-wrap">
          <div className="subtxt">CARD HOLDER</div>
          <div className="font20">Eddy Cusmus</div>
        </div>
        <div className="details-wrap ml-2 flex flex-col  items-end">
          <div className="subtxt text-right">VALID THRU</div>
          <div className="">12/22</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
