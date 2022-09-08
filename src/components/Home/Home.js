import React from "react";
import Characters from "../Characters/Characters";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Home (){
    return (
        <>
        <nav>
        <Header/>
        </nav>
        <main>
            <h2>Peliculas Populares</h2>
            <Characters/>
        </main>
            <Footer />
        </>
    )
}

export default Home