import React from 'react';
import Quiz from '../quiz/Quiz';
import quizes from '../../js/quizes';
import './quizes.scss';


class Quizes extends React.Component {
  static getQuizes() {
    return quizes.map(quiz => (<Quiz
      icon={quiz.icon}
      title={quiz.title}
      questions={quiz.questions.length}
      description={quiz.description}
      key={quiz.id}
      id={quiz.id}
    />));
  }


  render() {
    const allQuizes = Quizes.getQuizes();
    return (
      <div>
        <h1 className="quizes__title">Quizes</h1>
        <div className="quizes">
          {allQuizes}
        </div>
      </div>
    );
  }
}

export default Quizes;
