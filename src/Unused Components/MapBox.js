import React from 'react';
// import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2hyaXNwdW56YWxhbiIsImEiOiJjazk0azhuNXowZHZyM2hvbThiZThnMTg4In0.WqfOYiH8M18koMjFjwZTEg';

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -96.3543,
      lat: 39.3563,
      zoom: 3.18,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{' '}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

// export default MapBox;
const mapStateToProps = (state) => ({
  locations: state.locations,
  // loading: state.loading,
});

export default connect(mapStateToProps)(MapBox);
