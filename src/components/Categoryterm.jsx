import React from "react";

function Categoryterm({ category, sub }) {
  return (
    <div className="flex items-start flex-col">
      <div className="category text-left medtxt">{category}</div>
      <div className="category text-left subtxt">{sub}</div>
    </div>
  );
}

export default Categoryterm;
