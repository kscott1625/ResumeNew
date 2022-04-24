import React from 'react';
import kscott from '../../assets/kscottresume1.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={kscott} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
