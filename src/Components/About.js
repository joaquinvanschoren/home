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
              I am an {" "}
              <a href="https://www.tue.nl/en/research/researchers/joaquin-vanschoren/">
                associate professor at TU Eindhoven
              </a>
              . My team and I build AI systems that learn continually and automatically assemble 
              themselves to learn faster and better, often inspired by the human brain. 
              I founded <a href="https://www.openml.org">OpenML</a>, an open science platform to democratize machine learning, 
              started the <a href="https://neuripsconf.medium.com/announcing-the-neurips-2021-datasets-and-benchmarks-track-644e27c1e66c">NeurIPS Datasets and Benchmarks track</a> to incentivize 
              better training data and evaluations, and work with MLCommons on <a href="https://mlcommons.org/working-groups/ai-safety">AI Safety</a>, <a href="https://mlcommons.org/working-groups/data/croissant/">ML standards</a>, and <a href="https://mlcommons.org/working-groups/research/dmlr/">data-centric AI</a>.
              </p>
              <p>I am a founding member of <a href="https://ellis.eu/">ELLIS</a> and  <a href="https://claire-ai.org/">CLAIRE</a>, co-wrote a <a href="https://link.springer.com/book/10.1007/978-3-030-05318-5">leading book on AutoML</a>, gave <a href="https://www.youtube.com/watch?v=0eBR8a4MQ30">tutorials at NeurIPS</a> and AAAI, won several awards (including the <a href="https://researchdata.nl/en/history-dutch-data-prize/">Dutch Data Prize</a> and <a href="https://www.amazon.science/research-awards">Amazon Research Award</a>),
              and I've been interviewed for articles in <a href="https://www.nature.com/articles/d41586-023-03817-6">Nature</a>, <a href="https://www.science.org/content/article/computers-ace-iq-tests-still-make-dumb-mistakes-can-different-tests-help">Science</a>, and <a href="https://podcasts.apple.com/us/podcast/20-dr-joaquin-vanschoren-on-making-data-public/id1541228337?i=1000520520443">science podcasts</a>. I am always eager to collaborate with new people. Do reach out!
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
                <h2>How to contact me</h2>
                <p className="address">
                  You can reach to me via email at j.vanschoren{" "}<i className="fas fa-at"></i>{" "}tue.nl. However, <b>please read the following before you do</b>.
                </p>
                <p>
                  I am always <i>very eager</i> to collaborate with bright people and hear exciting ideas, and will respond as fast as I can.
                  However, please note that I also have to dedicate large blocks of time to current projects, students and
                  family. As such, <i>I read email sparingly</i> (and in bursts) and may sometimes take a few days to reply. Below are a few common reasons for why you 
                  might want to reach out to me, and the optimal action to take. If you have and I don't reply within a few days, please send me a reminder (it helps :)).
                  <br />
                  <span>
                    <b>- Meetings</b>: To book a meeting for an ongoing project or collaboration, please contact our secretary at <b>sec.dai{" "}<i className="fas fa-at"></i>{" "}tue.nl</b>. Please propose Europe-friendly times.
                     Please note that I need my mornings to do deep work, so I generally prefer meetings in the afternoon. Lunchtime is always great to grab a coffee or have a walking meeting. For emergency meetings, I have prescheduled time at 11:00. Wednesdays are reserved for research meetings with my team. 
                  </span>
                  <br />
                  <span>
                    <b>- PhD, PostDoc, or Research Engineer applications</b>: I'm <i>honoured</i> that you are considering me as a possible advisor! All our open positions can by found on our {" "}
                    <a href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3D%26p_category_code_arr%3D6047-461659%26p_category_code_arr%3D6047-461661%26p_category_code_arr%3D6047-461665%26p_category_code_arr%3D6047-461666%26p_category_code_arr%3D6048-461676&page=1">job board</a> (search for my name).
                    Without an open position, you need to be self-funded or have a scholarship.
                  </span>
                  <br />
                  <span>
                    <b>- Internship applications</b>: Sadly, our lab is generally not able to support interns. If we do, it will also be posted on the job board above.
                  </span>
                  <br />
                  <span>
                    <b>- Collaboration requests</b>: I <i>love</i> discussing new ideas and collaborations. However, I can only <i>really</i> engage in a few collaborations per year. Please clearly explain
                    what you want to explore together, how it aligns with my work, and how you want to practically collaborate. We welcome visitors to our lab, but we generally expect you to stay for at least a few months. 
                  </span>
                  <br />
                  <span>
                    <b>- Talk invitations</b>: I always find that invited talks are extremely stimulating. If will do my best to accept virtual talks, and in-person
                    talks even more so, if travel and family obligations allow. Please provide a clear topic and audience, and ideally a few dates.
                  </span>
                  <br />
                  <span>
                    <b>- PhD defenses</b>: I am happy to assist in PhD defenses on topics that closely align with my research, but realistically can only do a few per year.  
                  </span>
                  <br />
                  <span>
                    <b>- OpenML questions</b>: For questions about OpenML, please post an issue on GitHub (see https://github.com/openml) or Slack (https://www.openml.org/about).
                  </span>
                  <br />
                  <span>
                    <b>- Thesis students</b>: I can only supervise topics that are closely related to my research. 
                    You can check{" "}<a href="https://dai.win.tue.nl/masterprojects/?group=5">example thesis topics here</a>.
                    Our groups organizes matchmaking and interviews every semester, and I generally expect students to have obtained good grades for relevant courses.
                  </span>
                  <br />
                  <span>
                    <b>- MSc students</b>: Please ask all course-related questions on Canvas, during lectures and labs, or contact a teaching assistant. If that doesn't work, I hold office hours on
                    Tuesdays and Thursdays from 16:00 - 17:00. Please ask our secretary to find a good time (see above).
                  </span>
                  <br />
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
