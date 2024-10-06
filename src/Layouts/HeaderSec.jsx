import React from "react";

function HeaderSec({ Header, more }) {
  return (
    <div className="Header-text-section w-fit flex w-full justify-between">
      <div className="medtxt">{Header}</div>
      <div className="medtxt">{more}</div>
    </div>
  );
}

export default HeaderSec;
