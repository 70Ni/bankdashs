import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import CreditCard from "./components/CreditCard";
import InputFlex from "./Layouts/InputFlex";
import AddNewCard from "./Layouts/AddNewCard";
import Categoryterm from "./components/Categoryterm";
import ListView from "./components/Button/ListView";
import CardSettings from "./Layouts/CardSettings";
import Avatar from "./components/Avatar";
import EditProfile from "./Layouts/EditProfile";
import Preference from "./Layouts/Preference";
import ToggleButton from "./components/Button/ToggleButton";
import ToggleNotification from "./Layouts/ToggleNotification";
import Security from "./Layouts/Security";
import WeeklyGraph from "./Layouts/WeeklyGraph";
import Weeklygraph from "./Layouts/WeeklyGraph";
import ExpenseChart from "./Layouts/ExpenseChart";
import TopBar from "./components/Topbar";
import Navigation from "./components/Navigation";
import Dashboard from "./Pages/Dashboard";
import Recentransaction from "./Layouts/Dashboard/Recentransaction";
import Transaction from "./Pages/Transaction";
import Investment from "./Pages/Investment";
import Accounts from "./Pages/Accounts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreditcardPage from "./Pages/CreditcardPage";
import Settingspage from "./Pages/Settingspage";
import Table from "./components/Table";

function App() {
  return (
    <div className="App w-full relative flex h-full bg-slate-100">
      <Navigation />
      <div className="page-wrapper w-full h-full">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/accounts" element={<Accounts />}></Route>
          <Route path="/investment" element={<Investment />}></Route>
          <Route path="/creditcard" element={<CreditcardPage />}></Route>
          <Route path="/settings" element={<Settingspage />}></Route>
        </Routes>
        {/* <Dashboard /> */}
        {/* <Accounts /> */}
        {/* <Investment /> */}

        {/* <Dashboard /> */}
        {/* <Investment /> */}
        {/* <Input title={"Hello there"} placeholder={"placeholder"} />
        <CreditCard /> */}
        {/* <InputFlex data={data} /> */}
        {/* <AddNewCard /> */}
        {/* <ListView /> */}
        {/* <CardSettings /> */}
        {/* <Avatar /> */}
        {/* <EditProfile /> */}
        {/* <Preference /> */}
        {/* <Security /> */}
        {/* <Weeklygraph /> */}
        {/* <ExpenseChart /> */}
        {/* <ToggleButton disable={false} /> */}
      </div>
      {/* <div className="Header">User interface</div> */}
    </div>
  );
}

export default App;
