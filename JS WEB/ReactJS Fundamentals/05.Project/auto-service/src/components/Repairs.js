import React,{Component} from 'react';
import requester from '../infrastructure/requester';
import SingleRepairs from './SingleRepairs';
import '../styles/repairs.css'
import notify from '../infrastructure/notify';

export default class Repairs extends Component{
    constructor(props){
        super(props)

        this.state={
            ready: false,
            data: null,
            craftsman: {}
        }

        this.removeR = this.removeR.bind(this)

        this.rendRepairs = this.rendRepairs.bind(this);
    }

    componentDidMount(){
        requester.get('appdata','repairs','master')
            .then((res)=>{
                requester.get('appdata','craftsman','master').then((res)=>{
                    let obj={};
                    res.forEach(element => {
                        obj[element._id] = element.name
                    });
                    this.setState({craftsman: obj})
                    
                })
            this.setState({ready:true,data:res})
        })
    }

    removeR(id){
        console.log(id)
        let data = this.state.data;
        
        let removed = data.filter(x=>x._id===id)[0];
        let index = data.indexOf(removed)
        data.splice(index,1);
        this.setState({data:data})
        requester.remove('appdata',`repairs/${id}`,'master').then((res)=>{
            requester.get('appdata',`craftsman/${removed.craftsman}`,'kinvey').then((res)=>{
                console.log(res)
                let index = res.repairsMade.indexOf(id);
                let data = res;
                data.repairsMade.splice(index,1);
                requester.update('appdata',`craftsman/${removed.craftsman}`,'master',data).then((res)=>{
                    notify('success','Repair deleted successfully')
                })
            })
            
            
        })
    }

    rendRepairs(){
        let data = this.state.data;
        let obj = this.state.craftsman
        data = data.map(x=><SingleRepairs key={x._id} removeR={this.removeR} craftsmanName={obj} {...x}/>)
        if(data.length===0){
            data=<strong>NO REPAIRS</strong>
        }
        return data
    }

    render(){
        if(!this.state.ready){
            return (
                <div id="repairs">
                <div>Loading...</div>
                </div>
                
            )
        }else{
            return(
                <div id="repairs">
                {this.rendRepairs()}
                </div>
            )
        }
    }
}