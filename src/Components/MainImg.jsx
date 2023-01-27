import "../Components/MainImgCss.css";

import React from 'react';
import {Link} from "react-router-dom";

import IntroImge from "../images/me_background.jpg";

const MainImg = () => {
  return (
    <div className="hero">

        <div className="mask">
<img className="into-img" src={IntroImge} />
        </div>

        <div className="content">
            <p> Hi , I'M ASHWIN A, Web Developer </p>
            <h1> ReactJs Developer.</h1>
            <div>
                 
                <Link to="/about" className="btn btn-contact">My Resume</Link>
            </div>
        </div>

    </div>
  )
}

export default MainImg;