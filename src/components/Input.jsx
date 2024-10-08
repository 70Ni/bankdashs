import React from "react";


function Input({ title, placeholder, id, name, type }) {
  return (
    <div className="flex flex-col items-start w-full min-w-[158px]">
      <label className="text-gray-800 mb-S8 regtxt" for="fname">
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="
        px-S20 py-S16 
        border-[1px] 
        border-bordercolor
        text-inputcolor-100
        rounded
        focus:outline-primary
        w-full
        text-para
        "
      />
    </div>
  );
}

export default Input;
