import React, { Component } from "react";

class GoogleMap extends Component {
  /* Lifecycle method */
  componentDidMount() {
    /* This line of code is how we get a new instance of google maps */
    /* Google Maps will take a reference to where we want to render the map
         */
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
