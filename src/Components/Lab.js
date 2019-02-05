import React, { Component } from 'react';

class Lab extends Component {

  state = { mscShown: 6,
    allMscShown: false,
    showScience: false,
    showIndustry: false
  }

  showMoreMsc = () => {
    this.setState(state => ({ mscShown: this.props.data.msc.length, allMscShown: true }));
  }
  showScienceTopics = () => {
    this.setState(state => ({ showScience: true }));
  }
  showIndustryTopics = () => {
    this.setState(state => ({ showIndustry: true }));
  }


  render() {

    if(this.props.data){
      var people = this.props.data.people.map(function(people){
        var peopleImage = 'images/'+people.picture;
        return <div className="columns people-item" key={people.name}>
           <div className="item-wrap">
              <img className="profile-pic" src={peopleImage} alt="Profile Pic" />
          </div>
          <h5>{people.name}</h5>
          <h6>{people.role}</h6>
          <p>{people.topic}</p>
        </div>
      });
      var open = this.props.data.open.map(function(open){
        var openImage = 'images/'+open.picture;
        return <div className="columns people-item"  key={open.name}>
           <div className="item-wrap">
              <img className="profile-pic" src={openImage} alt="Profile Pic" />
          </div>
          <h5>{open.name}</h5>
          <p>{open.topic}</p>
        </div>
      });
      var former = this.props.data.former.map(function(former){
          var openImage = 'images/'+former.picture;
          return <div className="row"  key={former.name}>
                 <div className="former-img two columns">
                    <img className="profile-pic" src={openImage} alt="Profile Pic" />
                 </div>
                 <div className="former-info ten columns main-col"><b>{former.name}:</b> {former.topic}</div>
                 </div>
      });
      this.state.mscCount = this.props.data.msc.length
      var msc = this.props.data.msc.slice(0, this.state.mscShown).map(function(msc){
          return <li key={msc.name}><b>{msc.name}</b> ({msc.year}): {msc.topic}</li>
      });
      var showScience = this.state.showScience
      var showIndustry = this.state.showIndustry
      var topics_industry = this.props.data.topics.industry.map(function(topics){
          return <li key={topics.title} className="topic-item"><b>{topics.type}</b>: {topics.title} {showIndustry && <div className="topic-description">{topics.description} {topics.url && <a href={topics.url}> Read more.</a>}</div>}</li>
      });
      var topics_academic = this.props.data.topics.academic.map(function(topics){
          return <li key={topics.title} className="topic-item">{topics.title} {showScience && <div className="topic-description">{topics.description}</div>}</li>
      });
    }


    return (
      <section id="lab">
      <div className="row">
         <div className="columns main-col">
            <h1>Learning to Learn Lab @ TU/e</h1>

            <p>I’m fortunate to work with amazing PhD and Master students. We are working together
            to automate and better understand machine learning, and use it in novel applications.
            We are part of the <a href="">TU/e Data Mining group</a>.</p>

            <div id="people-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                {people}
            </div>

            <div className="row">
               <div className="columns main-col">
                  <h2 id="open">Open positions</h2>
                  <p>These fully-funded positions are currently open. Please get in touch if you are interested! </p>
                  <div id="people-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                      {open}
                  </div>
                  <p>If there are no open positions, the only way to join the lab is to be entirely self-funded and eager to work on our main research topics.</p>
               </div>
            </div>
            <div className="row">
            <div className="columns main-col">
               <h2>Former team members</h2>
               <p>These padawans have moved on to do even greater things :)</p>
               <div className="former">
               {former}
               </div>
            </div>
            </div>

            <div className="row">
               <div className="columns main-col">
                  <h2>Master students</h2>
                  <ul className="student-list">
                      {msc}
                  </ul>
               </div>
            </div>

            <div className="twelve columns main-col">
               <a onClick={this.showMoreMsc}
               className={this.state.allMscShown ? 'hide' : 'show'}>
               <i className='fa fa-2x fa-angle-double-down'></i> { this.state.mscCount - this.state.mscShown} More</a>
            </div>

            <div className="row">
               <div className="columns main-col">
                  <h2 id="topics">New MSc research topics</h2>
                  <h5>Scientific topics</h5>
                  <a onClick={this.showScienceTopics} className={this.state.showScience ? 'hide' : 'show'}> <i className='fa fa fa-angle-double-right'></i> See descriptions</a>
                  <ul className="topic-list">
                      {topics_academic}
                  </ul>

                  <h5>Industry topics and internships</h5>
                  <a onClick={this.showIndustryTopics} className={this.state.showIndustry ? 'hide' : 'show'}> <i className='fa fa fa-angle-double-right'></i> See descriptions</a>
                  <ul className="topic-list">
                      {topics_industry}
                  </ul>
               </div>
            </div>

         </div>
      </div>

   </section>
    );
  }
}

export default Lab;
