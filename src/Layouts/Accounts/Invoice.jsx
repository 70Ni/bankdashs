import React from "react";
import SettingsIcon from "../../components/Icons/SettingsIcon";
import Categoryterm from "../../components/Categoryterm";

const data = [
  {
    Icon: "",
    Invoice: "Apple Store",
    Date: "5h ago",
    Amount: "$450",
  },
  {
    Icon: "",
    Invoice: "Michael",
    Date: "2 days ago",
    Amount: "$160",
  },
  {
    Icon: "",
    Invoice: "Playstation",
    Date: "5 days ago",
    Amount: "$1085",
  },
  {
    Icon: "",
    Invoice: "William",
    Date: "10 days ago",
    Amount: "$90",
  },
];

function Invoice() {
  return (
    <div className="card">
      {data.map((item) => {
        return (
          <div className="flexbox flex items-center gap-3 mb-S8 justify-between">
            <SettingsIcon />
            <Categoryterm category={item.Invoice} sub={item.Date} />
            <div className="amount ml-2 subtxt">{item.Amount}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Invoice;
