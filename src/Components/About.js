import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var phone = this.props.data.phone;
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
              I am{" "}
              <a href="https://www.tue.nl/en/research/researchers/joaquin-vanschoren/">
                assistant professor of machine learning at TU/e
              </a>
              . My research is focused on machine learning systems that learn
              how to learn, all by themselves. Specifically, I work on
              meta-learning and automated machine learning (AutoML). My hope is
              that one day, computers will learn{" "}
              <i>automatically and continuously</i> from one task to the next,
              with minimal supervision and maximal curiosity, much like humans
              do.
              <br />I founded <a href="https://www.openml.org">OpenML.org</a>,
              an online platform for sharing data, code, models and experiments
              in an open, frictionless, and reproducible way, so that we can all
              learn from our collective past experience and build ever-better
              learning systems.
            </p>
            <a href={resumeDownload} className="button pull-right">
              <i className="fa fa-download"></i> Download Resume
            </a>
            <br />

            <div className="row">
              <div className="columns main-col">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    <i className="fas fa-envelope"></i> MetaForum 7.104a. Groene
                    Loper 5, 5612 AZ Eindhoven, The Netherlands
                  </span>
                  <br />
                  <span>
                    <i className="fas fa-phone"></i> {phone}
                  </span>
                  <br />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="columns main-col">
                <h2>Email</h2>
                <p className="address">
                  I try to dedicate my time to current projects, students and
                  family. As such, I use email sparingly. A few tips to make
                  both our lives easier:
                  <br />
                  <span>
                    <b>- PhD positions</b>: Check for{" "}
                    <a href="#open">available opportunities</a>.
                  </span>
                  <br />
                  <span>
                    <b>- MSc Students</b>: Check{" "}
                    <a href="#topics">MSc research topics</a>. Use Canvas for
                    course-related questions. I typically do not supervise
                    industry internships, please contact Stiven (s.schwanz.dias{" "}
                    <i className="fas fa-at"></i> tue.nl) to help find a supervisor.
                  </span>
                  <br />
                  <span>
                    <b>- Meetings</b>: Book a time slot via Jose, our friendly
                    secretary, at wsinfsys@tue.nl.
                  </span>
                  <br />
                  <span>
                    <b>- Unsolicited job offers</b>: No thank you (unless it's
                    truly amazing :))
                  </span>
                  <br />
                  <br />
                  <span>
                    Otherwise, if you have a topic that you think will really
                    interest me, you can contact me at j.vanschoren{" "}
                    <i className="fas fa-at"></i> tue.nl. Thanks!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
