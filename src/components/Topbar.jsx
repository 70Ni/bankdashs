import React from "react";
import walletIcon from "../Img/wallet.png";
import lgo from "../Img/BankDash..svg";
import SearchInput from "./SearchInput";
import Avatar from "./Avatar";
import SettingsIcon from "./Icons/SettingsIcon";

function TopBar({ action }) {
  return (
    // <div className="flex fixed top-0 right-0 z-50 items-center w-full justify-between md:px-9 p-p12 px-p16 bg-white h-fit border border-b shadow-sm">
    //   {/* logo-search section */}
    //   <div className="logo-search flex items-center ">
    //     <div className="logo h-10 w-10  mr-2 md:hidden cursor-pointer">
    //       {/* <img src={Hamburger} alt="logo" className="" onClick={action} /> */}
    //     </div>
    //     <div className="logo flex items-center">
    //       <div className="logo h-10 w-10  mr-2 max-[400px]:h-8 max-[400px]:w-8">
    //         <img src={walletIcon} alt="logo" className="" />
    //       </div>
    //       <img
    //         className="logoname max-md:hidden"
    //         src={lgo}
    //         alt="modernize logo"
    //       />
    //     </div>
    //     <div className="search-wrapper max-md:ml-0 mx-5 max-[542px]:max-w-52 max-[428px]:hidden">
    //       <SearchInput />
    //     </div>
    //   </div>
    //   {/* icon Section - chat and notification  */}
    //   <div className="action-section flex items-center ">
    //     <div className="chat-notification-wrapper flex cursor-pointer gap-p20 mr-9 max-[692px]:mr-4">
    //       {/* <div className="chat-wrapper relative">
    //             <ChatIcon color={"#7E84A3"} />
    //             <div className="badge absolute -top-2 -right-1">
    //               <Notify value="5" />
    //             </div>
    //           </div> */}
    //       {/* <div className="chat-wrapper relative">
    //         <BellIcon color={"#7E84A3"} />
    //         <div className="badge absolute -top-2 -right-0">
    //           <Notify value="5" />
    //         </div>
    //       </div> */}
    //       <div className="chat-wrapper relative hidden max-[428px]:block">
    //         {/* <SearchIcon color={"#7E84A3"} /> */}
    //       </div>
    //     </div>
    //     {/* prifile section */}
    //     <div className="profile-action-wrapper flex items-center">
    //       <div className="profile-section flex items-center">
    //         <div className="avatar-wrapper h-9 w-9">
    //           {/* <img
    //             src={Avatar}
    //             alt="profile"
    //             className="h-9 w-9 cursor-pointer"
    //           /> */}
    //         </div>
    //         <div className="text-text2reg text-general-80  text-skin-base  ml-3 max-[692px]:hidden">
    //           X’eriya Ponald
    //         </div>
    //       </div>
    //       {/* <img
    //         src={dropdownIcon}
    //         alt=""
    //         className="ml-5 cursor-pointer max-[692px]:ml-2"
    //       /> */}
    //     </div>
    //   </div>
    // </div>
    <div className="topbar-wrpr w-full sticky  top-0 left-0  border-b z-20">
      <div className="top-content flex justify-between items-center bg-white py-S24 px-S40 max-[548px]:px-S16">
        <div className="left">
          {/* <div className="logo flex justify-between">
            <div className="logo h-9 w-9  mr-2 max-[400px]:h-8 max-[400px]:w-8">
              <img src={walletIcon} alt="logo" className="h-9 w-9" />
            </div>
            <img
              className="logoname max-md:hidden"
              src={lgo}
              alt="modernize logo"
            />
          </div> */}
          <div className="font20 mr-3">Overview</div>
        </div>
        <div className="right flex items-center gap-S20">
        <div className="searchinput-wrapr max-[468px]:hidden">

          <SearchInput  />
        </div>
          <SettingsIcon />
          <div className="avarlink">
            <Avatar small />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
