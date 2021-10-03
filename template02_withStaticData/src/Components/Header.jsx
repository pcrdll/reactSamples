import React from "react";

import logo from "./images/pcrdlllogo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <a
          href="https://github.com/pcrdll"
          className="navbar-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="PCRDLL" style={{ width: '70px' }} />
        </a>
        <a className="navbar-brand" href="/">
          <h1>Pablo Crundall</h1>
        </a>
      </nav>
    </header>
  );
};

export default Header;
