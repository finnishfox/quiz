import React from 'react';
import ReactDOM from 'react-dom';
import Share from "../share/Share";
import Progress from "../progress/Progress";


class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {result: null};
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay(e) {
    const overlay = e.currentTarget.parentElement.querySelector('.quiz__overlay');
    overlay.classList.toggle('quiz__overlay--open');
    e.currentTarget.classList.toggle('quiz__toggle-button--open');
  }

  render() {

    if (this.state.result === null) {
      return (
        <div className="quiz">
          <img className="quiz__icon" src={'images/' + this.props.icon}/>
          <h2 className="quiz__title">{this.props.title}</h2>
          <p className="quiz__questions-count">{this.props.questions} questions</p>
          <p className="quiz__description">{this.props.description}</p>
          <button type="button" className="quiz__button">Start</button>
        </div>
      );
    }

    return (
      <div className="quiz">
        <button className="quiz__toggle-button" onClick={this.toggleOverlay}/>
        <img className="quiz__icon" src={'images/' + this.props.icon} alt="quiz icon"/>
        <h2 className="quiz__title">{this.props.title}</h2>
        <p className="quiz__questions-count">{this.props.questions} questions</p>
        <Progress progress={this.state.result}/>
        <div className="quiz__overlay">
          <button className="quiz__button quiz__button--v-centered">Try again</button>
          <Share/>
        </div>
      </div>
    );


  }
}

export default Quiz;
