import React,{Component} from 'react'
import observerService from '../infrastructure/observerService'
import requester from '../infrastructure/requester'

export default class Edit extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            imageUrl: '',
            description: '',
            url: ''
        }


    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        
        requester.update('appdata',`posts/${this.props.match.params.id}`,'kinvey',this.state).then((res)=>{observerService.trigger(observerService.events.notification,{type:'success',message:"edit successfully"}) 
        this.props.history.push('/catalog') }
        )
    }

    componentDidMount(){
        
        requester.get('appdata',`posts/${this.props.match.params.id}`,'kinvey').then((data)=>this.setState({...data}))
    }

    render(){
        
        return(
            <section id="viewPostEdit">
            <div class="submitArea">
                <h1>Edit Post</h1>
                <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                <form id="editPostForm" class="submitForm" onSubmit={this.handleSubmit}>
                    <label>Link URL:</label>
                    <input name="url" onChange={this.handleChange} type="text" value={this.state.url} />
                    <label>Link Title:</label>
                    <input onChange={this.handleChange} name="title" type="text" value={this.state.title} />
                    <label>Link Thumbnail Image (optional):</label>
                    <input onChange={this.handleChange} name="imageUrl" type="text" value={this.state.imageUrl} />
                    <label>Comment (optional):</label>
                    <textarea onChange={this.handleChange} name="description" value={this.state.description}></textarea>
                    <input type="submit" value="Edit Post" />
                </form>
            </div>
        </section>
        )
    }
}