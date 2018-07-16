import React,{Component} from 'react';
import requester from '../infrastructure/requester';
import SingleComment from './SingleComment'

export default class Comments extends Component{

    constructor(props){
        super(props)

        this.state={
            comments: []
        }

        this.rendComments = this.rendComments.bind(this)
    }

    componentDidMount(){
        requester.get('appdata','comments','master')
            .then((res)=>{
                this.setState({comments: res})
            })
    }

    rendComments(){
        let comments = this.state.comments;
        console.log(comments)
        comments = comments.map(c=> <SingleComment {...c}/>)
        console.log(comments)
        return comments
    }

    render(){
        return(
            <div id="comments">
            {this.rendComments()}
            </div>
        )
    }
}