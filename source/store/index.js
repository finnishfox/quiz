import { createStore } from 'redux'
import quizApp from '../reducers/reducers';

let store = createStore(quizApp,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;