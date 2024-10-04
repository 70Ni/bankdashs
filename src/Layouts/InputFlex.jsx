import React from "react";
import Input from "../components/Input";

function InputFlex({ data }) {
  return (
    <div className="flex gap-S24">
      <Input
        placeholder={data[0].placeholder}
        title={data[0].title}
        type={data[0].type}
      />
      <Input
        placeholder={data[1].placeholder}
        title={data[1].title}
        type={data[1].type}
      />
    </div>
  );
}

export default InputFlex;
