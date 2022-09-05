import { Component } from "react";
import './styles.css'

class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
            verMas: false
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
    
    
    render(){
        return(
            <div className='character-card'>
            <img src={"https://image.tmdb.org/t/p/w500" + this.props.info.poster_path} alt="" />
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
            <p className='delete'>Borrar</p>
        </div>
            
        )
    }
}

export default Character