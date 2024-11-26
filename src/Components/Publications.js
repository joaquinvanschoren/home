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
  state = {sort_year: false};
  publist = [];

  constructor(props) {
    super();

    for (let i = 0; i < this.pubtypes.length; i++) {
      var type = this.pubtypes[i];
      this.state[type + "_shown"] = 6;
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

  toggleSwitch = evt => {
    evt.persist();
    evt.preventDefault();
    this.setState({ sort_year: !this.state.sort_year });
  }

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
        pubs[t] = d.slice(0, this.state.sort_year ? 100 : this.state[t + "_shown"]).map(function(pubs) {
          return (
            <div className="citation" key={pubs.title}>
              {pubs.authors}
              <br />
              <a href={pubs.url}>{pubs.title}</a>. <b>{pubs.reference}</b>, {pubs.year}
            </div>
          );
        });
      }

      this.publist = [];
      var headers = this.pubtypes;
      if (this.state.sort_year){
        var current_year = new Date().getFullYear();
        headers = Array(current_year - 2006 + 1).fill().map((_, idx) => current_year - idx)
      }
      for (let i = 0; i < headers.length; i++) {
        var ty = headers[i];
        var papers = []
        if (this.state.sort_year){
          this.state[ty + "_allShown"] = true;
          for (let j = 0; j < this.pubtypes.length; j++) {
            var data = this.props.data[this.pubtypes[j]];
            var subpapers = pubs[this.pubtypes[j]];
            for (let k = 0; k < data.length; k++) {
              if (data[k].year === ty){
                papers.push(subpapers[k]);
              }
            }
          }
        } else {
          papers = pubs[ty];
        }
        this.publist.push(
          <div className="row" key={ty}>
            <div className="two columns header-col">
              <h1>
                <span>{ty}</span>
              </h1>
            </div>
            <div className="ten columns main-col">
              <div className="row item">
                <div className="twelve columns">{papers}</div>
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
              Publications ordered by {this.state.sort_year ? "year" : "publication type and date"} (newest first), linked to
              PDFs. <a href="#" onClick={this.toggleSwitch}>Sort by {this.state.sort_year ? "type and date" : "year"}</a>
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
