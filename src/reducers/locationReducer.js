const locationReducer = (state = { locations: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_LOCATIONS':
      return {
        ...state,
        locations: [...state.locations],
        loading: true,
      };
    case 'FETCH_LOCATIONS':
      return { ...state, locations: action.payload };
    default:
      return state;
  }
};

export default locationReducer;
