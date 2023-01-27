import React from "react";
import wd from "../images/Developer.jpg";
import wdi from "../images/webdev.jpg";
import "../Components/skillscss.css";

const SkillPage = () => {
  return (
    <div className="dev-skill">
      <div className="dev-back">
        <img className="devimg" src={wd} />
      </div>

      <div className="fed">
        <div>
          <img className="wdiimage" src={wdi} />
        </div>
        <div className="content">
          <h3> Web Development</h3>
          <p>
            Solution-driven web developer good at contributing to highly
            collaborative work environment and finding solutions. Proven
            experience developing consumer-focused websites using HTML, CSS,
            JavaScript and React Js. Good knowledge of the best practices for web design.
            I have trained and experienced with many handson tasks which made more familiar with the web developing cycle.
          </p>
          <br />
          <br />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
            <li>My SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
