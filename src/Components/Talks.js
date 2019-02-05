import React, { Component } from 'react';

class Talks extends Component {
  render() {

    if(this.props.data){
      var talks = this.props.data.map(function(talks){
        var talkImage = 'images/'+talks.image;
        return <div key={talks.title} className="columns talks-item">
           <div className="item-wrap">
           {talks.type === "video" &&
           <div className="iframe-container">
           <iframe title={talks.title} src={talks.url} maxheight="auto" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div>
           }
           {talks.type === "slideshare" &&
           <div className="iframe-container">
           <iframe title={talks.title} src={talks.url} maxheight="auto" frameBorder="0" allowFullScreen></iframe>
           </div>
           }
           {talks.type === "slides" &&
            <div className="slide-container">
            <a href={talks.url} title={talks.title}>
               <img alt={talks.title} src={talkImage} />
               <div className="overlay">
                  <div className="talks-item-meta">
                 <h5>{talks.title}</h5>
                     <p>{talks.description}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a></div>}
          </div>
          <h6>{talks.title}</h6>
          <p>{talks.description}
             {talks.type === "video" && <a href={talks.slides} className="pull-right"><i className="fa fa-desktop"></i> Slides</a>}</p>
        </div>
      })
    }

    return (
      <section id="talks">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Talks</h1>

            <div id="talks-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                {talks}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Talks;
