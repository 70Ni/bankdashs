import React from "react";

function PrimaryButton({ text }) {
  return (
    <div className="py-S16 px-S40 rounded-lg bg-primary w-fit cursor-pointer max-[400px]:px-S24">
      <div className=" Buttontxt text-white whitespace-nowrap">{text}</div>
    </div>
  );
}

export default PrimaryButton;
