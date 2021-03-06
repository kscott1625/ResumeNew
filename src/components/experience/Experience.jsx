import React from 'react';
import './experience.css';
import { BsCheckSquareFill } from 'react-icons/bs';
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2> My Experience </h2>
      <div className="container experience_container">
        <div className="experience frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
