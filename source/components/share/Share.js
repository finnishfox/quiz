import React from 'react';
import './share.scss';


class Share extends React.Component {
  static share(e, service) {
    let quiz = e.currentTarget.closest('.quiz');
    if (quiz === null) {
      quiz = e.currentTarget.closest('.result');
    }
    const title = quiz.querySelector('.quiz__title').innerText;
    const progress = quiz.querySelector('.progress__value').innerText;
    const shareText = (`My result in ${title} quiz is ${progress}`);
    if (service === 'fb') {
      window.open(`http://facebook.com/share.php?u=https://finnishfox.github.io/quiz/&title=${shareText}`);
    } else if (service === 'twitter') {
      window.open(`http://twitter.com/home?status=${shareText}+https://finnishfox.github.io/quiz/`);
    } else if (service === 'vk') {
      window.open(`https://vk.com/share.php?url=https://finnishfox.github.io/quiz/&title=${shareText}`);
    }
  }

  render() {
    return (
      <article className={`share ${this.props.className ? this.props.className : ''}`}>
        <h3 className="share__title">Share my results</h3>
        <section className="share__icons">
          <button
            className="share__icon share__icon--fb"
            onClick={e => Share.share(e, 'fb')}
          >share on facebook
          </button>
          <button className="share__icon share__icon--twitter" onClick={e => Share.share(e, 'twitter')}>share on
            twitter
          </button>
          <button className="share__icon share__icon--vk" onClick={e => Share.share(e, 'vk')}>share on vk</button>
        </section>
      </article>
    );
  }
}


export default Share;

