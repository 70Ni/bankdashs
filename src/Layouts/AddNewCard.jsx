import React from "react";
import InputFlex from "./InputFlex";
import { type } from "@testing-library/user-event/dist/type";
import PrimaryButton from "../components/Button/Button";
import SecondaryButton from "../components/Button/SecondaryButton";
import HeaderSec from "./HeaderSec";

const data = [
  {
    title: "Card Type",
    name: "cardtype",
    placeholder: "Classic",
    type: "text",
  },
  {
    title: "Name On Card",
    name: "My Cards",
    placeholder: "My Name",
    type: "text",
  },
];
const data2 = [
  {
    title: "Card Number",
    // name: "cardtype",
    placeholder: "**** **** **** ****",
    type: "Number",
  },
  {
    title: "Expiration Date",
    name: "My Cards",
    placeholder: "DD/MM/YYYY",
    type: "date",
  },
];
function AddNewCard() {
  return (
    <div className="content-outer-wrapper flex-auto w-4/6 max-[930px]:w-full">
      <HeaderSec Header="Add New Card" />
      <div className="card w-full flex flex-col gap-S12">
        <div className="header regtxt text-inputcolor-100 text-left">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </div>
        <InputFlex data={data} />
        <InputFlex data={data2} />
        <div className="buttonw-wrapper flex gap-4 items-center justify-end">
          <div className="secondarybutton max-[]:">
            <SecondaryButton text={"Cancel"} />
          </div>
          <PrimaryButton text={"Add Card"} />
        </div>
      </div>
    </div>
  );
}

export default AddNewCard;
