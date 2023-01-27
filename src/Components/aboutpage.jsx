import React from "react";
import "../Components/aboutpagecss.css";
import mypic from "../images/me.png";
import {
  FaGlobe,
  FaMailBulk,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Aboutpage = () => {
  return (
     
     
    <div className="container">
      <div className="left_side">
        <div className="profileText">
          <div class="imgBox">
            <img src={mypic} />
          </div>
          <h2>
            Ashwin A
            <span>
              
              <br />
              ReactJs Developer
            </span>
          </h2>
        </div>
        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
               
              <span className="text">+91-8883000056</span>
            </li>

            <li>
               
              <span className="text">ashwinanbalagan07@gmail.com</span>
            </li>

            <li>
               
              <span className="text">
                https://www.linkedin.com/in/ashwin-a-b720bb1b4/
              </span>
            </li>

            <li>
               
              <span className="text">https://github.com/AshwinAk0301</span>
            </li>

            <li>
               
              <span className="text">Chennai, Tamil Nadu</span>
            </li>
          </ul>
        </div>

        <div className="Education">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <b>10th STD </b>
            </li>
            <h4>
              East Coast Christian Matriculation Hr Sec School
              <br />
              2014 with 87%
            </h4>

            <li>
              <b>12th STD </b>
            </li>
            <h4>
              Sunbeam Matriculation Hr Sec School
              <br />
              2016 with 71%
            </h4>

            <li>
              <b> UG - B.Sc., Mathematics</b>
            </li>
            <h4>
              Patrician College of Arts and Sciences
              <br />
              2016 - 2019 with 5.875 cgpa
            </h4>

            <li>
              <b> PG - Master of Computer Applications</b>
            </li>
            <h4>
              PSG College of Arts and Sciences
              <br />
              2020 - 2022 with 84%
            </h4>
          </ul>
        </div>
        <br />
        <div className="skill">
          <h3 className="title">SKILLS</h3>
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> Java Script</li>
            <li> React JS</li>
            <li> My SQL </li>
          </ul>
        </div>
      </div>
      <div className="right_side">
        <div className="knowledge">
          <h2> PROFESSIONAL KNOWLEDGE</h2>
          <ul>
            <li> Good knowledge on Web developing concepts .</li>
            <li> Done handson projects using FORMIK , HOOKS , ROUTING.</li>
            <li> Handson knowledge about HOOKS, ROUTER .</li>
            <li> Basic knowledge in REDUX</li>
            <li> Having basic knowledge in REST API. </li>
          </ul>
        </div>
        <div className="project">
          <h2>PROJECTS</h2>
          <div className="p1">
            <div className="contents">
              <h3>SENSITIVE DATA EXPOSURE CONTROL SYSTEM</h3>
              <h4>Languages and Tools Used :</h4>
              <ul>
                <li>PHP</li>
                <li>My SQL</li>
                <li>HMTL,CSS,JAVASCRIPT</li>
              </ul>
              <p>
                I developed this Web Application to control the
                leakage/spreading of any private data or content over social
                media where some of the information revealed or leaked on the
                social networks is meant to be private.
              </p>
            </div>
          </div>
          <br />

          <div className="p2">
            <div className="contents">
              <h3>PUBLIC COMPLAINT REGISTRATION AND MANAGEMENT SYSTEM</h3>
              <h4>Languages and Tools Used :</h4>
              <ul>
                <li>PHP</li>
                <li>My SQL</li>
                <li>HMTL,CSS,JAVASCRIPT</li>
              </ul>
              <p>
                I designed and developed this Web Application to help the public
                registering the problem as a complaint through online and
                getting their problems solved without going to the office. Here
                we can avoid paying bribes to the staffs working for the
                complaint raised on online. Also proper updates on the complaint
                status can be updated in the portal and can be viewed.
              </p>
            </div>
          </div>
          <br />

          <div className="p3">
            <div className="content">
              <h3>Facebook login - Handson</h3>
              <h4>Languages and Tools Used :</h4>
              <ul>
                <li>REACT JS </li>
                <li>HOOKS Components</li>
              </ul>
              <p>
                I did this Facebook Login Handson project as a part of my
                advanced ReactJS course. Here i have created Signup page where
                all the data are stored in local storage of the brower.
              </p>
            </div>
          </div>
          <br />

          <div className="p4">
            <div className="contents">
              <h3>Form validation - Handson</h3>
              <h4>Languages and Tools Used :</h4>
              <ul>
                <li>REACT JS </li>
                <li>FORMIK NODE PACKAGE</li>
              </ul>
              <p>
                I did this Facebook Login Handson project as a part of my
                advanced ReactJS course. I did this using formik and validation
                schema for validating the data submitted.
              </p>
            </div>
          </div>
          <br />

          <div className="p5">
            <div className="contents">
              <h3>Food App using API - Handson</h3>
              <h4>Languages and Tools Used :</h4>

              <ul>
                <li>REACT JS </li>
                <li>API - AXIOS METHOD</li>
              </ul>

              <p>
                I did this Facebook Login Handson project as a part of my
                advanced ReactJS course. I did using Axios API method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Aboutpage;
