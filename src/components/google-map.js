import React, { Component } from 'react';

export default class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            center: {lat: this.props.lat, lng: this.props.long},
            zoom: 12
        });
    }

    render() {
        return (
            <div ref="map" />
        );
    }
}