import React, { useState } from "react";
import { Link } from "react-router-dom";

const nav = [
  {
    text: "home",
  },
  {
    text: "accounts",
  },
  {
    text: "investment",
  },
  {
    text: "creditcard",
  },
  {
    text: "settings",
  },
];

function NavButton({ data }) {
  const [active, setactive] = React.useState("home");
  return nav.map((item) => {
    return (
      <Link to={"/" + item.text}>
        <div
          onClick={() => setactive(item.text)}
          className={`py-S8 px-S40 rounded-full ${
            active === item.text ? "bg-gray-900 border-gray-200" : "bg-white"
          }  border border-2 w-fit cursor-pointer max-[400px]:px-S24`}
        >
          <div
            className={`regtxt ${
              active === item.text ? "text-white" : "text-grey-900"
            } whitespace-nowrapv`}
          >
            {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
          </div>
        </div>
      </Link>
    );
  });
}

export default NavButton;
