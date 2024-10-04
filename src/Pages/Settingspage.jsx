import React, { useState } from "react";
import CardSettings from "../Layouts/CardSettings";
import SectionNav from "../components/SecNav/SectionNav";
import Preference from "../Layouts/Preference";
import EditProfile from "../Layouts/EditProfile";

function Settingspage() {
  const Sections = ["Edit Profile", "Preferences", "Security"];

  const [Section, setSection] = useState("Profile");

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
      {Section === "Preferences" && <Preference />}
    </div>
  );
}

export default Settingspage;
