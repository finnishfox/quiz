import React from 'react';
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import quizApp from '../reducers/reducers';
import {loadState, saveState} from '../localStorage/localStorage'

const persistedState = loadState();

export const store = createStore(quizApp, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  saveState(
    {
      quizes: store.getState().quizes
    }
  );
});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);




