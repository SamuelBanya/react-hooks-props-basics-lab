import React from "react";
import Links from "./Links";

function About(props) {
  function determineIfBioIsBlank(props) {
    console.log("props: ");
    console.log(props);
    if (!props.bio) {
      return "";
    } else {
      return (
        <p>{props.bio}</p>
    );
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {determineIfBioIsBlank(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
