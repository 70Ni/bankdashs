import React from "react";
import Avatar from "../components/Avatar";
import InputFlex from "./InputFlex";
import PrimaryButton from "../components/Button/Button";

const profileInputs = [
  [
    {
      title: "Your Name",
      name: "Charlene Reed ",
      placeholder: "Name",
      type: "text",
    },
    {
      title: "User Name",
      name: "Charlene Reed ",
      placeholder: "user name",
      type: "text",
    },
  ],
  [
    {
      title: "Email",
      name: "cardtype",
      placeholder: "charlenereed@gmail.com ",
      type: "email",
    },
    {
      title: "Password",
      name: "My Cards",
      placeholder: "**********",
      type: "password",
    },
  ],
  [
    {
      title: "Date of Birth",
      name: "date",
      placeholder: "25 January 1990",
      type: "date",
    },
    {
      title: "Address",
      name: "address",
      placeholder: "4218-523",
      type: "text",
    },
  ],
  [
    {
      title: "Location",
      name: "address",
      placeholder: "San Jose, California, USA",
      type: "text",
    },
    {
      title: "City",
      name: "city",
      placeholder: "San Jose",
      type: "text",
    },
  ],
  [
    {
      title: "Postal Code",
      name: "postal",
      placeholder: "45962",
      type: "Number",
    },
    {
      title: "Country",
      name: "country",
      placeholder: "USA",
      type: "text",
    },
  ],
];

function EditProfile() {
  return (
    <div className="card border rounded-xl">
      <div className="content my-S16">
        <div className="avatar-form-wrpr flex w-full">
          <Avatar edit />
          <div className=" ml-S28 form-wrpr w-full flex flex-col gap-S20">
            {profileInputs.map((items) => {
              return <InputFlex data={items} />;
            })}
          </div>
        </div>
        <div className="buttonwrpper w-full flex justify-end mt-S16">
          <PrimaryButton text={"save"} />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
