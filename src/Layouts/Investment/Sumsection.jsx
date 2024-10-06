import React from "react";
import Sumcard from "../../components/Sumcard";

function Sumsection() {
  return (
    <div className="flex items-center gap-S20 max-xl:flex-wrap">
      <div className="flexsec">
        <Sumcard />
        <Sumcard />
      </div>
      <div className="flexsec">
        <Sumcard />
        <Sumcard />
      </div>
    </div>
  );
}

export default Sumsection;
