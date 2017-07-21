import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import quizApp from '../reducers/reducers';
import { loadState, saveState } from '../localStorage/localStorage';
import App from '../components/app/App';

const persistedState = loadState('state');

let enhancer;
if (process.env.NODE_ENV !== 'prod') {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(quizApp, persistedState, enhancer);

export default store;

store.subscribe(() => {
  saveState(
    store.getState(), 'state',
  );
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

