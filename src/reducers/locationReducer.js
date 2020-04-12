const locationReducer = (state = [], action) => {
  // console.log('locationReducer');
  switch (action.type) {
    case 'LOADING_LOCATIONS':
      return {
        ...state,
        locations: [...state.locations],
        loading: true,
      };
    case 'FETCH_LOCATIONS':
      // debugger;
      console.log(action);
      return { ...state, locations: action.payload };
    default:
      return state;
  }
};

export default locationReducer;
