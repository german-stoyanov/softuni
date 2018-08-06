import React, {Component} from 'react';

import fetcher from '../../fetcher';



export default class Slider extends Component {
    constructor(props){
        super(props);

        this.state = {
            url: null,
            id: 0
        }


    }

    fetchEpisode = (id)=>{
        fetcher.get(`/episodePreview/${id}`,data => this.setState(data))
    }

    componentDidMount = ()=>{
        this.fetchEpisode(this.state.id)
    }

  

   

    render = () => (
            <section id="slider">
                <img className="button" src="/left.png" title="previous" alt="nav" onClick={()=>this.fetchEpisode(this.state.id-1)}/>
                <div key={this.state.id}>
                <img src={this.state.url} alt="episode" />
                </div>
                <img className="button" src="/right.png" title="previous" alt="nav" onClick={()=>this.fetchEpisode(this.state.id+1)}/>
            </section>
        );
}

