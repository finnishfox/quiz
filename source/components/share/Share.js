import React from 'react';
import './share.scss';


export default function Share(props) {
  return (
    <article className={`share ${props.className ? props.className : ''}`}>
      <h3 className="share__title">Share my results</h3>
      <section className="share__icons">
        <a href="#" className="fa fa-facebook-square share__icon"/>
        <a href="#" className="fa fa-twitter-square share__icon"/>
        <a href="#" className="fa fa-vk share__icon"/>
      </section>
    </article>
  )
};




