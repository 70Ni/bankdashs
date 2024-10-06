import React from "react";
import SettingsIcon from "../../components/Icons/SettingsIcon";
import Categoryterm from "../../components/Categoryterm";
import HeaderSec from "../HeaderSec";

const data = [
  {
    Icon: "",
    Transact: "Spotify Subscription",
    Date: "25 Jan 2021",
    Category: "Shopping",
    Pin: "1234 ****",
    Status: "Pending",
    Amount: "-$150",
  },
  {
    Icon: "",
    Transact: "Mobile Service",
    Date: "25 Jan 2021",
    Category: "Service",
    Pin: "1234 ****",
    Status: "Completed",
    Amount: "-$340",
  },
  {
    Icon: "",
    Transact: "Emilly Wilson",
    Date: "25 Jan 2021",
    Category: "Transfer",
    Pin: "1234 ****",
    Status: "Completed",
    Amount: "+$780",
  },
];

function Transactions() {
  return (
    <div className="content-outer-wrapper">
      <HeaderSec Header={"Last Transaction"} />
      <div className=" card w-full h-fit">
        {data.map((item) => {
          return (
            <div className="row flex items-center mb-S8">
              <SettingsIcon />
              <div className="category-wrpr ml-2 flex-1">
                <Categoryterm category={item.Transact} sub={item.Date} />
              </div>
              <div className="row-wrar flex justify-between flex-1 mx-2">
                <div className="subtxt mx-2">Shopping</div>
                <div className="subtxt mx-2">Shopping</div>
                <div className="subtxt mx-2">Shopping</div>
                {/* <div
            className={`value medtxt ml-3  ${
              x.value.match(/\+/g) ? "text-green-500" : "text-red-600"
            }`}
          >
            {x.value}
          </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transactions;
