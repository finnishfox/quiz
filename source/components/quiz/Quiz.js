import React from 'react';
import { Link } from 'react-router-dom';
import Share from '../share/Share';
import Progress from '../progress/Progress';
import { setQuizId, addQuiz } from '../../actions/actions';
import store from '../../js/root';
import { findQuizById, getQuestionCount, countPercentResult } from '../../common/common';
import quizes from '../../js/quizes';
import './quiz.scss';

class Quiz extends React.Component {
  static toggleOverlay(event) {
    const element = event.currentTarget;
    const overlay = element.parentElement.querySelector('.quiz__overlay');
    overlay.classList.toggle('quiz__overlay--open');
    element.classList.toggle('quiz__toggle-button--open');
  }

  constructor() {
    super();
    this.startQuiz = this.startQuiz.bind(this);
  }

  startQuiz() {
    store.dispatch(setQuizId(this.props.id));
    store.dispatch(addQuiz(this.props.id));
  }


  render() {
    if (store.getState().quizes.find(x => x.quizId === this.props.id) === undefined) {
      return (
        <div className="quiz">
          <img className="quiz__icon" src={`images/${this.props.icon}`} alt="quiz icon" />
          <h2 className="quiz__title">{this.props.title}</h2>
          <p className="quiz__questions-count">{this.props.questions} questions</p>
          <p className="quiz__description">{this.props.description}</p>
          <Link to="/quiz" role="button" className="quiz__button" onClick={this.startQuiz}>Start</Link>
        </div>
      );
    }


    return (
      <div className="quiz">
        <button className="quiz__toggle-button" onClick={Quiz.toggleOverlay} />
        <img className="quiz__icon" src={`images/${this.props.icon}`} alt="quiz icon" />
        <h2 className="quiz__title">{this.props.title}</h2>
        <p className="quiz__questions-count">{this.props.questions} questions</p>
        <Progress progress={
          countPercentResult(store.getState().quizes.find(x => x.quizId === this.props.id).result,
            getQuestionCount(findQuizById(quizes, this.props.id)))}
        />
        <div className="quiz__overlay">
          <Link
            to="/quiz"
            role="button"
            className="quiz__button quiz__button--vertically-centered"
            onClick={this.startQuiz}
          >Try again</Link>
          <Share />
        </div>
      </div>
    );
  }
}

export default Quiz;

