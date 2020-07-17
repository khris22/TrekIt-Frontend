const locationReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATIONS':
      return action.payload;

    case 'ADD_LOCATION':
      return [...state, action.payload];

    case 'DELETE_LOCATION':
      return state.filter((loc) => loc.id !== action.payload.id);

    case 'ADD_ADVENTURE':
      let addAdvOnlocations = state.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return addAdvOnlocations;

    case 'DELETE_ADVENTURE':
      let deletedAdvOnLocation = state.locations.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return deletedAdvOnLocation;

    case 'UPDATE_ADVENTURE':
      let locationsWithEditedAdventure = state.locations.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return locationsWithEditedAdventure;

    default:
      return state;
  }
};

export default locationReducer;
