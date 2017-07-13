import React from 'react';
import './progress.scss';
class Progress extends React.Component {
  constructor() {
    super();
  }

  getOffset() {
    return Math.round(471 * (1 - this.props.progress / 100));
  }

  render() {
    return (
      <div className="progress">
        <svg className="progress__circle" width="150" height="150" viewBox="0 0 150 150">
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#1C3144"/>
              <stop offset="100%" stopColor="#2B5876"/>
            </linearGradient>
          </defs>
          <circle cx="75" cy="75" r="67.5"
                  fill="none" stroke="#D2EFEB" strokeWidth="10px"/>
          <circle className="progress__filled-circle" cx="75" cy="75" r="67.5"
                  fill="none" stroke="url(#gradient)" strokeWidth="15px" strokeLinecap="round"
                  strokeDasharray="471 471" strokeDashoffset={this.getOffset()}/>
        </svg>
        <p className="progress__value">{this.props.progress}%</p>
      </div>
    );
  }
}

export default Progress;