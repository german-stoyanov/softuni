import React, { Component } from 'react';

export default class Pokemon extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.pokemonName}</h1>
                <p>{this.props.pokemonInfo}</p>
                <img src={this.props.pokemonImg}></img>
            </div>
        )
    }
}