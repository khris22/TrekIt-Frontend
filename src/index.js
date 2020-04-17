import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
import locationReducer from './reducers/locationReducer';
// import adventureReducer from './reducers/adventureReducer';
// import { combineReducers } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';
// import adventureReducer from './reducers/adventureReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//   locationReducer,
//   adventureReducer
// });

const store = createStore(
  // rootReducer,
  locationReducer,
  // adventureReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
