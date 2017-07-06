import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../components/app/App";
import Question from "../components/question/Question";
import Quizes from "../components/quizes/Quizes";
import Result from "../components/result/Result";


export const routes = (
  <div>
    <Route path='/source' component={App}>
      <IndexRoute component={Quizes} />
      <Route path='/source/quizes' component={Quizes}/>
      <Route path='/source/quiz' component={() => (<Question/>)}/>
      <Route path='/source/result' component={Result}/>
    </Route>
  </div>
);