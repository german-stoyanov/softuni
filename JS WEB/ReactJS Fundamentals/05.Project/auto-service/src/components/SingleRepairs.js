import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

export default class SingleRepairs extends Component{
    constructor(props){
        super(props)

        this.removeR = this.removeR.bind(this)
    }


    removeR(){
        this.props.removeR(this.props._id)
    }

    rendLinks(){
        if(sessionStorage.getItem('id')==='5b49f2f942d5e10709d85607'){
            return(
                <div className="links">
                    
                    <button><NavLink to={`detailsR/${this.props._id}`}>Details</NavLink></button>
                    <button><NavLink to={`editR/${this.props._id}`}>Edit</NavLink></button>
                    <button onClick={this.removeR}>Delete</button>
                </div>
            )
        }else{
            return(
                <div className="links">
                    
                <button><NavLink to={`detailsR/${this.props._id}`}>Details</NavLink></button>
                
            </div>
            )
        }
    }

    render(){
        return(
            <div className="repair">
                <h2>Car Model: {this.props.cModel}</h2>
                <div className="images">
                <div className="before">
                <label>Before:</label>
                <br/>
                <img src={this.props.imageUrl}/>
                </div>
                <div className="before">
                <label>After:</label>
                <br/>
                <img src={this.props.imageUrlA}/>
                </div>
                </div>
                <br />
                <span>A repair made by: <NavLink to={`craftsmen/${this.props.craftsman}`}>{this.props.craftsmanName[this.props.craftsman]}</NavLink></span>
                <br/>
                {this.rendLinks()}
                
            </div>
        )
    }
}