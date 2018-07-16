import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import requester from '../infrastructure/requester';

export default class SingleCraftsman extends Component{
    constructor(props){
        super(props);

        this.rendR = this.rendR.bind(this)
        this.state={
            comment: {value:'',author: sessionStorage.getItem('username')},
            comments: []
        }
        this.addComment = this.addComment.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentDidMount(){
        this.setState({comments: this.props.comments})
    }

    rendR(){
        let data = this.props.repairsMade;
        if(!data){
            data = []
        }
        data = data.map((e,i)=><div><Link key={e} to={`/detailsR/${e}`}>Repair #{i+1}</Link><br/></div>)
        if(data.length===0){
            data = <h2>No repairs made</h2>
        }
        return data
    }

    handleChange(e){
        this.setState({comment: {author: sessionStorage.getItem('username'),value:e.target.value}})
    }
    
    addComment(){
        let com = this.state.comment;
        let arr = this.state.comments;
        if(!arr){
            arr=[]
        }
        arr.push(com)
        console.log(arr)
        this.setState({comments:arr,comment:{value: '',author: sessionStorage.getItem('username')}})
        
        let data = {};
       
        data.comments = arr;
        data.name = this.props.name;
        data.imageUrl = this.props.imageUrl;
        data.repairsMade = this.props.repairsMade;
        data.description = this.props.description;
        requester.update('appdata',`craftsman/${this.props._id}`,'master',data).then((res)=>{
            console.log(res)
        })
    }

    rendB(i,e){
        if(sessionStorage.getItem('username')==='admin'||sessionStorage.getItem('username')===e.author){
            return( <button onClick={()=>this.delete(i)}>Delete</button>)
        } else{
            return null
        }
    }

    rendC(){
        let data = this.state.comments
        if(!data){
            data=[]
        }
        let button = ''
        
        data = data.map((e,i)=><div><span>Comment #{i+1}: "{e.value}" - written by {e.author}</span>{this.rendB(i,e)}</div>)
        if(data.length===0){
            data = <h2>No comments</h2>
        }
        return data
    }

   

    delete(i){
        let data = this.state.comments;
        data.splice(i,1);
        requester.update()
        this.setState({comments:data})
        let obj = {};
        obj.comments = data;
        obj.name = this.props.name;
        obj.imageUrl = this.props.imageUrl;
        obj.repairsMade = this.props.repairsMade;
        obj.description = this.props.description;
        requester.update('appdata',`craftsman/${this.props._id}`,'master',obj).then((res)=>{
            console.log(res)
        })
    }

    rendL(){
        if(sessionStorage.getItem('id')){
            return(
                <div className="write">
                        <h1>Leave a comment</h1>
                        <input value={this.state.comment.value} onChange={this.handleChange}></input>
                        <br/>
                        <button onClick={this.addComment}>Post comment</button>
                    </div>
            )
        }
        else{
            return(
                <div  className="write">
                    <h1>You must login to leave comments</h1>
                </div>
            )
        }
        
    }

    render(){
        return(
            <div id="craftsman">
                <div className="info">
                    <h1>{this.props.name}</h1>
                    <img alt="" src={this.props.imageUrl}></img>
                </div>
                <div className="repairsMade">
                    <h1>Repairs Made</h1>
                    <div className="list">
                        {this.rendR()}
                    </div>
                </div>
                <div className="description">
                    <h1>Description</h1>
                    <div className="d">
                    {this.props.description}
                    </div>
                </div>
                <div className="comments">
                    <h1>Comments</h1>
                    <div className="c">
                    {this.rendC()}
                    </div>
                </div>
                {this.rendL()}
                
            </div>
        )
    }
}