import React from 'react';
import ReactDOM from 'react-dom';
import Quizes from "../quizes/Quizes";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="app__title">Quizes</h1>
        <Quizes/>
      </div>
    );
  }
}

export default App;
