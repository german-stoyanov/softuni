import React,{Component} from 'react'
import requester from '../infrastructure/requester';
import SingleCraftsman from './SingleCraftsman';
import '../styles/craftsman.css'

export default class Craftsman extends Component{
    constructor(props){
        super(props)

        this.state={
            craftsman: []
        }

        this.rendCrafts = this.rendCrafts.bind(this)
    }

    componentDidMount(){
        
        console.log(this.props.match.params.id)
        requester.get('appdata','craftsman','master')
            .then((res)=>{
                let data = res;
                console.log('tuk')
                if(this.props.match.params.id!=="all"){
                    let removed = data.filter((x)=>x._id===this.props.match.params.id)[0]
                    let index = data.indexOf(removed);
                    data.splice(index,1);
                    data.unshift(removed)
                }
                this.setState({craftsman: data})
            })
    }

    rendCrafts(){
        let data = this.state.craftsman;
        data = data.map(x=> <SingleCraftsman key={x._id} {...x}/>)
        return data
    }

    render(){
        return(
        <div id="craftsmans">
            {this.rendCrafts()}
        </div>
        )
    }
}