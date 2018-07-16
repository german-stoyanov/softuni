import React,{Component} from 'react';
import requester from '../infrastructure/requester'
import {NavLink} from 'react-router-dom'

export default class DetailsR extends Component{
    constructor(props){
        super(props)

        this.state={
            repair: null,
            ready: false,
            craftsman: null
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        requester.get('appdata',`repairs/${id}`,'master')
            .then((res)=>{
                requester.get('appdata',`craftsman/${res.craftsman}`,'master').then((res)=>{
                    this.setState({craftsman: res,ready: true})
                })
                this.setState({repair:res})
            })
    }

    render(){
        if(this.state.ready===false){
            return <div>Loading...</div>
        }
        else{
            return(
                <div className="repairD">
                <div className="info">
                <h2>Car Model: {this.state.repair.cModel}</h2>
                <div className="images">
                <div className="before">
                <label>Before:</label>
                <br/>
                <img src={this.state.repair.imageUrl}/>
                </div>
                <div className="before">
                <label>After:</label>
                <br/>
                <img src={this.state.repair.imageUrlA}/>
                </div>
                </div>
                </div>
                <div className="moreinfo">
                  
                    <div className="craftsman">
                    <span>Craftsman: <NavLink to={`/craftsmen/${this.state.repair.craftsman}`}><strong>{this.state.craftsman.name}</strong></NavLink></span>
                    <br/>
                    <img alt="" src={this.state.craftsman.imageUrl}/>
                    </div>
                </div>
                <div>
                <span>This repair took {this.state.repair.time} days</span>
                <br/>
                 <label>Description: </label>
                    
                <span>{this.state.repair.description}</span>
                <br/>
                <span>Total Cost:<strong>{this.state.repair.price}</strong></span>
                </div>
                
               
                
               
            </div>
            )
        }
    }
}