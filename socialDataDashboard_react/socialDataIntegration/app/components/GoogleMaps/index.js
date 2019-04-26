import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const grayStyle = 
[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -30
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#353535"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#656565"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#505050"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#454545"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -40
            },
            {
                "invert_lightness": true
            },
            {
                "gamma": 1.5
            }
        ]
    }
];

class GoogleMaps extends Component {
  static defaultProps = {
      //Here is where we put the JSON data for a place or events location
    center: {
      lat: 56.1304,
      lng: -86.3468
    },
    zoom: 4,
    mapStyle: grayStyle
    
    
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 500, width: '100%', paddingTop: 40, paddingBottom: 40,}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBNcE39mZZRE85k__YlU8h_8tAdPkKhvuM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={56.1304}
            lng={106.3468}
            //text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMaps;