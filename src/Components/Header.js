import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">{name}</a></li>
            <li className="hidesmall"><a>|</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#news">News</a></li>
	          <li><a className="smoothscroll" href="#software">Software</a></li>
            <li><a className="smoothscroll" href="#books">Books</a></li>
            <li><a className="smoothscroll" href="#talks">Talks</a></li>
            <li><a className="smoothscroll" href="#lab">Lab</a></li>
            <li><a className="smoothscroll" href="#pubs">Publications</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi!</h1>
            <h3>I'm a scientist on a quest to build AI systems that learn how to learn, making machine learning more <i>automatic</i>, <i>frictionless</i> and <i>never-ending</i>. I could use some help :)</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
