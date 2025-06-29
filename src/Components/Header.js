import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {name}
              </a>
            </li>
            <li className="hidesmall">
              <a>|</a>
            </li>
            <li>
              <a className="smoothscroll" href="#news">
                News
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#pubs">
                Research
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#books">
                Books
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#software">
                Software
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#talks">
                Talks
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#courses">
                Teaching
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi!</h1>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
