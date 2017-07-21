import React from 'react';
import './share.scss';


export default function Share(props) {
  return (
    <article className={`share ${props.className ? props.className : ''}`}>
      <h3 className="share__title">Share my results</h3>
      <section className="share__icons">
        <a href="#" className="share__icon share__icon--fb">share on facebook</a>
        <a href="#" className="share__icon share__icon--twitter">share on twitter</a>
        <a href="#" className="share__icon share__icon--vk">share on vk</a>
      </section>
    </article>
  );
}

