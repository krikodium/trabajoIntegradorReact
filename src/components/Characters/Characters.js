import { Component } from "react";
import Character from "../Character/Character";
class Characters extends Component{
    constructor(props){
        super(props);
        this.state = {
            populares: [],
            verMas: false
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=04370869e911ae9d10d76ad2c6d1796e&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState({
            populares: data.results
        }))
        .catch(error => console.log('el error fue ' + error))
        
    }
    
    

    componentDidUpdate(){
    }

    masPersonajes(){
        this.setState({
            verMas: true
        })
    }
    menosPersonajes(){
            this.setState({
                verMas: false
            })
    }

    render(){
        return(
            <>
            <section className="card-container">
                {console.log(this.state.populares)}
                {
                    this.state.populares.length > 0 ?
                    this.state.populares.map((personaje, idx) => <Character key={personaje + idx} info={personaje} />) : 
                    <h1>Cargando....</h1>
                }
            </section>
            <section className="card-container">
            {
                this.state.verMas ? 
                <button onClick={() => this.menosPersonajes()}>menos peliculas</button> :
                <button onClick={() => this.masPersonajes()}>mas peliculas</button>
            }
            {
                this.state.verMas ? 
                this.state.populares.map((personaje, idx) => <Character key={personaje + idx} info={personaje} />) :
                <p></p>
            }
            </section>
            </>
        )
    } 
}

export default Characters