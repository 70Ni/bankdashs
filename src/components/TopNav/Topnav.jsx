import React from "react";
import NavButton from "../Button/NavButton";

const nav = [
  {
    text: "home",
    text: "accounts",
    text: "investment",
    text: "creditcard",
    text: "settings",
  },
];

function Topnav() {
  const [active, setactive] = React.useState("");
  return (
    <div className="outer flex my-S16 mx-S40 gap-S12 overflow-x-scroll no-scrollbar">
      <NavButton data={nav} />
    </div>
  );
}

export default Topnav;
