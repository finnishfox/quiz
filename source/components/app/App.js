import React from 'react';
import Quizes from "../quizes/Quizes";
import { Link } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Quizes/>
      </div>
    );
  }
}

export default App;
