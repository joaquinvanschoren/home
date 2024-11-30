import React, { Component } from "react";

class Lab extends Component {

  render() {

    return (
      <section id="lab">
        <div className="row">
          <div className="columns main-col">
            <h1>Automated Machine Learning Lab @ TU/e</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns four">
          <img alt="group" src="images/group_image.webp" width="100%"/>
          </div>
          <div className="columns eight main-col">
            <p>
              I’m fortunate to work with an amazing team. We focus on <a href="#pubs">cutting-edge research</a> to deeply understand and advance the capabilities of AI models, 
              inventing new neural network architectures and training procedures to learn better and faster, and to allow models adapt continually to new tasks and environments. 
              We work on Automated Machine Learning (AutoML), Meta-Learning, Continual Learning, Foundation Models, Open-Endedness, and many related fields, 
              and apply our work for the benefit of society. You can <a href="#pubs">find our work</a> in top AI conferences and journals, and 
              we take pride in good engineering and open science to build AI models and systems that are widely used by people every day.
              </p><p>
              We are part of the{" "}
              <a href="https://dai.win.tue.nl/" target="_blank">
                Data and Artificial Intelligence Cluster
              </a> at Eindhoven University of Technology, and collaborate with many other labs and companies worldwide.
            </p>
            <p>
            <a
              href="https://openml-labs.github.io/website/" target="_blank"
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
                  <b>PhD, PostDoc, or AI Engineer positions</b>: I'm <i>honoured</i> that you are considering me as a possible advisor! Please check out our <a href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3D%26p_category_code_arr%3D6048-461676&page=1" target="_blank">open positions</a>.
                    Without an open position, you need to be self-funded or have a scholarship.
                </p>
              <p>
                  <b>Visiting researchers</b>: We <i>love</i> discussing new ideas and collaborations! Note that we generally expect you to stay for at least a few months. 
                    Our lab is generally not able to offer paid internships.
                </p>
              <p>
              <a
                href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3D%26p_category_code_arr%3D6048-461676&page=1"
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
