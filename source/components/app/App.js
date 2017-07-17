import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Question from "../question/Question";
import Quizes from "../quizes/Quizes";
import Result from "../result/Result";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path='/' component={Quizes}/>
          <Route exact path='/quiz' component={Question}/>
          <Route exact path='/result' component={Result}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;

