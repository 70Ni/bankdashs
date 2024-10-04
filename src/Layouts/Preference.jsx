import React from "react";
import InputFlex from "./InputFlex";
import PrimaryButton from "../components/Button/Button";
import ToggleButton from "../components/Button/ToggleButton";
import ToggleNotification from "./ToggleNotification";

const prefInput = [
  {
    title: "Currency",
    name: "currency",
    placeholder: "USD",
    type: "text",
  },
  {
    title: "Time Zone",
    name: "time",
    placeholder: "(GMT-12:00) International Date Line West",
    type: "text",
  },
];

const toggleButtons = [
  "I send or receive digita currency",
  "I receive merchant order",
  "There are recommendation for my account",
];

function Preference() {
  return (
    <div className="card border rounded-xl">
      <div className="content my-S16">
        <div className="avatar-form-wrpr flex w-full">
          <div className="form-wrpr w-full flex flex-col gap-S20">
            <InputFlex data={prefInput} />
            <div className="Buttontxt text-left">Notification</div>
            {toggleButtons.map((item) => {
              return <ToggleNotification text={item} />;
            })}
          </div>
        </div>
        <div className="buttonwrpper w-full flex justify-end mt-S16">
          <PrimaryButton text={"save"} />
        </div>
      </div>
    </div>
  );
}

export default Preference;
