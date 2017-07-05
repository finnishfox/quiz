import React from 'react';
import Share from "../share/Share";
import Progress from "../progress/Progress";
import {Link} from 'react-router';
import {setQuizId,addQuiz} from '../../actions/actions';
import store from '../../store/index';
import {findQuizById,getQuestionCount,countPercentResult} from '../../common/common';
import {quizes} from '../../js/quizes';


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.startQuiz = this.startQuiz.bind(this);

  }


  toggleOverlay(e) {
    const overlay = e.currentTarget.parentElement.querySelector('.quiz__overlay');
    overlay.classList.toggle('quiz__overlay--open');
    e.currentTarget.classList.toggle('quiz__toggle-button--open');
  }

  startQuiz(e) {
    store.dispatch(setQuizId(this.props.id));
    store.dispatch(addQuiz(this.props.id));
  }


  render() {
    if (store.getState().quizes.find(x => x.quizId === this.props.id) === undefined) {
      return (
        <div className="quiz">
          <img className="quiz__icon" src={'images/' + this.props.icon} alt="quiz icon"/>
          <h2 className="quiz__title">{this.props.title}</h2>
          <p className="quiz__questions-count">{this.props.questions} questions</p>
          <p className="quiz__description">{this.props.description}</p>
          <Link to='/source/quiz' role="button" className="quiz__button" onClick={this.startQuiz}>Start</Link>
        </div>
      );
    }



    return (
      <div className="quiz">
        <button className="quiz__toggle-button" onClick={this.toggleOverlay}/>
        <img className="quiz__icon" src={'images/' + this.props.icon} alt="quiz icon"/>
        <h2 className="quiz__title">{this.props.title}</h2>
        <p className="quiz__questions-count">{this.props.questions} questions</p>
        <Progress progress={countPercentResult(store.getState().quizes.find(x => x.quizId === this.props.id).result,
          getQuestionCount(findQuizById(quizes,this.props.id)))}/>
        <div className="quiz__overlay">
          <Link to='/source/quiz' role="button" className="quiz__button quiz__button--v-centered"
                onClick={this.startQuiz}>Try again</Link>
          <Share/>
        </div>
      </div>
    );


  }
}

export default Quiz;

