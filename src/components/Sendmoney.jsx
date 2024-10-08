import React from "react";

function Sendmoney({ title, placeholder, id, name, type }) {
  return (
    <div className="flex relative w-full">
      <div className="button absolute right-0 bottom-0">
        <div className="py-S12 px-S24 rounded-full bg-primary w-fit cursor-pointer">
          <div className=" Buttontxt text-white whitespace-nowrap">Send</div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full min-w-[158px]">
        <label className="text-gray-800 mb-S8 regtxt" for="fname">
          {title}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder="Enter amount"
          className="
        px-S20 py-S12 
        border-[1px] 
        border-bordercolor
        text-inputcolor-100
        rounded-full
        focus:outline-primary
        w-full
        text-para
        "
        />
      </div>
    </div>
  );
}

export default Sendmoney;
