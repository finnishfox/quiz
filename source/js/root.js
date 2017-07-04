// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../components/app/App'
//
// ReactDOM.render(<App />, document.getElementById("root"));
//
//


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(() => {
}, {});


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
