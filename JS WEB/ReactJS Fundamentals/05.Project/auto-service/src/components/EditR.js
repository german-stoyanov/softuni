import React,{Component} from 'react';
import notify from '../infrastructure/notify';
import requester from '../infrastructure/requester'

export default class EditR extends Component{
    constructor(props){
        super(props)

        this.state={
            current: null,
            ready: false,
            options: [],
            craftsman: null,
            crsftsmans: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleChange(e) {
        let current = this.state.current
        current[e.target.name] = e.target.value
        this.setState({
          current: current
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
      
       requester.update('appdata', `repairs/${this.state.current._id}`, 'master', this.state.current).then((res)=>{
            if(res.craftsman===this.state.craftsman){
                
                
            }else{
                let oldCraftman = this.state.crsftsmans.filter(x=>x._id===this.state.craftsman)[0];
                let newMan = this.state.crsftsmans.filter(x=>x._id===this.state.current.craftsman)[0];
                let index = oldCraftman.repairsMade.indexOf(this.state.current._id)
                oldCraftman.repairsMade.splice(index,1)
                if(!newMan.repairsMade){
                    newMan.repairsMade = [];
                }
                newMan.repairsMade.push(this.state.current._id);
                console.log(newMan)
                console.log(oldCraftman)
               requester.update('appdata',`craftsman/${newMan._id}`,'master',newMan).then((res)=>{
                   requester.update('appdata',`craftsman/${oldCraftman._id}`,'master',oldCraftman).then((res)=>{

                   })
               })
            }
            notify('success','Repair edited successfully!');
            this.props.history.push('/repairs')
            
        }).catch((err)=>{
            console.log(err);
            notify('error','Form Validation Failed!');
        })
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        requester.get('appdata',`repairs/${id}`,'kinvey')
            .then((res)=>{
                
                this.setState({current:res,craftsman:res.craftsman})
                requester.get('appdata','craftsman','kinvey')
                    .then((res)=>{
                        this.setState({crsftsmans: res})
                        let firstToShow = res.filter(r=>r._id===this.state.craftsman)[0]
                        let index = res.indexOf(firstToShow)
                        res.splice(index,1);
                        res.unshift(firstToShow)
                        let data = res.map(r=><option key={r._id} value={r._id}>{r.name}</option>)
                        
                        
                        this.setState({ready:true,options:data})
                    })
            })
    }

    render(){
        if(this.state.ready===false){
            return <div>Loading...</div>
        }else{
            return(
                <form id="RForm" onSubmit={this.handleFormSubmit}>
            <h2>Add Repair</h2>
            <label>Car Model:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.cModel} name="cModel" type="text" />
            <br/>
            <label>Description:</label>
            <br />
            <textarea onChange={this.handleChange} value={this.state.current.description} name="description" type="text" />
            <br />
            <label>Before:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.imageUrl} name="imageUrl" type="text" />
            <br />
            <label>After:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.imageUrlA} name="imageUrlA" type="text" />
            <br />
            <label>Price:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.price} name="price" type="number" />
            <br />
            <label>Time Taken:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.time} name="time" type="number" />
            <br />
            <label>Made by:</label>
            <br />
            <select name="craftsman" onChange={this.handleChange}>
                {this.state.options}
            </select>
            <br />
            <input id="btnAddR" type="submit" value="Add Repair" />
          </form>
            )
        }
    }
}