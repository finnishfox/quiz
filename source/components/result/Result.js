import React from 'react';
import {quizes} from '../../js/quizes';
import Progress from "../progress/Progress";
import {Link} from 'react-router';
import Share from "../share/Share";
import store from '../../store/index';
import {findQuizById,getQuizIcon,getQuizTitle,getQuestionCount,countPercentResult} from '../../common/common';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.quizId = store.getState().quizId;
  }

  render() {
    let quiz = findQuizById(quizes, this.quizId);

    return (
      <div className="result">
        <img className="quiz__icon" src={'images/' + getQuizIcon(quiz)} alt="quiz icon"/>
        <h2 className="quiz__title">{getQuizTitle(quiz)}</h2>
        <div className="result__wrapper">
          <p className="result__title">Your result</p>
          <Progress progress={countPercentResult(store.getState().quizes.find(x => x.quizId === this.quizId).result,
            getQuestionCount(quiz))}/>
          <Share/>
        </div>

        <Link to='/source/' role="button" className="result__button">Quizes</Link>
      </div>
    );
  }


}

export default Result;