import React from "react";

function PrimaryButton({ text }) {
  return (
    <div className="py-S16 px-S40 rounded-lg bg-black w-fit cursor-pointer">
      <div className=" Buttontxt text-white whitespace-nowrap">{text}</div>
    </div>
  );
}

export default PrimaryButton;
