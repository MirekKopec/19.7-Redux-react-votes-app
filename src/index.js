import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './reducer.js';
import { addComment } from './actions.js';
// import { createLogger } from 'redux-logger';
import DevTools from './DevTools';


//const logger = createLogger();

const store = createStore(
  reducer,
  //applyMiddleware(logger)
  DevTools.instrument()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));
store.dispatch(addComment('czwarty komentarz'));
store.dispatch(addComment('piąty komentarz'));
