import React from "react";
import Sumcard from "../../components/Sumcard";
import BalanceIcon from "../../Img/NavIcons/BalanceIcon";
import ExpenseIcon from "../../Img/NavIcons/ExpenseIcon";
import IncomeIcon from "../../Img/NavIcons/IncomeIcon";
import SavingsIcon from "../../Img/NavIcons/SavingsIcon";
import Pieicon from "../../Img/NavIcons/PieIcon";

const sumData = [
  {
    icon: "",
    category: "Total Invested Amount",
    amount: "$150,000",
    icon: <BalanceIcon />,
  },
  {
    icon: "",
    category: "Number of Investments",
    amount: "1,250",
    icon: <Pieicon />,
  },
  {
    icon: "",
    category: "Rate of Return",
    amount: "+5.80%",
    icon: <ExpenseIcon />,
  },
  {
    icon: "",
    category: "Total Saving",
    amount: "$7,920",
    icon: <SavingsIcon />,
  },
];

function Sumsection() {
  return (
    <div className="flex items-center gap-S20 max-xl:flex-wrap">
      <div className="flexsec max-[468px]:flex-col">
        <Sumcard sumData={sumData[0]} />
        <Sumcard sumData={sumData[1]} />
      </div>
      <div className="flexsec max-[468px]:flex-col">
        <Sumcard sumData={sumData[2]} />
        <Sumcard sumData={sumData[3]} I />
      </div>
    </div>
  );
}

export default Sumsection;
