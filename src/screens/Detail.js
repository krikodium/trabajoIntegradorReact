import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: [],
            genre:[],
            verMas: false,
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=04370869e911ae9d10d76ad2c6d1796e&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState({
            pelicula: data,
            genre: data.genres
        }))
        .catch(error => console.log('el error fue ' + error))
        
    }

    verMas(){
        this.setState({
            verMas: true
        })
    }
    VerMenos(){
        this.setState({
            verMas: false
        })
    }


    render(){
        return(
            <>
            <Header/>
            <div className='contenedorDetalle'>
            <div className='character-card'>
            {console.log(this.state.pelicula)}
            <img src={"https://image.tmdb.org/t/p/w500" + this.state.pelicula.poster_path} alt="" />
            <h2>{this.state.pelicula.title}</h2> 
            <p>{this.state.pelicula.release_date}</p> 
            {console.log(this.state.genre)}
            {
                this.state.genre.slice(0,1).map((genre)=><p>Genero: {genre.name}</p>)
            }
            {this.state.verMas ?     
            <button onClick={()=> this.VerMenos()}>Ver menos</button> : 
            <button onClick={()=> this.verMas()}>Ver mas</button>
            }
            {this.state.verMas ? 
                <section className='extra'>
                    <p>{this.state.pelicula.overview}</p>
                </section> :
                <p></p>
            }
        </div> 
        </div>
        <Footer/>
        </>
        )
    }

}

export default Detail

