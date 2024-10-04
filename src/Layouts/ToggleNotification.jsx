import React from "react";
import ToggleButton from "../components/Button/ToggleButton";

function ToggleNotification({ text }) {
  return (
    <div className="flex">
      <ToggleButton />
      <div className="regtxt ml-S20">{text}</div>
    </div>
  );
}

export default ToggleNotification;
