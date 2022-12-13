import React from "react";
import './App.css';
import {Link} from "react-router-dom";


export default function Home(){

    return (
        <div className="homeText ">
            <div className="opac"> 
                <div className="best"> BEST ONLINE STORE OF THE YEAR</div>
                <div className="bigText"> We don't know fashion, 
                We hope you don't too </div>
            </div>
            <button className="shop-btn"><Link to = "/products"> Shop Now</Link></button>  
        </div>
    )
}