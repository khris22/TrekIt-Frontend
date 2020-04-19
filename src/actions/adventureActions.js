export const addAdventure = (adventure, locationId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/locations/${locationId}/adventures`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adventure),
    })
      .then((resp) => resp.json())
      .then((location) => {
        dispatch({ type: 'ADD_ADVENTURE', payload: location });
      });
  };
};

export const deleteAdventure = (params) => {};
