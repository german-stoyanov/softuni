import React,{Component} from 'react'
import requester from '../infrastructure/requester';
import observerService from '../infrastructure/observerService';

export default class FormPost extends Component {
    constructor(props){
        super(props)

        this.state = {postData: null}
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let posts = this.state
        posts.author = sessionStorage.getItem('username')
        posts._acl = {}
        posts._acl.gr = true
        requester.post('appdata','posts','kinvey',posts).then((res)=>{observerService.trigger(observerService.events.notification,{type:'success',message:"Successnammebeb"}) 
        this.props.history.push('/catalog') }
        )
    }

    render(){
        return(
            <div  class="submitArea">
                <h1>Create Post</h1>
                <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                <form id="createPostForm" class="submitForm" onSubmit={this.handleSubmit}>
                    <label>Link URL:</label>
                    <input name="url" onChange={this.handleChange} type="text" />
                    <label>Link Title:</label>
                    <input name="title" onChange={this.handleChange} type="text" />
                    <label>Link Thumbnail Image (optional):</label>
                    <input name="imageUrl" onChange={this.handleChange} type="text" />
                    <label>Description (optional):</label>
                    <textarea name="description" onChange={this.handleChange}></textarea>
                    <input type="submit" value="Create Post" />
                </form>
            </div>
            )
        
    }
}