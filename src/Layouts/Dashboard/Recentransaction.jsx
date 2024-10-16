import React from "react";
import Categoryterm from "../../components/Categoryterm";
import SettingsIcon from "../../components/Icons/SettingsIcon";
import HeaderSec from "../HeaderSec";
import CardIcon from "../../Img/NavIcons/CardIcon";
import PaypalIcon from "../../Img/NavIcons/PaypalIcon";

const terms = [
  {
    category: "Deposit from my Card",
    sub: "28 January 2021",
    value: "-$850",
    Icon: <CardIcon />,
  },
  {
    category: "Paypal Deposit",
    sub: "25 January 2021",
    value: "+$2,500",
    Icon: <PaypalIcon />,
  },
  {
    category: "Jemi Wilson",
    sub: "21 January 2021",
    value: "+$5,400",
    Icon: <CardIcon />,
  },
];

function Recentransaction() {
  return (
    <div className="content-outer-wrapper h-full">
      <HeaderSec Header={"Recent Transaction"} />

      <div className="card flex flex-col gap-S16 h-full justify-center">
        {terms.map((x) => {
          return (
            <div className="flex items-end justify-between">
              <div className="icon-catwrpr flex gap-4">
                {x.Icon}
                <div className="flex flex-col">
                  <Categoryterm category={x.category} sub={x.sub} />
                </div>
              </div>
              <div
                className={`value medtxt ml-3  ${
                  x.value.match(/\+/g) ? "text-primary" : "text-orange"
                }`}
              >
                {x.value}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="value medtxt">
        {terms.map((value) => {
          return value.value;
        })}
      </div> */}
    </div>
  );
}

export default Recentransaction;
