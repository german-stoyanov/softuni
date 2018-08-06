import React,{Component} from 'react'
import Post from './Post'
import Navigation from './Navigation'
import requester from '../infrastructure/requester';

export default class PostList extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }

        this.updateState = this.updateState.bind(this)
    }

    updateState(index){
        let arr = this.state.posts;
        arr.splice(index,1)
        this.setState({posts:arr})
    }

    componentDidMount() {
        requester.get('appdata','posts','basic').then((data)=>this.setState({posts: data}))
    }

    render() {
        return(
            <div>
                <Navigation />
                { this.state.posts.map((p,i)=> <Post key={p._id} updateState={this.updateState} url={p.url} _id={p._id} ect={p._kmd.ect} title={p.title} author={p.author} description={p.description} imageUrl={p.imageUrl} index={i} />) }
            </div>
        )
    }
}