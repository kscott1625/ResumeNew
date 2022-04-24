import React from 'react';
import './work.css';
import cat1 from '../../assets/cat1.jpg';
import hero from '../../assets/hero.png';
import weather from '../../assets/weather.jpg';

const Work = () => {
  return (
    <section id="work">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container work_container">
        <article className="work_item">
          <div className="work_itme-image"></div>
          <img src={cat1} alt="cat1" height="250px" width="250px"></img>
          <h3>CatBoarding Project</h3>
          <h5>
            A cat boaring site that allows you to book your pet's stay. Created
            with bootsrap and css.{' '}
          </h5>
          <a
            href="https://github.com/kscott1625/Catboarding"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
        <article className="work_item">
          <div className="work_itme-image"></div>
          <img src={weather} alt="weather" height="250px" width="250px"></img>
          <h3>Weather App</h3>
          <h5>React based weather app</h5>
          <a
            href="https://github.com/kscott1625/Weather-react"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
        <article className="work_item">
          <div className="work_itme-image"></div>
          <img src={hero} alt="hero" height="250px" width="250px"></img>
          <h3>Superhero Quiz</h3>
          <h5>Fun little quiz I'm working on using html, css, and React.</h5>
          <a
            href="https://github.com/kscott1625/QuizGame"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Work;
