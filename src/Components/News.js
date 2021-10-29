import React, { Component } from 'react';

class News extends Component {

  state = { newsShown: 5,
    allNewsShown: false,
    invitedShown: 5,
    allInvitedShown: false
  }

  showMoreNews = () => {
    this.setState(state => ({ newsShown: this.props.data.news.length, allNewsShown: true }));
  }
  showMoreInvited = () => {
    this.setState(state => ({ invitedShown: this.props.data.invited.length, allInvitedShown: true }));
  }

  render() {

    if(this.props.data){
      this.state.newsCount = this.props.data.news.length
      this.state.invitedCount = this.props.data.invited.length
      var news = this.props.data.news.slice(0, this.state.newsShown).map(function(news){
        return <div key={news.title}><a className="newsitem" href={news.link}>{news.title}</a>
        <em className="date">{news.time}</em>
        <p>{news.description}</p></div>
      })
      var invited = this.props.data.invited.slice(0, this.state.invitedShown).map(function(invited){
        return <div key={invited.title}><a className="newsitem" href={invited.link}>{invited.title}</a>
        {invited.slides && <a href={invited.slides}><i className="fa fa-lg fa-desktop"></i></a>}
        <em className="date">{invited.time}</em>
        <p>{invited.description}</p>
        </div>
      })
    }

    return (
      <section id="news">

      <div className="row separated">
         <div className="three columns header-col">
            <h1><span>News</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {news}
               </div>
            </div>
         </div>

         <div className="nine columns main-col">
            <a onClick={this.showMoreNews}
            className={this.state.allNewsShown ? 'hide' : 'show'}>
            <i className='fa fa-2x fa-angle-double-down'></i> { this.state.newsCount - this.state.newsShown} More</a>
         </div>
      </div>


      <div className="row">

         <div className="three columns header-col">
            <h1><span>Invited talks</span></h1>
         </div>

         <div className="nine columns main-col">
          {invited}
         </div>

         <div className="nine columns main-col">
            <a onClick={this.showMoreInvited}
            className={this.state.allInvitedShown ? 'hide' : 'show'}>
            <i className='fa fa-2x fa-angle-double-down'></i> { this.state.invitedCount - this.state.invitedShown} More</a>
         </div>
    </div>

   </section>
    );
  }
}

export default News;
