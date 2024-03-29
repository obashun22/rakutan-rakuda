import React from 'react';
import "../../stylesheets/components/Header.css";
import logo from '../../images/logo/site_logo.png';

const Header = (props) => {
  return (
  <header>
    <nav>
      <div className="nav-left">
        <a href="/" className="killLinkStyle">
          <img src={ logo } alt="Logo" className="logo"/>
        </a>
      </div>
        { props.children }
    </nav>
  </header>
  );
};

export default Header;