import React from "react";
import Categoryterm from "../components/Categoryterm";
import SettingsIcon from "../components/Icons/SettingsIcon";
import HomeIcon from "../components/Icons/HomeIcon";
import MoneyIcon from "../components/Icons/InvestIcons/Money";
import SectionNav from "../components/SecNav/SectionNav";
import HeaderSec from "./HeaderSec";

const carddetails = [
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
  },
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
  },
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
  },
];

function CardSettings() {
  return (
    <div className="content-outer-wrapper flex-auto w-2/6">
      <HeaderSec Header={"Card Setting"} />
      <div className="card">
        {carddetails.map((x) => {
          return (
            <div className="flex gap-4">
              <MoneyIcon color="#ff4512" />
              <Categoryterm category={x.category} sub={x.sub} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSettings;
