import React from "react";
import cardIcon from "../Img/Chip_Card.png";
import viewIcon from "../Img/eye.svg";
import closeIcon from "../Img/eyeclose.svg";
import HeaderSec from "../Layouts/HeaderSec";
import { Link } from "react-router-dom";

function CreditCard({ cardcont, opacity }) {
  function generateAsterisks(str) {
    return "*".repeat(str.length);
  }

  const [view, setview] = React.useState(true);
  return (
    <div
      className={`card bg-gradient-to-br  from-gray-900 to-gray-800 ${
        opacity && "opacity-50"
      } hover:shadow-2xl duration-500  border rounded-3xl w-full flex-1 text-left flex flex-col gap-S20`}
    >
      <div className="header-section flex w-full justify-between ">
        <div className="balance-wrap">
          <div className="smalltxt text-white opacity-40">Balance</div>
          <div className="balance-wrapr flex gap-2 cursor-pointer">
            {view ? (
              <div className="font20 text-gray-500 duration-200 translate-y-2">
                {generateAsterisks(cardcont?.Balance)}
              </div>
            ) : (
              <div className="font20 text-gray-500 duration-200">
                ${cardcont?.Balance}
              </div>
            )}
            {view ? (
              <img src={viewIcon} alt="view" onClick={() => setview(!view)} />
            ) : (
              <img src={closeIcon} alt="view" onClick={() => setview(!view)} />
            )}
          </div>
        </div>
        <div className="para h-8 w-8">
          <img src={cardIcon} alt="" />
        </div>
      </div>
      <a href="creditcard" className="w-full">
        <div className="card-bottom ">
          <div className="card-detils mt-4">
            <div className="font20 text-white">{cardcont?.cardNo}</div>
          </div>
          <div className="card-holders flex justify-between border-t border-gray-600 pt-2">
            <div className="details-wrap">
              <div className="subtxt text-white opacity-40">CARD HOLDER</div>
              <div className="medtxt text-white">{cardcont?.cardHolder}</div>
            </div>
            <div className="details-wrap ml-2 flex flex-col  items-end">
              <div className="subtxt text-right text-white opacity-40">
                VALID THRU
              </div>
              <div className="regtxt text-white">{cardcont?.valid}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CreditCard;
