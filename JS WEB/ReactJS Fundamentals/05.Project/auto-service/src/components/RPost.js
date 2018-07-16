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

    componentDidMount(){
        requester.get('appdata','craftsman','kinvey')
            .then((res)=>{
                let data = res.map(r=><option key={r._id} value={r._id}>{r.name}</option>)
                this.setState({options: data,craftsman: res[0]._id,craftsmanData: res})
            })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let data = this.state
        let craftsmanData = this.state.craftsmanData
        delete data.options
        delete data.craftsmanData
        
        requester.post('appdata', 'repairs', 'kinvey', this.state).then((res)=>{
           
            let ourCrafter = craftsmanData.filter(x=>x._id===res.craftsman)[0]
            if(!ourCrafter.repairsMade){
                ourCrafter.repairsMade = [];
            }
            ourCrafter.repairsMade.push(res._id)
            requester.update('appdata',`craftsman/${res.craftsman}`,'master',ourCrafter).then(()=>{  notify('success','Repair added successfully!');})
            this.props.history.push('/repairs')
        }).catch((err)=>{
            console.log(err);
            notify('error','Form Validation Failed!');
        })
    }

    render() {
        return (
          <form id="RForm" onSubmit={this.handleFormSubmit}>
            <h2>Add Repair</h2>
            <label>Car Model:</label>
            <br />
            <input onChange={this.handleChange} name="cModel" type="text" />
            <br/>
            <label>Description:</label>
            <br />
            <textarea onChange={this.handleChange} name="description" type="text" />
            <br />
            <label>Before:</label>
            <br />
            <input onChange={this.handleChange} name="imageUrl" type="text" />
            <br />
            <label>After:</label>
            <br />
            <input onChange={this.handleChange} name="imageUrlA" type="text" />
            <br />
            <label>Price:</label>
            <br />
            <input onChange={this.handleChange} name="price" type="number" />
            <br />
            <label>Time Taken:</label>
            <br />
            <input onChange={this.handleChange} name="time" type="number" />
            <br />
            <label>Made by:</label>
            <br />
            <select name="craftsman" onChange={this.handleChange}>
                {this.state.options}
            </select>
            <br />
            <input id="btnAddR" type="submit" value="Add Repair" />
          </form>
        );
      }
}