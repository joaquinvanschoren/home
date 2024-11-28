import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              I am an {" "}
              <a href="https://www.tue.nl/en/research/researchers/joaquin-vanschoren/">
                associate professor at TU Eindhoven
              </a>
              {" "} and head of the <a href="https://openml-labs.github.io/website/" target="_blank" rel="noreferrer">Automated Machine Learning lab</a>. We aim to scientifically understand (human-like) intelligence, and build trustworthy AI systems for the benefit of all humanity.
              We focus on cutting-edge research to advance the capabilities of AI models, inventing new architectures and training procedures to learn better and faster, and adapt continually to new tasks and environments. We work on Automated Machine Learning (AutoML), Meta-Learning, Continual Learning, Foundation Models, and many related fields, and apply our work for the benefit of society.
              You can <a href="#pubs">find our work</a> in top AI conferences and journals, and we build AI models and systems that are widely used by people every day.
              </p>
              <p>Interesting in joining? <a href="http://localhost:3000/home#lab" target="_blank">Learn more</a>.
              </p>
              <p>I founded <a href="https://www.openml.org">OpenML</a>, a useful open science platform for machine learning, to streamline and accelerate reproducible AI research. 
              I was the inaugural chair of the <a href="https://neuripsconf.medium.com/announcing-the-neurips-2021-datasets-and-benchmarks-track-644e27c1e66c" target="_blank" rel="noreferrer">NeurIPS Datasets and Benchmarks track</a> and am editor-in-chief of the <a href="https://data.mlr.press/" target="_blank" rel="noreferrer">DMLR journal</a>, to incentivize and reward good data and evaluation practices in AI.
              I also co-chair the <a href="https://mlcommons.org/working-groups/ai-risk-reliability/ai-risk-reliability/" target="_blank" rel="noreferrer">MLCommons AI Risk & Reliability</a> working group to help make AI models safer through science, am one of the founders of the <a href="https://mlcommons.org/working-groups/data/croissant/" target="_blank" rel="noreferrer">Croissant standard</a> for sharing AI resources, and contribute to <a href="https://mlcommons.org/working-groups/research/dmlr/" target="_blank" rel="noreferrer">data-centric AI</a>.
              </p>
              <p>I am a founding member of the European AI societies <a href="https://ellis.eu/" target="_blank" rel="noreferrer">ELLIS</a> and <a href="https://claire-ai.org/" target="_blank" rel="noreferrer">CAIRNE</a>, authored the <a href="https://link.springer.com/book/10.1007/978-3-030-05318-5" target="_blank" rel="noreferrer">first book on AutoML</a>, gave <a href="https://www.youtube.com/watch?v=0eBR8a4MQ30" target="_blank" rel="noreferrer">tutorials at NeurIPS</a> and AAAI, won several awards (including the <a href="https://researchdata.nl/en/history-dutch-data-prize/" target="_blank" rel="noreferrer">Dutch Data Prize</a> and <a href="https://www.amazon.science/research-awards" target="_blank" rel="noreferrer">Amazon Research Award</a>),
              and I've been interviewed for news articles in <a href="https://www.nature.com/articles/d41586-023-03817-6" target="_blank" rel="noreferrer">Nature</a>, <a href="https://www.science.org/content/article/computers-ace-iq-tests-still-make-dumb-mistakes-can-different-tests-help" target="_blank" rel="noreferrer">Science</a>, and <a href="https://podcasts.apple.com/us/podcast/20-dr-joaquin-vanschoren-on-making-data-public/id1541228337?i=1000520520443" target="_blank" rel="noreferrer">podcasts</a>. I am always eager to collaborate with new people. Do reach out!
            </p>
            <a href={resumeDownload} className="button pull-right">
              <i className="fa fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
