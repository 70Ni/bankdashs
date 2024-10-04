import React, { useState } from "react";

import walletIcon from "../Img/wallet.png";
import lgo from "../Img/BankDash..svg";
import SettingsIcon from "./Icons/SettingsIcon";
import HomeIcon from "./Icons/HomeIcon";
import MoneyIcon from "./Icons/InvestIcons/Money";
import { Link } from "react-router-dom";

function Navigation() {
  const [active, setactive] = useState(false);

  return (
    <div className="Nav-outer sticky top-0 right-0 h-screen border-r-[1px] bg-white z-40 h-full max-md:hidden">
      <div className="Navigator-wrapper h-full flex flex-col gap-S8 relative m-2">
        <div className="navigator-header">
          {/* <div className="logo flex my-8 p-4 w-full">
            <div className="logo h-5 w-5  mr-2">
              <img src={walletIcon} alt="logo" className="h-5 w-5" />
            </div>
            <img
              className="logoname w-12 hidden max-md:hidden"
              src={lgo}
              alt="modernize logo"
            />
          </div> */}
        </div>
        <div
          className={`nav-list flex items-center gap-2 transition ${
            active
              ? "px-2 duration-300 transition-all ease-in"
              : "px-0 duration-300 transition-all"
          } `}
          onClick={() => setactive(!active)}
        >
          {/* <Link to ="/dashboard">user</Link> */}
          <MoneyIcon
            color={"#7143BF"}
            // bg={"bg-[#7143BF]"}
            rounded={"rounded-xl"}
          />
          {active && (
            <div className="nav-item transition-all duration-300 cursor-pointer px-3 medtxt text-inputcolor-100">
              Home
            </div>
          )}
        </div>
        {/* <Link to="/"> */}
        <div className="nav-list flex items-center gap-2">
          <MoneyIcon
            color={"#7143BF"}
            // bg={"bg-[#7143BF]"}
            rounded={"rounded-xl"}
          />
          <div className="nav-item cursor-pointer hidden Buttontxt text-inputcolor-100">
            Home
          </div>
          {/* </Link> */}
        </div>
        <div className="nav-list flex items-center gap-2">
          <MoneyIcon
            color={"#7143BF"}
            // bg={"bg-[#7143BF]"}
            rounded={"rounded-xl"}
          />
          <div className="nav-item cursor-pointer hidden Buttontxt text-inputcolor-100">
            Home
          </div>
        </div>
        <div className="nav-list flex items-center gap-2">
          <MoneyIcon
            color={"#7143BF"}
            // bg={"bg-[#7143BF]"}
            rounded={"rounded-xl"}
          />
          <div className="nav-item cursor-pointer hidden Buttontxt text-inputcolor-100">
            Home
          </div>
        </div>
        <Link to="/">Home</Link>
        <Link to="accounts">account</Link>
        <Link to="investment">investment</Link>
        <Link to="settings">settings</Link>
        <Link to="creditcard">credit card</Link>
      </div>
    </div>
  );
}

export default Navigation;
