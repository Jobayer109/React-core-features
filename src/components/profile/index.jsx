import React from "react";
import Bio from "./bio";
import Contact from "./contact";
import "./profile.css";
import Skills from "./skills";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default Profile;
