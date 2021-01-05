import React, { Component } from "react";

class Teaching extends Component {
  render() {
    if (this.props.data) {
      var courses = this.props.data.map(function(courses) {
        var bookImage = courses.image;
        return (
          <div key={courses.title} className="twelve columns books-item">
            <div className="item-wrap two columns">
              <a href={courses.url} title={courses.title}>
                <img alt={courses.title} src={bookImage} />
              </a>
            </div>
            <div className="item-details nine columns">
              <h2>{courses.title}</h2>
              <h4>{courses.subtitle}</h4>
              <h6>Open Access</h6>
              <p>{courses.description}</p>
              <a href={courses.url} className="button btn-outline-primary">
                <i className="fa fa-lg fa-globe"></i> Course overview{" "}
              </a>
              <a href={courses.source} className="button btn-outline-primary">
                <i className="fa fa-lg fa-file"></i> Sources (notebooks){" "}
              </a>
              {courses.videos && (
                <a href={courses.videos} className="button btn-outline-primary">
                  <i className="fa fa-lg fa-youtube"></i> Videos (YouTube){" "}
                </a>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="courses">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Teaching</h1>

            <div id="courses-wrapper" className="">
              {courses}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Teaching;
