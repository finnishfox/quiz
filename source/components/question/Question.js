import React from 'react';
import { Link } from 'react-router-dom';
import quizes from '../../js/quizes';
import store from '../../js/root';
import { setResult } from '../../actions/actions';
import { findQuizById, getQuizIcon, getQuizTitle, getQuestionCount } from '../../common/common';
import { loadState, saveState } from '../../localStorage/localStorage';
import './question.scss';

class Question extends React.Component {
  static getQuestionTitle(question) {
    return question.question;
  }

  static getCorrectAnswers(question) {
    return question.correctAnswerIndex;
  }

  static diff(a, b) {
    return a.filter(i => b.indexOf(i) < 0);
  }

  constructor() {
    super();

    this.next = this.next.bind(this);
    this.check = this.check.bind(this);
    this.submit = this.submit.bind(this);
    this.findQuestionById = this.findQuestionById.bind(this);
    this.setResult = this.setResult.bind(this);

    this.quizId = store.getState().quizId;
    this.quiz = findQuizById(quizes, this.quizId);
    this.questionCount = getQuestionCount(this.quiz);
    this.redirectToResult = false;

    let questionId;
    const persistedState = loadState('question');
    if (persistedState !== undefined) {
      questionId = persistedState.questionId;
      if (persistedState.isSubmitted) {
        if (questionId + 1 < this.questionCount) {
          questionId += 1;
        } else {
          this.redirectToResult = true;
        }
        saveState({
          ...loadState('question'),
          ...{ questionId, isSubmitted: false },
        }, 'question');
      }
    } else {
      questionId = 0;
      saveState({
        questionId, isSubmitted: false,
      }, 'question');
    }

    this.state = {
      isSubmitted: false,
      isSubmitDisabled: true,
      questionId,
      isLast: false,
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  componentWillUnmount() {
    localStorage.removeItem('question');
  }


  setResult(result) {
    store.dispatch(setResult(this.quizId, result));
  }


  next() {
    this.setState(
      { questionId: this.state.questionId + 1, isSubmitted: false, isSubmitDisabled: true },
      () => {
        saveState({
          ...loadState('question'),
          ...{ questionId: this.state.questionId, isSubmitted: this.state.isSubmitted },
        }, 'question');
      });
    document.querySelectorAll('.question__input').forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.disabled = false;
      checkbox.classList.remove(
        'question__input--correct',
        'question__input--wrong',
      );
    });
  }

  findQuestionById(id) {
    return this.quiz.questions.find(x => x.id === id);
  }

  check() {
    if (document.querySelectorAll('.question__input:checked').length > 0) {
      this.setState({ isSubmitDisabled: false });
    } else {
      this.setState({ isSubmitDisabled: true });
    }
  }


  submit(question) {
    if (this.state.questionId + 1 === this.questionCount) {
      this.setState({ isLast: true });
    }

    const checkboxes = document.querySelectorAll('.question__input');
    const checked = [];
    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].disabled = true;
      if (checkboxes[i].checked) {
        checked.push(i);
      }
    }

    let correctAnswers = Question.getCorrectAnswers(question);
    if (!Array.isArray(correctAnswers)) {
      correctAnswers = Array.of(correctAnswers);
    }

    if (checked.length === correctAnswers.length &&
      checked.every((v, i) => v === correctAnswers[i])) {
      this.setResult(store.getState().quizes.find(x => x.quizId === this.quizId).result + 1);
    }

    correctAnswers.forEach((answer) => {
      checkboxes[answer].classList.add('question__input--correct');
    });

    const wrongChecked = Question.diff(checked, correctAnswers);
    wrongChecked.forEach((checkbox) => {
      checkboxes[checkbox].classList.add('question__input--wrong');
    });

    this.setState({ isSubmitted: true }, () => {
      saveState({ ...loadState('question'), ...{ isSubmitted: this.state.isSubmitted } }, 'question');
    });
  }


  render() {
    if (this.redirectToResult) {
      if (process.env.NODE_ENV === 'prod') {
        window.location.hash = '/result';
      } else {
        window.location.href = '/result';
      }
      localStorage.removeItem('question');
      return null;
    }


    const question = this.findQuestionById(this.state.questionId);

    let button = null;
    if (this.state.isSubmitted) {
      if (this.state.isLast) {
        button = <Link to="/result" role="button" className="question__button">Show results</Link>;
      } else {
        button = <button type="button" className="question__button" onClick={this.next}>Next</button>;
      }
    } else {
      button = (<button
        type="button"
        disabled={this.state.isSubmitDisabled}
        className="question__button"
        onClick={() => this.submit(question)}
      >
        Submit</button>);
    }

    return (
      <div className="question">
        <img className="quiz__icon" src={`images/${getQuizIcon(this.quiz)}`} alt="quiz icon" />
        <h2 className="quiz__title">{getQuizTitle(this.quiz)}</h2>
        <p className="quiz__questions-count">Question {this.state.questionId + 1}/{this.questionCount}</p>
        <div
          className="question__title language-javascript"
          dangerouslySetInnerHTML={{ __html: Question.getQuestionTitle(question) }}
        />
        <form action="/validate/">
          {question.answers.map((option, i) => (<div key={i}>
            <input type="checkbox" className="question__input" id={`ans${i}`} onClick={this.check} />
            <label className="question__answer" htmlFor={`ans${i}`}>{option}</label>
          </div>))}
        </form>

        {button}
      </div>
    );
  }
}

export default Question;

