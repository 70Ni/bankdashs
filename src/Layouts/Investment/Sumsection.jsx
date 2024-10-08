import React from "react";
import Sumcard from "../../components/Sumcard";
const sumData = [{
  icon:"",
  category:"My Balance",
  amount:"$12,750"
},
{
  icon:"",
  category:"Income",
  amount:"$5,600"
},
{
  icon:"",
  category:"Expense",
  amount:"$3,460"
},
{
  icon:"",
  category:"Total Saving",
  amount:"$7,920"
},
]

function Sumsection() {
  return (
    <div className="flex items-center gap-S20 max-xl:flex-wrap">
      <div className="flexsec max-[468px]:flex-col">
        <Sumcard sumData={sumData[0]} />
        <Sumcard  sumData={sumData[1]}/>
      </div>
      <div className="flexsec max-[468px]:flex-col">
        <Sumcard sumData={sumData[2]} />
        <Sumcard sumData={sumData[3] }I/>
      </div>
    </div>
  );
}

export default Sumsection;
