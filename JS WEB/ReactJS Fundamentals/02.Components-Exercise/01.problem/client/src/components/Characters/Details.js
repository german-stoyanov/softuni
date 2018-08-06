import React from 'react';
import fetcher from '../../fetcher';

export default class Details extends React.Component {
   render = () => {

   

        return(
            <section id={this.props.info.id}>
                <div className="image">
                    <img src={this.props.info.url}/>
                </div>
                <div className="info">
                    <p>Name: <strong>{this.props.info.name}</strong></p>
                    <p>Bio: {this.props.info.bio}</p>
                    <p></p>
                </div>
            </section>
            
        )
    }
}