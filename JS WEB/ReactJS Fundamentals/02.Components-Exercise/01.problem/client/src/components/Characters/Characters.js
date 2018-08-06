import React from 'react';

import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROOSTER_ENPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

export default class Characters extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            clickedImage: {url: null,bio:null,id:null,name:null},
            images: []
        }

        this.changeClicked = (i)=>{
            this.setState({clickedImage:i})
        }
    }

   

    componentDidMount = ()=>{
        console.log('tuk')
        fetcher.get('/roster',data=>this.setState({images: data}))
    }

    render = () => (
            <div>
                <Rooster images={this.state.images} updateC={this.changeClicked}/>
                <Details info={this.state.clickedImage}/>
            </div>
        )
}