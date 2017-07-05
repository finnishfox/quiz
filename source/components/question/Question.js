import React from 'react';
import {quizes} from '../../js/quizes';
import {Link} from 'react-router';
import store from '../../store/index';
import {setResult} from '../../actions/actions';
import {findQuizById,findQuestionById,getQuizIcon,getQuizTitle,getQuestionCount} from '../../common/common';
class Question extends React.Component {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.submit = this.submit.bind(this);
    this.findQuestionById = this.findQuestionById.bind(this);
    this.getQuestionTitle = this.getQuestionTitle.bind(this);
    this.getCorrectAnswers = this.getCorrectAnswers.bind(this);
    this.setResult = this.setResult.bind(this);

    this.state = {isSubmitted: false, questionId: 0, isLast: false};

    this.quizId = store.getState().quizId;

  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  findQuestionById(id) {
    let quiz = findQuizById(quizes, this.quizId);
    return quiz.questions.find(x => x.id === id);
  }


  getQuestionTitle(question) {
    return question.question;
  }

  getCorrectAnswers(question) {
    return question.correctAnswerIndex;
  }


  next() {
    this.setState({questionId: this.state.questionId + 1, isSubmitted: false});
    document.querySelectorAll('.question__input').forEach(checkbox => {
      checkbox.checked = false;
      checkbox.disabled = false;
      checkbox.classList.remove("question__input--correct");
      checkbox.classList.remove("question__input--wrong");
    });


  }

  diff(a, b) {
    return a.filter(function (i) {
      return b.indexOf(i) < 0;
    });
  }

  setResult(result) {
    store.dispatch(setResult(this.quizId, result));
  }




  submit(question) {
    let questionCount = getQuestionCount(findQuizById(quizes, this.quizId));
    if (this.state.questionId + 1 === questionCount) {
      this.setState({isLast: true});
    }
    this.setState({isSubmitted: true});
    let checkboxes = document.querySelectorAll('.question__input');
    let checked = [];
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].disabled = true;
      if (checkboxes[i].checked) {
        checked.push(i);
      }
    }

    let correctAnswers = this.getCorrectAnswers(question);
    if (!Array.isArray(correctAnswers)) {
      correctAnswers = Array.of(correctAnswers);
    }

    if (checked.length === correctAnswers.length && checked.every((v, i) => v === correctAnswers[i])) {
      this.setResult(store.getState().quizes.find(x => x.quizId === this.quizId).result + 1);
    }

    correctAnswers.forEach(answer => {
      checkboxes[answer].classList.add("question__input--correct");
    });


    let wrongChecked = this.diff(checked, correctAnswers);
    wrongChecked.forEach(checkbox => {
      checkboxes[checkbox].classList.add("question__input--wrong");
    });

  }


  render() {
    let quiz = findQuizById(quizes, this.quizId);

    let question = this.findQuestionById(this.state.questionId);

    let button = null;
    if (this.state.isSubmitted) {
      if (this.state.isLast) {
        button = <Link to='/source/result' role="button" className="question__button">Show results</Link>
      } else {
        button = <button type="button" className="question__button" onClick={this.next}>Next</button>
      }
    } else {
      button = <button type="button" className="question__button" onClick={() => this.submit(question)}>Submit</button>
    }

    return (
      <div className="question">
        <img className="quiz__icon" src={'images/' + getQuizIcon(quiz)} alt="quiz icon"/>
        <h2 className="quiz__title">{getQuizTitle(quiz)}</h2>
        <p className="quiz__questions-count">Question {this.state.questionId + 1}/{getQuestionCount(quiz)}</p>

        <div className="question__title language-javascript"
             dangerouslySetInnerHTML={{__html: this.getQuestionTitle(question)}}/>
        <form>
          {question.answers.map(function (option, i) {
            return (<div key={i}>
              <input type="checkbox" className="question__input" id={'ans' + i}/>
              <label className="question__answer" htmlFor={'ans' + i}>{option}</label>
            </div>);
          })}

        </form>

        {button}
      </div>


    );
  }
}

export default Question;

