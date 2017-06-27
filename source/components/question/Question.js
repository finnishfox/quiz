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

    this.q = {
      "question": `<p>FUCK You perform the following operation in the shell:</p>
    <pre><code>db.foo.insert( { } );</code></pre>
    <p>What gets inserted?</p>`,
      "answers": [
        "An empty document",
        "A document with an _id assigned to be an ObjectId",
        "A document that matches the collection's existing schema, but with null fields",
        "No document will be inserted; an error will be raised",
        "A document will be inserted with the same _id as the last document inserted"
      ],
      "correctAnswerIndex": "1"
    };
    this.quizId = 0;
    this.questionId = 0;
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
      <div className="question language-javascript">
        <img className="quiz__icon" src={'images/' + this.getQuizIcon(quiz)} alt="quiz icon"/>
        <h2 className="quiz__title">{this.getQuizTitle(quiz)}</h2>
        <p className="quiz__questions-count">Question {this.questionId}/{this.getQuestionCount(quiz)}</p>

        <div className="question__title" dangerouslySetInnerHTML={{__html: this.getQuestionTitle(question)}}/>
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

