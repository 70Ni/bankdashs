import React from "react";
import InputFlex from "../InputFlex";
import PrimaryButton from "../../components/Button/Button";
import ToggleButton from "../../components/Button/ToggleButton";
import constrastIcon from "../../Img/contrast.svg";
import widthIcon from "../../Img/resize.svg";
function Settings() {
  return (
    <div className="card border rounded-xl">
      <div className="content my-S16">
        <div className="font20 py-2 text-left">Accessibility </div>
        <div className="copact text-left flex items-center gap-2">
          <div className="txtreg mb-3 opacity-50">Change the Dashboard behaviour</div>
        </div>
      </div>
      <div className="content my-S16">
        <div className="Buttontxt text-left">View type</div>
        <div className="copact text-left flex items-center gap-2">
          <img src={constrastIcon} alt="" className="mr-2" />
          <div className="txtreg pr-4 py-0 opacity-50  w-fit rounded-lg my-2 cursor-pointer">
            Compact
          </div>
          <ToggleButton />
        </div>
      </div>
      <div className="content my-S16">
        <div className="Buttontxt text-left">View type</div>
        <div className="copact text-left flex items-center gap-2">
          <img src={widthIcon} alt="" className="mr-2" />

          <div className="txtreg pr-4 py-0  opacity-50 w-fit rounded-lg my-2 cursor-pointer">
            Dark mode
          </div>
          <ToggleButton />
        </div>
      </div>
      <div className="content my-S16">
        <div className="Buttontxt text-left">Theme style</div>
        <div className="copact text-left flex gap-2">
          <div className="txtreg bg-primary px-4 py-3  w-fit rounded-lg my-2 cursor-pointer"></div>
          <div className="txtreg bg-[#161E2C] px-4 py-3  w-fit rounded-lg my-2 cursor-pointer"></div>
          <div className="txtreg bg-primary px-4 py-3  w-fit rounded-lg my-2 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
