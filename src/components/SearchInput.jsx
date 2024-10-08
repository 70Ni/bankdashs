import React from "react";
import searchIcon from "../Img/search.svg";

function SearchInput({ title, placeholder, id, name }) {
  return (
    <div className="flex flex-col items-start w-full min-w-[158px] relative">
      {title && (
        <label className="text-general-80 mb-1 text-text2reg" for="fname">
          {title}
        </label>
      )}
      <img src={searchIcon} alt={name} className="absolute top-[10px] left-4" />
      <input
        type="text"
        id={id}
        name={name}
        placeholder={"Search"}
        className="
        px-p16 py-2 
        pl-12
        border
        border-general-50
        text-inputcolor-100
        bg-inputcolor-300
        rounded-full
        focus:outline-primary
        w-full
        "
      />
    </div>
  );
}

export default SearchInput;
