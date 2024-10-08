import React from "react";
import Categoryterm from "../../components/Categoryterm";
import SettingsIcon from "../../components/Icons/SettingsIcon";
import HeaderSec from "../HeaderSec";

const terms = [
  {
    category: "Apple Stor",
    sub: "E-commerce, Marketplace",
    value: "-$850",
  },
  {
    category: "Apple item",
    sub: "E-commerce, Marketplace",
    value: "+$2,500",
  },
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
    value: "+$5,400",
  },
];

function Recentransaction() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"Recent Transaction"} />

      <div className="card flex flex-col gap-S24 h-full justify-center">
        {terms.map((x) => {
          return (
            <div className="flex items-end justify-between">
              <div className="icon-catwrpr flex gap-4">
                <SettingsIcon />
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
