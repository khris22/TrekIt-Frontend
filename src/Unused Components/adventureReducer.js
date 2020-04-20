// UNUSED COMPONENT
// Still firguring out combine reducers

const adventureReducer = (state = { adventures: [] }, action) => {
  switch (action.type) {
    case 'ADD_ADVENTURE':
      return { ...state, adventures: [...state.adventures, action.payload] };

    default:
      return state;
  }
};

export default adventureReducer;
