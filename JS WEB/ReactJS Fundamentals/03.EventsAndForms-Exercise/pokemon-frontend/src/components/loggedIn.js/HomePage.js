import React, { Component } from 'react'
import PokemonForm from './PokemonForm'
import Pokemon from './Pokemons'

export default class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            pokeArray: []
        }

        this.addPoke = this.addPoke.bind(this)
    }
  
    componentDidMount(){
        fetch('http://localhost:5000/pokedex/pokedex')
                .then(res=>res.json())
                .then((res)=>{
                    let data  = res.pokemonColection
                    return this.setState({pokeArray:data})
                })
    }

    addPoke (poke){
        console.log(poke)
        let arr = this.state.pokeArray;
        arr.push(poke)
        this.setState({arr})
    }

    render () {
        return (
            <div>
            <h1>Home Page</h1>
            <PokemonForm addPoke={this.addPoke}/>
            {this.state.pokeArray.map(x=>x=<Pokemon {...x} />)}
            </div>
        )
    }
}