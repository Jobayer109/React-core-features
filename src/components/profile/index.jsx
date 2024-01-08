import React from "react";
import Bio from "./bio";
import Contact from "./contact";
import "./profile.css";
import Skills from "./skills";

class Profile extends React.Component {
  me = {
    name: "Jobayer Ahmed",
    title: "Jr. Software Developer",
    skill1: "Javascript",
    skill2: "Python",
    skill3: "Go",
  };
  render() {
    return (
      <div className="container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skill1={this.me.skill1}
          skill2={this.me.skill2}
          skill3={this.me.skill3}
        />
        <Contact />
      </div>
    );
  }
}

export default Profile;
