import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import Question from '../question/Question';
import Quizes from '../quizes/Quizes';
import Result from '../result/Result';


class App extends React.Component {
  render() {
    let Router = BrowserRouter;
    if (process.env.NODE_ENV === 'prod') {
      Router = HashRouter;
    } else {
      Router = BrowserRouter;
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Quizes} />
          <Route exact path="/quiz" component={Question} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    );
  }
}


export default App;

