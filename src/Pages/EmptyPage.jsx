import React from "react";
import Cardswrapper from "../Layouts/Dashboard/Cardswrapper";
import Recentransaction from "../Layouts/Dashboard/Recentransaction";
import ExpenseChart from "../Layouts/ExpenseChart";
import Weeklygraph from "../Layouts/WeeklyGraph";
import CommonGraph from "../Layouts/Investment/CommonGraph";
import PaymentUI from "../components/PaymentUI";
import EditProfile from "../Layouts/EditProfile";
import PrimaryButton from "../components/Button/Button";
import { Link } from "react-router-dom";

function EmptyPage() {
  return (
    <div className="page-outer">
      Can't find that link
      <div className="w-full flex items-center justify-center">
        <Link to="/">
          <PrimaryButton text={"Back Home"} />
        </Link>
      </div>
    </div>
  );
}
  
export default EmptyPage;
