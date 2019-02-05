import React, { Component } from 'react';

class Software extends Component {
  render() {

    return (
      <section id="software">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src='images/expdblogo2.png' alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>OpenML</h2>
            <p>I founded <a href="https://www.openml.org">OpenML.org</a>, an online platform for sharing data, code, models and experiments in an open and reproducible way, so that we can all learn from our collective past experience and build ever-better learning systems.</p>
            <p>OpenML is being developed and maintained by <a href="https://www.openml.org/contact">an awesome team</a> of researchers and software developers. <b><i>Join us!</i></b></p>
            <a href="https://www.github.com/openml" className="button pull-right"><i className="fab fa-github"></i> OpenML on GitHub</a><br />

         </div>
      </div>

      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src='images/software_placeholder.png' alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>GAMA</h2>
            <p>The Genetic Automated Machine learning Assistant is an open-source AutoML tool that automatically builds and optimizes machine learning pipelines using evolutionary techniques. It is being developed by <a href="#lab">Pieter Gijsbers</a>.</p>
            <p>Learn more in the <a href="http://joss.theoj.org/papers/10.21105/joss.01132">JOSS paper</a> and the <a href="https://pgijsbers.github.io/gama/">documentation</a>.</p>
            <a href="https://github.com/PGijsbers/gama" className="button pull-right"><i className="fab fa-github"></i> GAMA on GitHub</a><br />

         </div>
      </div>

   </section>
    );
  }
}

export default Software;
