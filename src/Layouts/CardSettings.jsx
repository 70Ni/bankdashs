import React from "react";
import Categoryterm from "../components/Categoryterm";
import SettingsIcon from "../components/Icons/SettingsIcon";
import HomeIcon from "../components/Icons/HomeIcon";
import MoneyIcon from "../components/Icons/InvestIcons/Money";
import SectionNav from "../components/SecNav/SectionNav";
import HeaderSec from "./HeaderSec";

const carddetails = [
  {
    icon: "",
    category: "Block Card",
    sub: "Instantly block your card",
  },
  {
    icon: "",
    category: "Change Pin Code",
    sub: "Choose another pin code",
  },
  {
    icon: "",
    category: "Add to Google Pay",
    sub: "Withdraw without any card",
  },
  {
    icon: "",
    category: "Add to Apple Pay",
    sub: "Withdraw without any card",
  },
  {
    icon: "",
    category: "Add to Apple Store",
    sub: "Withdraw without any card",
  },
];

function CardSettings() {
  return (
    <div className="content-outer-wrapper h-full flex-auto w-2/6 max-[930px]:w-full">
      <HeaderSec Header={"Card Setting"} />
      <div className="card  h-full flex flex-col gap-S20">
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
