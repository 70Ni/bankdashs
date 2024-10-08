import React from "react";
import MoneyIcon from "./Icons/InvestIcons/Money";
import Categoryterm from "./Categoryterm";
import Pieicon from "./Icons/InvestIcons/Pieicon";

function Sumcard({sumData}) {
  return (
    <div className="card w-full flex justify-center">
      <Pieicon color={"#7143BF"} padding={"p-S20"} />
      <div className="text-container ml-3 text-left flex flex-col gap-S8">
        <div className="subtxt">{sumData.category}</div>
        <div className="font20">{sumData.amount}</div>
      </div>
    </div>
  );
}

export default Sumcard;
