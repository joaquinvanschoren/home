import React, { Component } from "react";

class Lab extends Component {

  render() {

    return (
      <section id="lab">
        <div className="row">
          <div className="columns main-col">
            <h1>AMOR/e research lab @ TU/e</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns four">
          <img alt="group" src="images/group_image.webp" width="100%"/>
          </div>
          <div className="columns eight main-col">
            <p>
              I’m fortunate to work with an amazing team. Me and my research group on <i>Advanced Models through Open Research and Engineering</i> (AMORE) 
              aim to scientifically understand and build AI systems with advanced capabilities, and make AI accessible to benefit all of humanity.
              We invent new neural network architectures and train them in new ways to learn better and faster, study models systematically, 
              and use our insights to automate this process so that AI systems can self-assemble and optimize themselves. Everything we create 
              is open-source and crafted with user-friendliness in mind. You can <a href="#pubs">find our work</a> in top AI conferences and journals, and 
              we take pride in good engineering and open science to build AI models and systems that are widely used by people every day.
              </p><p>
              We are part of the{" "}
              <a href="https://dai.win.tue.nl/" target="_blank">
                Data and Artificial Intelligence Cluster
              </a> at Eindhoven University of Technology, and collaborate with many other labs and companies worldwide.
            </p>
            <p>
            <a
              href="https://amore-labs.github.io" target="_blank"
              className="button pull-right"
            >
              <i className="fa fa-globe"></i> Check our lab website
            </a>
            </p>

            </div>
            </div>
            <div className="row">
              <div className="columns main-col">
              <h2><i>Join us!</i></h2>
              <p>
                  <b>PhD, PostDoc, or AI Engineer positions</b>: I'm <i>honoured</i> that you are considering me as a possible advisor! Please check out our <a href="https://amore-labs.github.io/website/join/join.html" target="_blank">open positions</a>.
                    Without an open position, you need to be self-funded or have a scholarship.
                </p>
              <p>
                  <b>Visiting researchers</b>: We <i>love</i> discussing new ideas and collaborations! Note that we generally expect you to stay for at least a few months. 
                    Our lab is generally not able to offer paid internships.
                </p>
              <p>
              <a
                href="https://amore-labs.github.io/website/join/join.html"
                className="button pull-right"
              >
                <i className="fa fa-globe"></i> Check open positions
              </a>
              </p>
            </div>
          </div>
      </section>
    );
  }
}

export default Lab;
