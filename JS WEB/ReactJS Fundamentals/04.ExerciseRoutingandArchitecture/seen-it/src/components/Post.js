import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import requester from '../infrastructure/requester';

export default class Post extends Component {
    constructor(props){
        super(props)

        this.delete = this.delete.bind(this)
    }

    calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);

        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    delete(){
        console.log(this.props._id)
        requester.remove('appdata',`posts/${this.props._id}`,'kinvey').then((res)=>{
            this.props.updateState(this.props.index)
        })
    }

    render() {
        
        return(<article className="post">
                    <div className="col rank">
                        <span>{this.props.index}</span>
                    </div>
                    <div className="col thumbnail">
                        <a href={this.props.url}>
                            <img src={this.props.imageUrl} />
                        </a>
                    </div>
                    <div className="post-content">
                        <div className="title">
                            <a href={this.props.url}>
                                {this.props.title}
                            </a>
                        </div>
                        <div className="details">
                            <div className="info">
                                submitted {this.calcTime(this.props.ect)} ago by {this.props.author}
                            </div>
                            <div className="controls">
                                <ul>
                                    <Link to={`catalog/${this.props._id}`}>Details</Link>
                                    <Link to={`edit/${this.props._id}`}>Edit</Link>
                                    <button onClick={this.delete}>Delete</button>
                                </ul>
                            </div>

                        </div>
                    </div>
        </article>
        )
    }
} 