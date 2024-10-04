import React from "react";
import Categoryterm from "../Categoryterm";

const terms = [
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
  },
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
  },
  {
    category: "Apple Store",
    sub: "E-commerce, Marketplace",
  },
];
function ListView({ list }) {
  return (
    <div className="flex gap-4 p-S16 border border-inputcolor-100 rounded-xl w-fit bg-white">
      {terms.map((x) => {
        return <Categoryterm category={x.category} sub={x.sub} />;
      })}
    </div>
  );
}

export default ListView;
