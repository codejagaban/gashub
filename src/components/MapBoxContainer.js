import React, { Component, Fragment } from 'react';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFydmlzLXN0dWRpbyIsImEiOiJjazZycDI2eDIwNWFhM2hxcGRuc3Jobjg3In0.O1d99h9xqPDZxdTZrPLr3A';
 class Map extends Component {
    constructor(props) {

        super(props)
    }


    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style:  'mapbox://styles/mapbox/streets-v11',
            center: [6, 6],
            zoom: 1,
            minZoom: 8,
            maxZoom: 15,
            // pitch: 0,
            // bearing: 0.13,
            pitch: 45,
            bearing: -17.6,
            antialias: true

            });
            // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('style.load', () => {
  



})


    }
    render() {
        const mapStyle = {
            position: 'fixed',
            width: '70%',
            left: '30%',
            top: 0,
            bottom: 0,
          };

        

        return (
            <Fragment>
                <div>
                    
        <div style={mapStyle} ref={(el) => { this.mapContainer = el; }} />
                </div>
                
                
            </Fragment>
        )
    }
}


export default Map
