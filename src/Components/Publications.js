import React, { Component } from "react";

class Publications extends Component {
  pubtypes = [
    "journal papers",
    "conference papers",
    "workshop papers",
    "book chapters",
    "books edited",
    "dissertations",
    "preprints"
  ];
  state = {};
  publist = [];

  constructor(props) {
    super();

    for (let i = 0; i < this.pubtypes.length; i++) {
      var type = this.pubtypes[i];
      this.state[type + "_shown"] = 3;
      this.state[type + "_allShown"] = false;
    }
  }

  show_more = event => {
    let t = event.target.getAttribute("value");
    let count = this.state[t + "_count"];
    this.setState(state => ({
      [t + "_shown"]: count,
      [t + "_allShown"]: true
    }));
  };

  render() {
    if (this.props.data) {
      let pubs = {};
      for (let i = 0; i < this.pubtypes.length; i++) {
        var t = this.pubtypes[i];
        var d = this.props.data[t];
        this.state[t + "_count"] = d.length;
        if (this.state[t + "_count"] <= this.state[t + "_shown"]) {
          this.state[t + "_allShown"] = true;
        }
        pubs[t] = d.slice(0, this.state[t + "_shown"]).map(function(pubs) {
          return (
            <div className="citation" key={pubs.title}>
              {pubs.authors}
              <br />
              <a href={pubs.url}>{pubs.title}</a> <i>{pubs.reference}</i>
            </div>
          );
        });
      }

      this.publist = [];
      for (let i = 0; i < this.pubtypes.length; i++) {
        var ty = this.pubtypes[i];
        this.publist.push(
          <div className="row" key={ty}>
            <div className="two columns header-col">
              <h1>
                <span>{ty}</span>
              </h1>
            </div>
            <div className="ten columns main-col">
              <div className="row item">
                <div className="twelve columns">{pubs[ty]}</div>
              </div>
            </div>

            <div className="ten columns main-col pubmore">
              <a
                onClick={this.show_more}
                value={ty}
                className={this.state[ty + "_allShown"] ? "hide" : "show"}
              >
                <i className="fa fa-2x fa-angle-double-down"></i>{" "}
                {this.state[ty + "_count"] - this.state[ty + "_shown"]} More
              </a>
            </div>
          </div>
        );
      }
    }
    return (
      <section id="pubs">
        <div className="row separated">
          <div className="twelve columns">
            <h2>Publications</h2>
            <div className="toplink">
              Publications ordered by type and date (newest first), linked to
              PDFs.
              <br />
              Preprints are listed on{" "}
              <a href="https://arxiv.org/search/?query=joaquin+vanschoren&searchtype=all&abstracts=show&order=-announced_date_first&size=50">
                Arxiv
              </a>
              . For citations, see{" "}
              <a href="http://scholar.google.nl/citations?user=HhDsD9UAAAAJ&hl=en&oi=ao">
                Google Scholar
              </a>
              .
            </div>

            <div>{this.publist}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Publications;
