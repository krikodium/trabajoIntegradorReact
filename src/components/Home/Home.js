import React, { Component } from 'react'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Buscador from "../Buscador/Buscador";
import MovieCard from '../MovieCard/MovieCard';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            resultados: []
        }
    }

    buscador(name){
        if(name !== ''){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=04370869e911ae9d10d76ad2c6d1796e&query=${name}`)
            .then(resp=> resp.json())
            .then(data=> this.setState({
                resultados: data.results
            }))
            .catch(err=> console.log(err))
        } else {
            this.setState({
                resultados: []
            })
        }
    }

    render(){
        return(
            <>
        <nav>
            <Header/>
        </nav>
        <Buscador buscador={(name)=> this.buscador(name)}/>
            {
                this.state.resultados.length > 0 ? 
                <div className='card-container'>{this.state.resultados.slice(0, 12).map((mov, idx)=><MovieCard key={mov + idx} info={mov}/>)}</div>: 
                <main>
                    <Movies/>
                </main>
            }
            <Footer />
        </>
        )
    }
}

export default Home