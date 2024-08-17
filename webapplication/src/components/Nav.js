import React from "react";
import {Link} from "react-router-dom";
import picture from '../Keshavpic.png';

const Nav=()=>{
    return(
        <div className="nav">
            <div>
            <img className="profile-pic" src={picture} alt=""/>
            </div>
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </div>
    )
}

export default Nav;