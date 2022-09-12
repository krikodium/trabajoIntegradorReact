import React, { Component } from 'react'

class Buscador extends Component{
	constructor(props){
		super(props)
		this.state = {
			valorInput: ''
		}
	}

	prevenirRefresh(event){
		event.preventDefault()
	}

	actualizarEstado(event){
		this.setState({
			valorInput:event.target.value
		}, ()=> this.props.buscador(this.state.valorInput))
	}

	render(){
		return(
			<form onSubmit={(event)=> this.prevenirRefresh(event)}>
				<input placeholder='buscar peliculas' type='text' onChange={(event)=> this.actualizarEstado(event)} value={this.state.valorInput}/>
			</form>
		)
	}
}

export default Buscador