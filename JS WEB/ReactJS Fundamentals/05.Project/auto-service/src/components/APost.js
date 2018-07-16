import React,{Component} from 'react';
import requester from '../infrastructure/requester';
import notify from '../infrastructure/notify'

export default class APost extends Component {
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
        requester.post('appdata', 'accessories', 'kinvey', this.state).then((res)=>{
             notify('success','Accessory added successfully!');
             this.props.history.push('/accessories')
        }).catch((err)=>{
            console.log(err);
            notify('error','Form Validation Failed!');
        })
    }

    render() {
        return (
          <form id="AForm" onSubmit={this.handleFormSubmit}>
            <h2>Add Accessory</h2>
            <label>Title:</label>
            <br />
            <input onChange={this.handleChange} name="title" type="text" />
            <br/>
            <label>Description:</label>
            <br />
            <textarea onChange={this.handleChange} name="description" type="text" />
            <br />
            <label>ImageUrl:</label>
            <br />
            <input onChange={this.handleChange} name="imageUrl" type="text" />
            <br />
            <label>Price:</label>
            <br />
            <input onChange={this.handleChange} name="price" type="number" />
            <br />
            <label>Count:</label>
            <br />
            <input onChange={this.handleChange} name="number" type="number" />
            <br />
            <input id="btnAddA" type="submit" value="Add Accessory" />
          </form>
        );
      }
}