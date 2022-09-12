import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Buscador from "../Buscador/Buscador";
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
    
    
    componentDidUpdate(){
    }
    



    render(){
        return(
            <>
            <h1>Peliculas Populares</h1>
            <section className="card-container">
                {
                    this.state.populares.length > 0 ?
                    this.state.populares.slice(0,8).map((personaje, idx) => <MovieCard key={personaje + idx} info={personaje} />) : 
                    <h1>Cargando....</h1>
                }
                
            </section>
            <h1>Peliculas En Cartelera</h1>
            <section className="card-container">
                {
                    this.state.latest.length > 0 ?
                    this.state.latest.slice(0,8).map((pelicula, idx) => <MovieCard key={pelicula + idx} info={pelicula} />) : 
                    <h1>Cargando....</h1>
                }
                
            </section>
            
            </>
        )
    } 
}

export default Movies