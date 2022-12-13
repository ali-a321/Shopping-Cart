import React from "react";
import '../App.css';
import fb from "../images/fblogo.png"
import github from "../images/githublogo.png"
import ig from "../images/iglogo.png"
import twitter from "../images/twitterlogo.png"

export default function Contact(){

    return (
        <div className="contactContainer">

          <div className="socialContainer"> 
            <img className="socials" src= {fb} alt="facebook logo"/> 
            <img className="socials" src= {github} alt="github logo"/>
            <img className="socials" src= {ig} alt="instagram logo"/>
            <img className="socials" src= {twitter} alt="twitter logo"/>
            </div>
          <div className="contactLocation"> 
          Fashion Store  <br/>
          123 Little Seoul, Los Santos GTA
          </div>
     
        </div>
    )
}