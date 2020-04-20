export const fetchLocations = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/locations')
      .then((resp) => resp.json())
      .then((locationsData) => {
        dispatch({ type: 'FETCH_LOCATIONS', payload: locationsData });
      });
  };
};
export const addLocation = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((newLocationData) => {
        dispatch({ type: 'ADD_LOCATION', payload: newLocationData });
      });
  };
};

export const deleteLocation = (locId) => {
  console.log('Inside Action');
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/locations/${locId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((location) =>
        dispatch({ type: 'DELETE_LOCATION', payload: location }),
      );
  };
};
