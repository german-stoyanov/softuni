import React, { Component } from 'react';

export default class PokemonName extends Component{
    constructor(props){
        super(props)

        this.state = {
            pokeData:{
              
            }
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.pokeData)

        fetch('http://localhost:5000/pokedex/create',{
            body: JSON.stringify(this.state.pokeData), 
            headers: {'content-type': 'application/json'},
            method: 'POST'
        }).then(res=>res.json()).then(res=>{
            this.props.addPoke(res)
        })
    }

    handleInput(e){
        let poke = this.state.pokeData
        poke[e.target.name] = e.target.value;

        this.setState({
            poke
        })

    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            
            <div className="form-group">
                <label for="email">Pokemon image:</label>
                <input type="text" name="pokemonImg" onChange={this.handleInput} className="form-control"  />
            </div>
            <div className="form-group">
                <label for="email">Pokemon Info:</label>
                <input type="text" name="pokemonInfo" onChange={this.handleInput} className="form-control"  />
            </div>
            <div className="form-group">
                <label for="pwd">Pokemon Name:</label>
                <input type="text" name="pokemonName" onChange={this.handleInput} className="form-control" id="pwd" />
            </div>
            <button type="submit" className="btn btn-default">Add</button>
        </form>
        )
    }
}