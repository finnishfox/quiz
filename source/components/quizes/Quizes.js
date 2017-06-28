import React from 'react';
import Quiz from "../quiz/Quiz";
import {quizes} from '../../js/quizes';


class Quizes extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuizIdChange = this.props.handleQuizIdChange;
  }


  getQuizes() {
    return quizes.map((quiz) => {
      return (<Quiz
        icon={quiz.icon} title={quiz.title} questions={quiz.questions.length} description={quiz.description}
                    key={quiz.id} id={quiz.id}/>);
    })
  }


  render() {
    let quizes = this.getQuizes();
    return (
      <div>
        <h1 className="quizes__title">Quizes</h1>
        <div className="quizes">
          {quizes}
        </div>
      </div>
    );
  }
}

export default Quizes;
