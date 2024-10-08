import React from "react";
import { Link } from "react-router-dom";

function HeaderSec({ Header, more }) {
  return (
    <div className="Header-text-section w-fit flex w-full justify-between">
      <div className="medtxt">{Header}</div>
      <Link to="/creditcard">
        <div className="medtxt text-primary cursor-pointer">{more}</div>
      </Link>
    </div>
  );
}

export default HeaderSec;
