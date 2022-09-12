import { Component } from "react";
import { Link } from "react-router-dom";
import './styles.css'

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            verMas: false,
            isFav: false
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(storage)
        if(parsedStorage !== null){
            let isFavorite = parsedStorage.includes(this.props.info.id)
        if(isFavorite) {
            this.setState({
            isFav:true
            })
        }
        }
    
    
    }
    verMas(){
        this.setState({
            verMas: true
        })
    }
    verMenos(){
        this.setState({
            verMas: false
        })
    }

    addFavorites(id){
        let favStorage = localStorage.getItem('favoritos')
    
        if(favStorage === null){
            let favArr = [id]
            let arrToString = JSON.stringify(favArr)
            localStorage.setItem('favoritos', arrToString)
        } else {
            let parsedArr = JSON.parse(favStorage)
            parsedArr.push(id)
            let arrToString = JSON.stringify(parsedArr)
            localStorage.setItem('favoritos', arrToString)
        }
    
        this.setState({
            isFav:true
        })
    
    }
    
    removeFavorites(id){
        let favStorage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(favStorage)
        let filterStorage = parsedStorage.filter(elm => elm !== id)
        let storageToString = JSON.stringify(filterStorage)
        localStorage.setItem('favoritos', storageToString)
    
        this.setState({
            isFav: false
        })
    }
    
    render(){
        return(
            <div className='character-card'>
            <Link to={`/detail/${this.props.info.id}`}><img src={"https://image.tmdb.org/t/p/w500" + this.props.info.poster_path} alt="" /></Link>
            <h2>{this.props.info.title}</h2> 
            <p>{this.props.info.release_date}</p> 
            
            {
                this.state.verMas ?     
            <button onClick={()=> this.verMenos()}>Ver menos</button> : 
            <button onClick={()=> this.verMas()}>Ver mas</button>
            }

            {
                this.state.verMas ? 
                <section className='extra'>
                    <p>{this.props.info.overview}</p>
                </section> :
                <p></p>
            }
            {
                this.state.isFav ?
                <button onClick={()=> this.removeFavorites(this.props.info.id) }>Sacar de favoritos</button> :
                <button onClick={()=> this.addFavorites(this.props.info.id) }>Añadir a favoritos</button>
            }
        </div>
            
        )
    }
}

export default MovieCard