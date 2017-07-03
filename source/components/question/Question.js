import React from 'react';
import {quizes} from '../../js/quizes';
import {Link} from 'react-router'


class Question extends React.Component {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.submit = this.submit.bind(this);
    this.findQuizById = this.findQuizById.bind(this);
    this.findQuestionById = this.findQuestionById.bind(this);
    this.getQuizIcon = this.getQuizIcon.bind(this);
    this.getQuizTitle = this.getQuizTitle.bind(this);
    this.getQuestionCount = this.getQuestionCount.bind(this);
    this.getQuestionTitle = this.getQuestionTitle.bind(this);
    this.getCorrectAnswers = this.getCorrectAnswers.bind(this);

    this.state = {isSubmitted: false, quizId: 0, questionId: 4, result: 0, isLast: false};

  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
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

  getQuestionCount(quiz) {
    return quiz.questions.length;
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
      checkbox.classList.remove("question__input--correct");
      checkbox.classList.remove("question__input--wrong");
    });


  }

  diff(a, b) {
    return a.filter(function (i) {
      return b.indexOf(i) < 0;
    });
  }


  submit(question) {
    if (this.state.questionId + 1 === this.getQuestionCount(this.findQuizById(this.state.quizId))) {
      this.setState({isLast: true});
    }
    this.setState({isSubmitted: true});
    let checkboxes = document.querySelectorAll('.question__input');
    let checked = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checked.push(i);
      }
    }

    let correctAnswers = this.getCorrectAnswers(question);
    if (!Array.isArray(correctAnswers)) {
      correctAnswers = Array.of(correctAnswers);
    }

    if (checked.length === correctAnswers.length && checked.every((v, i) => v === correctAnswers[i])) {
      this.setState({result: this.state.result + 1});
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
    let quiz = this.findQuizById(this.state.quizId);

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
        <img className="quiz__icon" src={'images/' + this.getQuizIcon(quiz)} alt="quiz icon"/>
        <h2 className="quiz__title">{this.getQuizTitle(quiz)}</h2>
        <p className="quiz__questions-count">Question {this.state.questionId + 1}/{this.getQuestionCount(quiz)}</p>

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

