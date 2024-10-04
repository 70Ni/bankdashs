import React from "react";

function ToggleButton({ disable }) {
  const active = "bg-blue-500 duration-700 ease-in-out";
  const passive = "bg-inputcolor-200";
  const transitionPassive = "ease-in-out duration-300";
  const transitionActive = "translate-x-full ease-in-out duration-300";

  const [Active, setActive] = React.useState();
  return (
    <div
      onClick={() => {
        !disable && setActive(!Active);
      }}
      className={`relative ${
        disable && "cursor-not-allowed"
      } wrapper relative cursor-pointer w-fit`}
    >
      <div
        className={`toggle-button h-5 w-12 rounded-full ${
          Active ? active : passive
        }`}
      >
        <div
          className={`${
            Active ? transitionActive : transitionPassive
          } round h-3 w-5 absolute m-1 shadow shadow-lg bg-white rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default ToggleButton;
