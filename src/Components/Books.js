import React, { Component } from 'react';

class Books extends Component {
  render() {

    if(this.props.data){
      var books = this.props.data.map(function(books){
        var bookImage = books.image;
        return <div key={books.title} className="twelve columns books-item">
           <div className="item-wrap two columns">
            <a href={books.url} title={books.title}>
               <img alt={books.title} src={bookImage} />
            </a>
          </div>
          <div className="item-details nine columns">
            <h2>{books.title}</h2>
            <h4>{books.subtitle}</h4>
            <h6>Open Access</h6>
            <p>{books.description}</p>
            <a href={books.url} className="button btn-outline-primary"><i className="fa fa-lg fa-globe"></i> Book website</a>
            <a href={books.source} className="button btn-outline-primary"><i className="fa fa-lg fa-file"></i> PDF files</a>
            <a href={books.amazon} className="button btn-outline-primary"><i className="fa fa-lg fa-book"></i> Buy it on Amazon</a>
          </div>
        </div>
      })
    }

    return (
      <section id="books">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Books</h1>

            <div id="books-wrapper" className="">
                {books}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Books;
