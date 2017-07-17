import React from 'react';
import {render} from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import quizApp from '../reducers/reducers';
import {loadState, saveState} from '../localStorage/localStorage';
import App from "../components/app/App";


const persistedState = loadState();

export const store = createStore(quizApp, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  saveState(
    store.getState()
  );
});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);




