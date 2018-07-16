import React,{Component} from 'react';
import GoogleMaps from './GoogleMaps';
import '../styles/contacts.css'

export default class Contacts extends Component{
    render(){
        return(
            <div id="contacts">
                
               <div className="map">
                <GoogleMaps />
                </div>
                <span>telephone: <strong>0888264710</strong></span>
                <br/>
                <span>e-mail: <strong>german11@abv.bg</strong></span>
            </div>
        )
    }

}