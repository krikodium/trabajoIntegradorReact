import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <>
        <nav>
        <h1>Showcase</h1>
        <Link to={'/'}><h2>HOME</h2></Link>
        <Link to={'/favorites'}><h2>FAVORITES</h2></Link>
        <Link to={'/allPop'}><h2>POPULARES</h2></Link>
        <Link to={'/soon'}><h2>CARTELERA</h2></Link>
        </nav>
        </>
    )
}

export default Header