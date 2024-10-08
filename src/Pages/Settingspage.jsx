import React, { useState } from "react";
import CardSettings from "../Layouts/CardSettings";
import SectionNav from "../components/SecNav/SectionNav";
import Preference from "../Layouts/Preference";
import EditProfile from "../Layouts/EditProfile";
import Settings from "../Layouts/Settings/Settings";

function Settingspage() {
  const Sections = ["Edit Profile", "Preferences", "Settings"];

  const [Section, setSection] = useState("Edit Profile");

  const getNavSection = (e) => {
    console.log(e);
    if (e) {
      return setSection(e);
    }
  };

  return (
    <div className="page-outer">
      <SectionNav Sections={Sections} action={getNavSection} />
      {Section === "Edit Profile" && <EditProfile />}
      {Section === "Preferences" && <Preference />}
      {Section === "Settings" && <Settings />}
      {/* {Section === "Preferences" && <Preference />} */}
    </div>
  );
}

export default Settingspage;
