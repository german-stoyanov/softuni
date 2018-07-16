import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class SingleAccessory extends Component{

    constructor(props){
        super(props)

        this.removeA = this.removeA.bind(this)
    }

    removeA(){
        this.props.removeA(this.props._id)
    }

    rendLinks(){
        if(sessionStorage.getItem('id')==='5b49f2f942d5e10709d85607'){
            return (<div className="links">
          
            <button><NavLink to={`details/${this.props._id}`}>Details</NavLink></button>
            <button><NavLink to={`editA/${this.props._id}`}>Edit</NavLink></button>
            <button onClick={this.removeA}>Delete</button>
        </div>)
        }else{
            return (<div className="links">
          <button><NavLink to={`details/${this.props._id}`}>Details</NavLink></button>
           </div>)
        }
    }

    render(){
        return(
            <div className="accessory">
                <h2>Name: {this.props.title}</h2>
                <h3>Price: {this.props.price}</h3>
                <img src={this.props.imageUrl}/>
                <br />
                
                {this.rendLinks()}
                
            </div>
        )
    }
}