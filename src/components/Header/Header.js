import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <>
        
        <h1>Showcase</h1>
        <Link to={'/'}><h2>HOME</h2></Link>
        <Link to={'/favorites'}><h2>FAVORITES</h2></Link>
        </>
    )
}

export default Header