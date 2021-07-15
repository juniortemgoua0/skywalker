import React from 'react';

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.html">
                <img src="img/logo.png" alt="" title="" />
              </a>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#unique">Unique Feature</a>
                </li>
                <li>
                  <a href="#review">Review</a>
                </li>
                <li>
                  <a href="#faq">Faq</a>
                </li>
                <li className="menu-has-children">
                  <a href="#bla">Pages</a>
                  <ul>
                    <li>
                      <a href="generic.html">Generic</a>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
