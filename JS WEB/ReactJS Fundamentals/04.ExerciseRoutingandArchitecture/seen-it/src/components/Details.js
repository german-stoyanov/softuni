import React,{Component} from 'react'
import requester from '../infrastructure/requester';

export default class Details extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: null,
            imageUrl: null,
            description: null,

        }


    }

    componentDidMount(){
        
        requester.get('appdata',`posts/${this.props.match.params.id}`,'kinvey').then((data)=>this.setState({...data}))
    }

    render(){
        console.log(this.state)
        return(
            <section id="viewPostDetails">
            <article id="postDetails" class="post">
                <div class="col thumbnail">
                   <img src={this.state.imageUrl} />
                </div>
                <div class="post-content">
                    <div class="title">
                        <strong>{this.state.title}</strong>
                    </div>
                    <div class="details">
                    {this.state.description}
                    </div>
                </div>
            </article>

        
            <div class="submitArea">
                <h1>Post Comment</h1>
                <form id="createCommentForm" class="submitForm">
                    <label>Content:</label>
                    <input id="cmtContent" name="content" type="text" />
                    <input type="submit" value="Post Comment" />
                </form>
            </div>
            <div id="allComments" class="comments">
                <article class="comment">
                    <div class="comment-content">
                        Comment 1
                    </div>
                    <a href="#" class="action">[Delete]</a>
                </article>
                <article class="comment">
                    <div class="comment-content">
                        Comment 2
                    </div>
                    <a href="#" class="action">[Delete]</a>
                </article>

                <article class="comment">
                    <div class="comment-content">
                        Comment 3
                    </div>
                    <a href="#" class="action">[Delete]</a>
                </article>
            </div>
        </section>
        )
    }
}