import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Kat
      </a>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/katherine-scott-a0a82022a/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/kscott1625" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer_copy">
        <small>&copy; Katherine Scott.2022. All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
