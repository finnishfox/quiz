import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../components/app/App";
import Question from "../components/question/Question";


export const routes = (
  <div>
    <Route path='/source/index.html' component={App}/>
    <Route path='/source/quiz' component={Question}/>
  </div>
);