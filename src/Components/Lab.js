import React, { Component } from "react";

class Lab extends Component {

  render() {

    return (
      <section id="lab">
        <div className="row">
          <div className="columns main-col">
            <h1>Automated Machine Learning Lab @ TU/e</h1>
            <img alt="group" src="images/group_image.webp" width="100%"/>
            <p>
              I’m fortunate to work with an amazing team. We build AI systems that learn continually and automatically assemble themselves to learn faster and better, often inspired by the human brain.
              Our key research topics are Automated Machine Learning (AutoML), including Neural Architecture Search (NAS), Meta-Learning, and Continual Learning, and all possible combinations thereof. We also apply this work for the benefit of society in applications such as Health, Food, Energy, and Mobility.
              We perform cutting-edge research but also take pride in good engineering and open science to make our work maximally useful and impactful.
              We are part of the{" "}
              <a href="https://www.tue.nl/en/research/research-groups/artificial-intelligence/">
                Data and Artificial Intelligence Cluster
              </a>
              .
            </p>
            <p>
            <a
              href="https://www.github.com/openml"
              className="button pull-right"
            >
              <i className="fa fa-globe"></i> Check our lab website
            </a>
            </p>

            </div>
            </div>
            <div className="row">
              <div className="columns main-col">
              <h2>Join us</h2>
              <ul>
                <li>
                  <b>PhD, PostDoc, or AI Engineer positions</b>: I'm <i>honoured</i> that you are considering me as a possible advisor! Please check out <a href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3Dvanschoren%26p_category_code_arr%3D6047-461659%26p_category_code_arr%3D6047-461661%26p_category_code_arr%3D6047-461665%26p_category_code_arr%3D6047-461666%26p_category_code_arr%3D6048-461676%26_gl%3D1*1tx08a4*_up*MQ..*_ga*OTIwMzU2OTcuMTcyNTAyOTg3Ng..*_ga_JN37M497TT*MTcyNTAyOTg3NS4xLjAuMTcyNTAyOTg3NS4wLjAuMA..&page=1" target="_blank">open positions in my lab</a>, or{" "}
                    <a href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3D%26p_category_code_arr%3D6047-461659%26p_category_code_arr%3D6047-461661%26p_category_code_arr%3D6047-461665%26p_category_code_arr%3D6047-461666%26p_category_code_arr%3D6048-461676&page=1" target="_blank">other positions at our department</a>.
                    Without an open position, you need to be self-funded or have a scholarship.
                </li><li>
                  <b>Internships</b>: Sadly, our lab is generally not able to support interns. If we do, it will also be posted on the job board above.
                </li><li>
                  <b>Visiting researchers</b>: We <i>love</i> discussing new ideas and collaborations! Please clearly explain
                    what you want to explore together, how it aligns with our work. Note that we generally expect you to stay for at least a few months. 
                </li>
              </ul>
            </div>
          </div>
      </section>
    );
  }
}

export default Lab;
