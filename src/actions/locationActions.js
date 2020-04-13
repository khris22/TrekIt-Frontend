export const fetchLocations = () => {
  console.log('INSIDE FETCH LOCATIONS');
  return (dispatch) => {
    // LOADING is causing an error!!!
    // dispatch({ type: 'LOADING_LOCATIONS' });
    fetch('http://localhost:3000/api/v1/locations')
      .then((resp) => resp.json())
      .then((locationsData) => {
        dispatch({ type: 'FETCH_LOCATIONS', payload: locationsData });
      });
  };
};
export const addLocation = (data) => {
  // debugger;
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((newLocationData) => {
        // debugger;
        dispatch({ type: 'ADD_LOCATION', payload: newLocationData });
      });
  };
};
