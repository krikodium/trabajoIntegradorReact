import React, {Component} from "react"
import "../Search/buscador.css"

class Buscador extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: ""
		}
	}

	notDefault(event){
		console.log("Evito default");
		event.preventDefault();
	}

    getDatos(evento){
		this.setState({
			value: evento.target.value
		},
		()=> this.props.filter(this.state.value)
		)
	}

	render(){
		return(
			<div className="searchBar">
		<form onSubmit= {(event)=> this.notDefault(event)}>
			<input type="text" name="search" id="" placeholder="Search Movies..." onChange = {(dato) => this.getDatos(dato)} value={this.state.value}/>
			<button type="submit" className="boton">Search<i className="fas fa-search"></i></button>
		</form>     
		</div>
		)
	}
}

export default Buscador;