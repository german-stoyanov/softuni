import React,{Component} from 'react';
import requester from '../infrastructure/requester';
import notify from '../infrastructure/notify'

export default class RPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

   

    handleFormSubmit(e) {
        e.preventDefault();
        
        console.log(this.state)
        requester.post('appdata', 'craftsman', 'kinvey', this.state).then((res)=>{
           notify('success','Craftsman added successfully!')
        }).catch((err)=>{
            console.log(err);
            notify('error','Form Validation Failed!');
        })
    }

    render() {
        return (
          <form id="CForm" onSubmit={this.handleFormSubmit}>
            <h2>Add Craftsman</h2>
            <label>Name:</label>
            <br />
            <input onChange={this.handleChange} name="name" type="text" />
            <br/>
            <label>ImageUrl:</label>
            <br />
            <input onChange={this.handleChange} name="imageUrl" type="text" />
            <br />
            <label>Description:</label>
            <br />
            <input onChange={this.handleChange} name="description" type="text" />
            <br />
            <input id="btnAddC" type="submit" value="Add Craftsman" />
          </form>
        );
      }
}