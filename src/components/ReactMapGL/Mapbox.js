import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

// import tent02 from '../../tent02.png';
import tent01 from '../../tent01.svg';

function Mapbox(props) {
  console.log('INSIDE MAPBOX', props);

  const [viewport, setViewport] = useState({
    width: 900,
    height: 400,
    latitude: 39.3563,
    longitude: -96.3543,
    zoom: 3,
  });

  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className='mapContainer'>
      <h2>MAP HERE</h2>
      <ReactMapGL
        {...viewport}
        // HIDE ACCESS TOKEN = process.env.REACT_APP_MAPBOX_TOKEN not working
        mapboxApiAccessToken={
          'pk.eyJ1Ijoia2hyaXNwdW56YWxhbiIsImEiOiJjazk0azhuNXowZHZyM2hvbThiZThnMTg4In0.WqfOYiH8M18koMjFjwZTEg'
        }
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}>
        {props &&
          props.locations.map((loc) =>
            loc.lat && loc.long ? (
              <Marker key={loc.id} latitude={loc.lat} longitude={loc.long}>
                <button
                  className='marker-btn'
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(loc);
                  }}>
                  <img src={tent01} alt='MapMarker' />
                </button>
              </Marker>
            ) : null,
          )}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.lat}
            longitude={selectedPark.long}
            onClose={() => {
              setSelectedPark(null);
            }}>
            <>
              <h5>{selectedPark.park}</h5>
            </>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Mapbox;
