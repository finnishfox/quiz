import React from 'react';
import {quizes} from '../../js/quizes';
import Progress from "../progress/Progress";
import Share from "../share/Share";
import {store} from '../../js/root';
import {findQuizById,getQuizIcon,getQuizTitle,getQuestionCount,countPercentResult} from '../../common/common';
import './result.scss';

import {Link} from 'react-router-dom';

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
          <Progress className="result__progress" progress={countPercentResult(store.getState().quizes.find(x => x.quizId === this.quizId).result,
            getQuestionCount(quiz))}/>
          <Share className="result__share"/>
        </div>

        <Link to='/' className="result__button">Quizes</Link>
      </div>
    );
  }


}

export default Result;