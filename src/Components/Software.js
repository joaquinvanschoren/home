import React, { Component } from "react";

class Software extends Component {
  render() {
    return (
      <section id="software">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/expdblogo2.png"
              alt="Profile Pic"
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
              via convenient interfaces to more than 150.000 users.
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
              src="images/software_placeholder.png"
              alt="Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>GAMA: a flexible AutoML library</h2>
            <p>
              The General Automated Machine learning Assistant is an
              open-source, modular library for AutoML research. It allows
              researchers to quickly evaluate and monitor new AutoML techniques,
              and allows end users to automatically build machine learning
              pipelines on new datasets. It is being developed by{" "}
              <a href="#lab">Pieter Gijsbers and Prabhant Singh</a>.
            </p>
            <p>
              Learn more in the{" "}
              <a href="http://joss.theoj.org/papers/10.21105/joss.01132">
                JOSS paper
              </a>{" "}
              and the{" "}
              <a href="https://pgijsbers.github.io/gama/">documentation</a>.
            </p>
            <a
              href="https://github.com/PGijsbers/gama"
              className="button pull-right"
            >
              <i className="fab fa-github"></i> GAMA on GitHub
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
            />
          </div>
          <div className="nine columns main-col">
            <h2>AutoML Benchmark</h2>
            <p>
              The AutoML benchmark is a joint initiative to evaluate
              state-of-the-art AutoML systems. It is currently the de-facto
              standard benchmark. It is an open, continuous and extensible
              benchmark, being repeated regularly and open to include any open
              source AutoML system.
            </p>
            <p>
              Check out results on the{" "}
              <a href="https://openml.github.io/automlbenchmark">website</a> and
              learn more about the system in the{" "}
              <a href="https://openml.github.io/automlbenchmark/paper.html">
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
