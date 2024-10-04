import React from "react";
import PrimaryButton from "../components/Button/Button";
import InputFlex from "./InputFlex";
import Input from "../components/Input";
import ToggleNotification from "./ToggleNotification";

const data = [
  {
    title: "Current Password",
    name: "password",
    placeholder: "**********",
    type: "text",
  },
  {
    title: "New Password",
    name: "password",
    placeholder: "**********",
    type: "password",
  },
];
function Security() {
  return (
    <div className="card border rounded-xl">
      <div className="content my-S16 flex flex-col gap-S28">
        <div className="avatar-form-wrpr text-left w-full">
          <div className="Buttontxt mb-S20">Two-factor Authentication</div>
          <div className="form-wrpr w-full flex flex-col gap-S20">
            <ToggleNotification text="Enable or disable two factor authentication" />
          </div>
        </div>
        <div className="avatar-form-wrpr text-left w-full">
          <div className="Buttontxt mb-S20">Change Password</div>
          <div className="form-wrpr w-full flex flex-col gap-S20">
            <InputFlex data={data} />
            {/* <Input
              title={"Current Password"}
              type={"password"}
              placeholder={"**********"}
            /> */}
          </div>
        </div>
        <div className="buttonwrpper w-full flex justify-end mt-S16">
          <PrimaryButton text={"save"} />
        </div>
      </div>
    </div>
  );
}

export default Security;
