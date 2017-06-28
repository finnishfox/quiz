import React from 'react';
import {quizes} from '../../js/quizes';


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



    this.state = {isSubmitted: false};


    this.quizId = 0;
    this.questionId = 0;
  }

  componentDidMount(){
    Prism.highlightAll();
  }

  componentDidUpdate(){
    Prism.highlightAll();
  }

  findQuizById(id) {
    return quizes.find(x => x.id === id);
  }

  findQuestionById(id) {
    let quiz = this.findQuizById(this.quizId);
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


  next() {

  }

  submit() {
    this.setState({isSubmitted: true});
  }


  render() {


    let quiz = this.findQuizById(this.quizId);

    let question = this.findQuestionById(this.questionId);



    let button = null;
    if (this.state.isSubmitted) {
      button = <button type="button" className="question__button" onClick={this.next}>Next</button>
    } else {
      button = <button type="button" className="question__button" onClick={this.submit}>Submit</button>
    }

    return (
      <div className="question">
        <img className="quiz__icon" src={'images/' + this.getQuizIcon(quiz)} alt="quiz icon"/>
        <h2 className="quiz__title">{this.getQuizTitle(quiz)}</h2>
        <p className="quiz__questions-count">Question {this.questionId + 1}/{this.getQuestionCount(quiz)}</p>

        <div className="question__title language-javascript" dangerouslySetInnerHTML={{__html: this.getQuestionTitle(question)}}/>
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

