import React, {Component} from 'react';
import fetcher from '../../fetcher';

export default class Image extends Component{
    render(){
        return (
            <div key={this.props.id} className="roster-image-container" onClick={()=>this.props.updateF({url:this.props.url,id:this.props.id,bio:this.props.bio,name:this.props.name})}>
                <img src={this.props.url} alt="episode" />
             
            </div>
        )
    }
    
}
