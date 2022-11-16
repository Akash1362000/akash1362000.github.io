import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akash Shrivastava</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src="" alt="Akash Shrivastava" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
