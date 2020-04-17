const locationReducer = (state = { locations: [] }, action) => {
  // console.log('locationReducer');
  switch (action.type) {
    // case 'LOADING_LOCATIONS':
    //   return {
    //     ...state,
    //     locations: [...state.locations],
    //     loading: true,
    //   };
    case 'FETCH_LOCATIONS':
      // debugger;
      console.log(action);
      return { ...state, locations: action.payload };

    case 'ADD_LOCATION':
      // debugger;
      return { ...state, locations: [...state.locations, action.payload] };

    case 'ADD_ADVENTURE':
      let locations = state.locations.map((loc) => {
        if (loc.id === action.payload.id) {
          return action.payload;
        } else {
          return loc;
        }
      });
      return { ...state, locations: locations };
    default:
      return state;
  }
};

export default locationReducer;
