import React from "react";
import SettingsIcon from "../../components/Icons/SettingsIcon";
import Categoryterm from "../../components/Categoryterm";
import HeaderSec from "../HeaderSec";
import AppleIcon from "../../Img/NavIcons/AppleIcon";
import UserIcon from "../../Img/NavIcons/userIcon";
import PlaystoreIcon from "../../Img/NavIcons/PlaystationIcon";

const data = [
  {
    Icon: <AppleIcon />,
    Invoice: "Apple Store",
    Date: "5h ago",
    Amount: "-$450",
  },
  {
    Icon: <UserIcon />,
    Invoice: "Michael",
    Date: "2 days ago",
    Amount: "+$160",
  },
  {
    Icon: <PlaystoreIcon />,
    Invoice: "Playstation",
    Date: "5 days ago",
    Amount: "-$1085",
  },
  {
    Icon: <UserIcon />,
    Invoice: "William",
    Date: "10 days ago",
    Amount: "+$90",
  },
  {
    Icon: <UserIcon />,
    Invoice: "James",
    Date: "10 days ago",
    Amount: "+$70",
  },
];

function Invoice() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"Invoices Sent"} />
      <div className="card flex flex-col gap-S20 h-full">
        <div className="font20 text-left">Details</div>
        {data.map((item) => {
          return (
            <div className="flexbox flex items-center gap-2 mb-S8 justify-between">
              {/* <SettingsIcon /> */}
              {item.Icon}
              <Categoryterm category={item.Invoice} sub={item.Date} />
              <div
                className={`value medtxt ml-3  ${
                  item.Amount.match(/\+/g) ? "text-primary" : "text-orange"
                }`}
              >
                {item.Amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Invoice;
