import React from 'react';
import {quizes} from '../../js/quizes';
import Progress from "../progress/Progress";
import {Link} from 'react-router'
import Share from "../share/Share";

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.findQuizById = this.findQuizById.bind(this);
    this.findQuestionById = this.findQuestionById.bind(this);
    this.getQuizIcon = this.getQuizIcon.bind(this);
    this.getQuizTitle = this.getQuizTitle.bind(this);

    this.state = {quizId: 0, result: 0};
  }

  findQuizById(id) {
    return quizes.find(x => x.id === id);
  }

  findQuestionById(id) {
    let quiz = this.findQuizById(this.state.quizId);
    return quiz.questions.find(x => x.id === id);
  }

  getQuizIcon(quiz) {
    return quiz.icon;
  }


  getQuizTitle(quiz) {
    return quiz.title;
  }

  render() {
    let quiz = this.findQuizById(this.state.quizId);

    return (
      <div className="result">
        <img className="quiz__icon" src={'images/' + this.getQuizIcon(quiz)} alt="quiz icon"/>
        <h2 className="quiz__title">{this.getQuizTitle(quiz)}</h2>
        <div className="result__wrapper">
          <p className="result__title">Your result</p>
          <Progress progress={this.state.result}/>
          <Share/>
        </div>

        <Link to='/source/' role="button" className="result__button">Quizes</Link>
      </div>
    );
  }


}

export default Result;