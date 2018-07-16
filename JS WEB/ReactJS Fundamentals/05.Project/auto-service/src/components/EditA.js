import React,{Component} from 'react';
import notify from '../infrastructure/notify';
import requester from '../infrastructure/requester'

export default class EditA extends Component{
    constructor(props){
        super(props)

        this.state={
            current: null,
            ready: false
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
        console.log(this.state)
        requester.update('appdata', `accessories/${this.state.current._id}`, 'kinvey', this.state.current).then((res)=>{
             notify('success','Accessory edited successfully!');
             this.props.history.push('/accessories')
        }).catch((err)=>{
            console.log(err);
            notify('error','Form Validation Failed!');
        })
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        requester.get('appdata',`accessories/${id}`,'master')
            .then((res)=>{
                console.log(res)
                this.setState({current:res,ready: true})
            })
    }

    render(){
        if(this.state.ready===false){
            return <div>Loading...</div>
        }else{
            return(
            <form id="AForm" onSubmit={this.handleFormSubmit}>
            <h2>Add Accessory</h2>
            <label>Title:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.title} name="title" type="text" />
            <br/>
            <label>Description:</label>
            <br />
            <textarea onChange={this.handleChange} value={this.state.current.description} name="description" type="text" />
            <br />
            <label>ImageUrl:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.imageUrl} name="imageUrl" type="text" />
            <br />
            <label>Price:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.price} name="price" type="number" />
            <br />
            <label>Count:</label>
            <br />
            <input onChange={this.handleChange} value={this.state.current.number} name="number" type="number" />
            <br />
            <input id="btnAddA" type="submit" value="Edit Accessory" />
          </form>
            )
        }
    }
}