import React from 'react';
import './header.css';
import CTA from './CTA';
import me1 from '../../assets/me1.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi! I'm</h5>
        <h1>Katherine Scott</h1>
        <h5 className="text-light">Fullstack Developer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me1">
          <img src={me1} alt="me1" className="center" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
