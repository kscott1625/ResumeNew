import React from 'react';
import './about.css';
import KAS from '../../assets/KAS.jpg';
import { FaAward } from 'react-icons/fa';
import { MdCardTravel } from 'react-icons/md';
import { MdWorkspacesOutline } from 'react-icons/md';

const About = () => {
  return (
    <section id="about">
      <h2>More About Me!</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={KAS} alt="About Image" height="325" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small> NuCamp Coding Bootcamp</small>
            </article>
            <article className="about_card">
              <MdCardTravel className="about_icon" />
              <h5>Travel</h5>
              <small> World Wonderer</small>
            </article>
            <article className="about_card">
              <MdWorkspacesOutline className="about_icon" />
              <h5>Fitness Enthusiast</h5>
              <small> I love yoga, weights, and my Peloton bike </small>
            </article>
          </div>

          <p>
            I’m Katherine Scott, a fullstack developer, that specializes in
            front end development. I enjoy creating and developing new projects
            with HTML, CSS, JavaScript, and React.{' '}
          </p>
          <p>
            I come from working many years in physical therapy. I now enjoy the
            freedom that web development has given me, and have developed a
            passion for it. I always work towards achieving the best result on
            each project I lay my hands on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
