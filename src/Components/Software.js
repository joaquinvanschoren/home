import React, { Component } from "react";

class Software extends Component {
  render() {
    return (
      <section id="software">
        <div className="row">
          <div className="twelve columns">
            <h1>Software</h1>
          </div>
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/expdblogo2.png"
              alt="Profile Pic"
              style={{borderRadius: 0}}
            />
          </div>
          <div className="nine columns main-col">
            <h2>OpenML: a worldwide machine learning lab</h2>
            <p>
              I founded <a href="https://www.openml.org">OpenML.org</a>, a
              popular online platform for sharing data, code, models and
              experiments in an open and reproducible way, so that we can all
              learn from our collective past experience and build ever-better
              learning systems. It also offers AI-ready datasets and benchmarks
              via convenient interfaces to more than 250.000 users.
            </p>
            <p>
              OpenML is being developed and maintained by{" "}
              <a href="https://www.openml.org/contact">an awesome team</a> of
              researchers and software developers.{" "}
              <b>
                <i>Join us!</i>
              </b>
            </p>
            <a
              href="https://www.github.com/openml"
              className="button pull-right"
            >
              <i className="fab fa-github"></i> OpenML on GitHub
            </a>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/croissant.png"
              alt="Croissant Pic"
              style={{borderRadius: 0}}
            />
          </div>
          <div className="nine columns main-col">
            <h2>Croissant</h2>
            <p>
              Croissant is a new standard for describing machine learning datasets, making it easier 
              to share and reuse data and load it automatically into AI libraries. 
              Joined work with MLCommons, Google, HuggingFace, Kaggle, and many more.
            </p>
            <p>
              Learn more about the system in the{" "}. 
              <a href="https://neurips.cc/virtual/2024/poster/97627">
                NeurIPS paper
              </a>
              .
            </p>
            <a
              href="https://github.com/mlcommons/croissant"
              className="button pull-right"
            >
              <i className="fab fa-github"></i> Croissant on GitHub
            </a>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/AutoMLbench.png"
              alt="Profile Pic"
              style={{borderRadius: 0}}
            />
          </div>
          <div className="nine columns main-col">
            <h2>AutoML Benchmark</h2>
            <p>
              The AutoML benchmark is a joint initiative to evaluate
              state-of-the-art AutoML systems. It is an open, continuous and
              extensible benchmark, being repeated regularly and open to include
              any open source AutoML system.
            </p>
            <p>
              Check out results on the{" "}
              <a href="https://openml.github.io/automlbenchmark">website</a> and
              learn more about the system in the{" "}. 
              <a href="https://arxiv.org/abs/2207.12560">
                paper
              </a>
              .
            </p>
            <a
              href="https://github.com/openml/automlbenchmark"
              className="button pull-right"
            >
              <i className="fab fa-github"></i> AutoML Benchmark on GitHub
            </a>
            <br />
          </div>
        </div>
      </section>
    );
  }
}

export default Software;
