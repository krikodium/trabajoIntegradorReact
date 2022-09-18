import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { Link } from "react-router-dom";
class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            populares: [],
            latest:[]
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=04370869e911ae9d10d76ad2c6d1796e&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState({
            populares: data.results,
            
        }))
        .catch(error => console.log('el error fue ' + error))

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=04370869e911ae9d10d76ad2c6d1796e&language=en-US&page=1')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            this.setState({
            latest: data.results
        })})
        .catch(error => console.log('el error fue ' + error))
    }

    render(){
        return(
            <>
            <Link to={'/allPop'}><h1>Peliculas Pop</h1></Link>
            <section className="card-container">
                {
                    this.state.populares.length > 0 ?
                    this.state.populares.slice(0,8).map((personaje, idx) => <MovieCard key={personaje + idx} info={personaje} />) : 
                    <img src="https://media.giphy.com/media/3AMRa6DRUhMli/giphy.gif"/>
                }
                
            </section>
            <Link to={'/soon'}><h1>Peliculas En Cartelera</h1></Link>
            <section className="card-container">
                {
                    this.state.latest.length > 0 ?
                    this.state.latest.slice(0,8).map((pelicula, idx) => <MovieCard key={pelicula + idx} info={pelicula} />) : 
                    <img src="https://media.giphy.com/media/3AMRa6DRUhMli/giphy.gif"/>
                }
                
            </section>
            
            </>
        )
    } 
}

export default Movies