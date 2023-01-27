import React from "react";
import progimg from "../images/projimg.jpg";
import "../Components/projectcss.css";

const ProjectPage = () => {
  return (
    <div>
      <div className="projimg">
        <img
          className="projimg"
          src={progimg}
          style={{ width: "295%", height: "260%" }}
        />
      </div>

      <div className="projbox">
        <div className="p1">
          <div className="content">
            <h2>SENSITIVE DATA EXPOSURE CONTROL SYSTEM</h2>

            <h3>Languages and Tools Used :</h3>
            <ul>
              <li>PHP</li>
              <li>My SQL</li>
              <li>HMTL,CSS,JAVASCRIPT</li>
            </ul>
            <p>
              I developed this Web Application to control the leakage/spreading
              of any private data or content over social media where some of the
              information revealed or leaked on the social networks is meant to
              be private.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="p2">
          <div className="content">
            <h2>PUBLIC COMPLAINT REGISTRATION AND MANAGEMENT SYSTEM</h2>
            <h3>Languages and Tools Used :</h3>
            <ul>
              <li>PHP</li>
              <li>My SQL</li>
              <li>HMTL,CSS,JAVASCRIPT</li>
            </ul>
            <p>
              I designed and developed this Web Application to help the public
              registering the problem as a complaint through online and getting
              their problems solved without going to the office. Here we can
              avoid paying bribes to the staffs working for the complaint raised
              on online. Also proper updates on the complaint status can be
              updated in the portal and can be viewed.
            </p>
          </div>
        </div>
        <div className="p3">
          <div className="content">
            <h2>Facebook login - Handson</h2>
            <h3>Languages and Tools Used :</h3>
            <ul>
              <li>REACT JS </li>
              <li>HOOKS Components</li>
            </ul>
            <p>
              I did this Facebook Login Handson project as a part of my advanced
              ReactJS course. Here i have created Signup page where all the data
              are stored in local storage of the brower.
            </p>
          </div>
        </div>
        <div className="p4">
          <div className="content">
            <h2>Form validation - Handson</h2>
            <h3>Languages and Tools Used :</h3>
            <ul>
              <li>REACT JS </li>
              <li>FORMIK NODE PACKAGE</li>
            </ul>
            <p>
              I did this Facebook Login Handson project as a part of my advanced
              ReactJS course. I did this using formik and validation schema for
              validating the data submitted.
            </p>
          </div>
        </div>
        <div className="p5">
          <div className="content">
            <h2>Food App using API - Handson</h2>
            <h3>Languages and Tools Used :</h3>
            <ul>
              <li>REACT JS </li>
              <li>API - AXIOS METHOD</li>
            </ul>
            <p>
              I did this Facebook Login Handson project as a part of my advanced
              ReactJS course. I did using Axios API method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
