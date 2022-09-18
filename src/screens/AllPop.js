import React, { Component } from 'react'
import MovieCard from '../components/MovieCard/MovieCard'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class AllPop extends Component{
    constructor(props){
        super(props)
        this.state={
            populares: [],
            verMasPopulares: false
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=04370869e911ae9d10d76ad2c6d1796e&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState ({
            populares: data.results,
        }))
        .catch(error => console.log('el error fue ' + error))
    }
        menosPeliculas(){
            this.setState({
                verMasPopulares: false
            })
        }    
        masPeliculas(){
            this.setState({
                verMasPopulares:true
            })
        }

    render(){
        return(
            <>
            {console.log(this.state.populares)}
            <Header/>
            <h1>Peliculas Populares</h1>
            <section className='card-container'>
            {
                this.state.populares.length > 0 ?
                this.state.populares.slice(0,12).map((pelicula, idx)=> <MovieCard key={pelicula + idx} info={pelicula}/>) : 
                <h1>Cargando...</h1>
            }
            </section>
            <section className="card-container">
            {
                this.state.verMasPopulares ? 
                <button onClick={() => this.menosPeliculas()}>menos peliculas</button> :
                <button onClick={() => this.masPeliculas()}>mas peliculas</button>
            }
            {

                this.state.verMasPopulares ? 
                this.state.populares.slice(13,20).map((personaje, idx) => <MovieCard key={personaje + idx} info={personaje} />) :
                <p></p>
            }
            </section>
            <Footer/>
            </>
        )
    }
}

export default AllPop