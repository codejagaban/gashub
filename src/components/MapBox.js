import React, { Component, Fragment } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZWt5ZCIsImEiOiJjazZxazBzeXowMXJvM3NuMW5pc3R0YTRlIn0.798H93rU-1ikw0jJV1HgCQ';
class MapBox extends Component {
    constructor(props) {

        super(props)
    }


    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/codekyd/ck6xowui21ty81ipb5i994bc7',
            center: [6, 6],
            zoom: 7.7,
            bearing: 27,
            pitch: 45,


        });
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl(),'top-left');



        map.on('style.load', () => {
            map.rotateTo(270.0, {
                duration: 20000
            });
        })



        var chapters = {
            'intro': {
                bearing: 360,
                center: [6.5, 6],
                zoom: 8.1,
                pitch: 20
            },
            '2ndPage': {
                duration: 6000,
                center: [5.8, 5.67983],
                bearing: 150,
                zoom: 8.3,
                pitch: 0
            },
            '3rdPage': {
                bearing: 0.3,
                center: [6, 5.9938],
                zoom: 8.3,
                speed: 0.2,
                pitch: 80
            }, 
           
        };

        map.addSource('bunkering', {
            type: 'geojson',
            data: './data/bunkering.geojson'
          });

// add markers to map
bunkering.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // // make a marker for each feature and add to the map
    // new mapboxgl.Marker(el)
    //   .setLngLat(marker.geometry.coordinates)
    //   .addTo(map);
  });

//   new mapboxgl.Marker(el)
//   .setLngLat(marker.geometry.coordinates)
//   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//     .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
//   .addTo(map);


        // On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
    }
    };

    var activeChapterName = 'intro';
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;
        
        map.flyTo(chapters[chapterName]);
        
        document.getElementById(chapterName).setAttribute('class', 'active');
        document.getElementById(activeChapterName).setAttribute('class', '');
        
        activeChapterName = chapterName;
    }
    
    function isElementOnScreen(id) {
        var element = document.getElementById(id);
        var bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }





    }
    render() {
        const mapStyle = {
            position: 'fixed',
            width: '70%',
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


export default MapBox