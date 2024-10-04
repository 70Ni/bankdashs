import React from "react";

function SecondaryButton({ text }) {
  return (
    <div className="py-S16 px-S40 rounded-lg border border-black w-fit cursor-pointer">
      <div className=" Buttontxt text-black whitespace-nowrap">{text}</div>
    </div>
  );
}

export default SecondaryButton;
