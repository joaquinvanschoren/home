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
              {" "} and lead of the <a href="https://openml-labs.github.io/website/">Automated Machine Learning lab</a>. I aim to deeply understand, explain, and democratize AI for the benefit of all humanity. My team and I build AI systems that learn continually and automatically assemble 
              themselves to learn faster and better, often inspired by the human brain. 
              I founded <a href="https://www.openml.org">OpenML</a>, an open science platform to democratize machine learning, 
              started the <a href="https://neuripsconf.medium.com/announcing-the-neurips-2021-datasets-and-benchmarks-track-644e27c1e66c">NeurIPS Datasets and Benchmarks track</a> and <a href="https://data.mlr.press/">DMLR journal</a> to incentivize 
              better training data and benchmarks, and work with <a href="https://mlcommons.org/">MLCommons</a> on <a href="https://mlcommons.org/working-groups/ai-safety">AI Safety</a>, <a href="https://mlcommons.org/working-groups/data/croissant/">ML standards</a>, and <a href="https://mlcommons.org/working-groups/research/dmlr/">data-centric AI</a>.
              </p>
              <p>I am a founding member of <a href="https://ellis.eu/">ELLIS</a> and  <a href="https://claire-ai.org/">CLAIRE</a>, co-wrote a <a href="https://link.springer.com/book/10.1007/978-3-030-05318-5">leading book on AutoML</a>, gave <a href="https://www.youtube.com/watch?v=0eBR8a4MQ30">tutorials at NeurIPS</a> and AAAI, won several awards (including the <a href="https://researchdata.nl/en/history-dutch-data-prize/">Dutch Data Prize</a> and <a href="https://www.amazon.science/research-awards">Amazon Research Award</a>),
              and I've been interviewed for articles in <a href="https://www.nature.com/articles/d41586-023-03817-6">Nature</a>, <a href="https://www.science.org/content/article/computers-ace-iq-tests-still-make-dumb-mistakes-can-different-tests-help">Science</a>, and <a href="https://podcasts.apple.com/us/podcast/20-dr-joaquin-vanschoren-on-making-data-public/id1541228337?i=1000520520443">science podcasts</a>. I am always eager to collaborate with new people. Do reach out!
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
