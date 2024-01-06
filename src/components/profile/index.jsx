import React from "react";
import "./profile.css";


class Profile extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="bio">
                    <h2>Jobayer Ahmed</h2>
                    <p>Jr. Software Developer</p>
                </div>
                <div className="skills">
                    <h3>Skills: </h3>
                    <ul>
                        <li>Javascript</li> 
                        <li>Python</li>
                        <li>Go</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact with me: </h3>
                    <ul>
                        <li><a href="www.google.com">Facebook</a></li>
                        <li><a href="www.google.com">Linkedin</a></li>
                        <li><a href="www.google.com">Github</a></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Profile