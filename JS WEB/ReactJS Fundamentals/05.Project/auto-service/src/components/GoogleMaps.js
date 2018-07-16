import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { typography } from '@material-ui/core/styles';
const imgSliven = `http://www.autoservice-nikolov.com/images/slide1.jpg`;
const imgPlovdiv = `https://autobox.bg/media/stenik_shop/shop/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/burgas1.jpg`;
const desSliven = 'Auto-Service Sliven. Worktime: 9.00-20.00';
const desPlovdiv =  'Auto-Service Plovdiv. Worktime: 24/7';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      activeImg: '',
      des: ''
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
      
      let img=''
      let des = ''  
      if(props.name==='Sliven'){
          des = desSliven
            img=imgSliven
      }else{
          des = desPlovdiv
          img=imgPlovdiv
      }
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      activeImg: img,
      des: des
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 7.0 }
        
        initialCenter = {{ lat: 42.749167, lng: 25.236227 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 42.680639, lng: 26.324729 }}
          name = { 'Sliven' }
        />
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Gero lives Here' }
          
          position = {{ lat: 42.148087, lng: 24.737028 }}
          name = { 'Plovdiv' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Auto-Service - {this.state.selectedPlace.name}
            </Typography>
            <Typography
              component = 'p'
            >
            <div id="maps">
              <img src={this.state.activeImg} alt=""/>
            </div>
            <div id="maps1">
            Description: {this.state.des}
            </div>
            
             
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDRMYZYq7k_NyUQ4CvnnGieKqTB-mGAFi8'
})(GoogleMapsContainer)