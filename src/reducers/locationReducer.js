const locationReducer = (state = { locations: [] }, action) => {
  switch (action.type) {
    case 'FETCH_LOCATIONS':
      return { ...state, locations: action.payload };

    case 'ADD_LOCATION':
      return { ...state, locations: [...state.locations, action.payload] };

    case 'DELETE_LOCATION':
      let newLocationsArr = state.locations.filter(
        (loc) => loc.id !== action.payload.id,
      );

      return { ...state, locations: newLocationsArr };

    case 'ADD_ADVENTURE':
      let addAdvOnlocations = state.locations.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return { ...state, locations: addAdvOnlocations };

    case 'DELETE_ADVENTURE':
      let deletedAdvOnLocation = state.locations.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return {
        ...state,
        locations: deletedAdvOnLocation,
      };

    case 'UPDATE_ADVENTURE':
      console.log('INSIDE UPDATE ADVENTURE');
      let locationsWithEditedAdventure = state.locations.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return {
        ...state,
        locations: locationsWithEditedAdventure,
      };

    default:
      return state;
  }
};

export default locationReducer;
