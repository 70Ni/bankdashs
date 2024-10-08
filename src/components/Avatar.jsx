import React from "react";
import avatarImg from "../Img/avatar.png";
import penIcon from "../Img/pencil.svg";

function Avatar({ small, edit, mr }) {
  const [selectedFile, setSelectedFile] = React.useState(avatarImg);

  const handleFileChange = (event) => {
    event && setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };
  const sm = "w-S40 h-S40";
  const lg = "w-S100 h-S100";
  return (
    <div
      className={`imagewrpr w-fit relative ${
        small ? sm : lg
      } object-contain rounded-full`}
    >
      <label for="upload-photo">
        {edit && (
          <div className="editIcon absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 z-10">
            <img src={penIcon} alt="edit Icon" className="absolute" />
            <input
              type="file"
              onChange={handleFileChange}
              name="photo"
              id="upload-photo"
            />
          </div>
        )}
      </label>
      <img
        src={selectedFile ? selectedFile : penIcon}
        alt="avatar"
        className={`rounded-full ${small ? sm : lg} object-contain`}
      />
    </div>
  );
}

export default Avatar;

//  O
// /|\
// / \
