import React from "react";
import Avatar from "./Avatar";
import Input from "./Input";
import Sendmoney from "./Sendmoney";
import HeaderSec from "../Layouts/HeaderSec";

function PaymentUI() {
  return (
    <div className="content-outer-wrapper flex-auto">
      <HeaderSec Header={"Quick Transfer"} />

      <div className="card w-fit flex flex-col justify-between h-full max-lg:w-full">
        <div className="font20 text-left mb-4">Tranfer Amount</div>
        <div className="avatar-more-group flex justify-between">
          <div className="avatargroup flex gap-S28 max-[930px]:gap-y-S8">
            <div className="avatar-wrpr flex flex-col items-center justify-center">
              <Avatar small />
              <div className="name-term mt-2">
                <div className="name medtxt"> Livia Bator</div>
                <div className="posti subtxt"> CEO</div>
              </div>
            </div>
            <div className="avatar-wrpr flex flex-col items-center">
              <Avatar small />
              <div className="name-term mt-2">
                <div className="name medtxt"> Livia Bator</div>
                <div className="posti subtxt"> CEO</div>
              </div>
            </div>
            <div className="avatar-wrpr flex flex-col items-center max-[468px]:hidden">
              <Avatar small />
              <div className="name-term mt-2">
                <div className="name medtxt"> Livia Bator</div>
                <div className="posti subtxt"> CEO</div>
              </div>
            </div>
          </div>
          <div className="avatar-wrpr flex flex-col items-center">
            <div className="name-term mt-2 ml-4 border border-primary px-S16 py-2 rounded-full cursor-not-allowed">
              <div className="name medtxt"> See more</div>
            </div>
          </div>
        </div>
        <div className="payment-input flex items-center mt-S8">
          <div className="subtxt mr-3">Write Amount</div>
          <Sendmoney />
        </div>
      </div>
    </div>
  );
}

export default PaymentUI;
