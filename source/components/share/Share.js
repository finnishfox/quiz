import React from 'react';
import './share.scss';

class Share extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="share">
        <p className="share__title">Share my results</p>
        <div className="share__icons">
        <a href="#" className="fa fa-facebook-square share__icon"/>
        <a href="#" className="fa fa-twitter-square share__icon"/>
        <a href="#" className="fa fa-vk share__icon"/>
        </div>
      </div>
    );
  }
}


export default Share;