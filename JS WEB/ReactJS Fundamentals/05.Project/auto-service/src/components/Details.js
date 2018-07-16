import React,{Component} from 'react'
import requester from '../infrastructure/requester';

export default class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            ready: false,
            accessory: null
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        requester.get('appdata',`accessories/${id}`,'master')
            .then((res)=>{
                this.setState({accessory:res,ready: true})
            })
    }


    render(){
        if(this.state.ready===false){
            return <div>Loading...</div>
        }
        else{
            return(
            
                <div className="DetailsAccessory">
                <h2>Name: {this.state.accessory.title}</h2>
                <img src={this.state.accessory.imageUrl}/>
                <br />
                <span>In Stock - {this.state.accessory.number}</span>
                <br/>
                <h3>Price: {this.state.accessory.price}</h3>
                <span><strong>Description:</strong> {this.state.accessory.description}</span>
                </div>
            )
        }
        
    }
} 