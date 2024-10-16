import React from "react";
import SettingsIcon from "../../components/Icons/SettingsIcon";
import Categoryterm from "../../components/Categoryterm";
import HeaderSec from "../HeaderSec";
import ExpenseIcon from "../../Img/NavIcons/CardIcon";

const data = [
  {
    Icon: <ExpenseIcon />,
    Invested: "Spotify Subscription",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    return: "+16%",
  },
  {
    Icon: <ExpenseIcon />,
    Invested: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    return: "-4%",
  },
  {
    Icon: <ExpenseIcon />,
    Invested: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    return: "+25%",
  },
];

function Investmentbar() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"Card List"} />
      {data.map((item) => {
        return (
          <div className="row card flex gap-S12 items-center mb-S8 justify-between">
            {item.Icon}
            <div className="flex-1 ml-S8">
              <Categoryterm category={item.Invested} sub={item.category} />
            </div>
            <div className="flex-1 max-[468px]:hidden">
              <Categoryterm category={item.value} sub="Investment value" />
            </div>
            <div className="flex flex-col">
              <div
                className={`value medtxt   text-left ${
                  item.return.match(/\+/g) ? "text-primary" : "text-orange"
                }`}
              >
                {item.return}
              </div>
              <div className="subtxt text-left">Return Value</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Investmentbar;
