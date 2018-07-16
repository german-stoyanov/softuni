import requester from '../infrastructure/requester';
import SingleAccessory from './SingleAccessory'
import React,{Component} from 'react';
import '../styles/accessory.css'
import notify from '../infrastructure/notify';

export default class Accessories extends Component{
    constructor(props){
        super(props)

        this.state={
            data: []
        }

        this.rendAcces = this.rendAcces.bind(this)
        this.removeA = this.removeA.bind(this)
    }

    componentDidMount(){
        requester.get('appdata','accessories','master')
            .then((res)=>{
                this.setState({data: res})
            })
    }

    removeA(id){
        console.log(id)
        let data = this.state.data;
        let removed = data.filter(x=>x._id===id)[0]
        let index = data.indexOf(removed);
        data.splice(index,1)
        this.setState({data:data})
    
       requester.remove('appdata',`accessories/${id}`,'kinvey')
            .then((res)=>{
                notify('success','Accessory deleted successfully')
            })
    }

    rendAcces(){
        let data = this.state.data;
        
        data = data.map(a=><SingleAccessory removeA={this.removeA} key={a._id} {...a}/>)
        if(data.length===0){
            return(
                <strong>NO ACCESSORIES AVAILABLE!</strong>
            )
        }
        return data
    }

    render(){
        return(
            <div id="accessories">
            {this.rendAcces()}
            </div>
        )
    }
}