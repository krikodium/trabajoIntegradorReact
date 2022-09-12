import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MovieCard from '../components/MovieCard/MovieCard'
import { Link } from 'react-router-dom'
class Favorites extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculaFavorito: [],
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map(id =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04370869e911ae9d10d76ad2c6d1796e&language=en-US`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            ).then(data => this.setState({
                peliculaFavorito: data
            }))
            .catch(err => console.log(err))
        }
    }
    render(){
        return(
            <>
            <nav>
            <Header/>
            </nav>
            <div className='fav-container'>
                
                {
                    this.state.peliculaFavorito.length > 0 ? 
                    this.state.peliculaFavorito.map((elm, idx)=><MovieCard key={idx + elm} info={elm}/>) :
                    <h1><Link to={"/"}>NO TIENE FAVORITOS, CLICK PARA VER PELICULAS</Link></h1>
                }
            </div>
            <Footer/>
            </>
        )
    }

}

export default Favorites