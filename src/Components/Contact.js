import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var phone = this.props.data.phone;
    }

    return (
      <section id="contact">
        <div className="row">
            <div className="row">


            <div className="columns main-col">
              <h2>Contact</h2>
                  <p className="address">
                    <span>
                      <i className="fas fa-envelope"></i> <a href="https://maps.app.goo.gl/urNTLNcxZbDdAbyQ6">MetaForum 7.104a. Groene
                      Loper 5, 5612 AZ Eindhoven, The Netherlands</a>
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
                  You can reach me via email at j.vanschoren{" "}<i className="fas fa-at"></i>{" "}tue.nl. However, <b><i>please read the following before you do</i></b>.
                </p>
                <div className="thin-border">
                  I <i>love</i> to meet new people and hear exciting ideas! That said, I do also dedicate large blocks of time to current collaborations, students and family. I read email sparingly and in bursts. Below are tips to minimize overhead for you and
                  recieve a faster reply from me. If it still takes more than a few days, I might be particularly deep into a project - please send me a reminder (it helps!).
                  <br />
                  <br />
                  <span>
                    <b>- Meetings</b>: To book a meeting, please contact our secretaries at <b>sec.dai{" "}<i className="fas fa-at"></i>{" "}tue.nl</b>. Please propose Europe-friendly times.
                    Please note that I need my mornings to <a href="https://www.nature.com/articles/d41586-024-02381-x.pdf" target="_blank">do deep work</a>, so I prefer meetings in the afternoon. Lunchtime is always great to grab a coffee or go for a walk together. Wednesdays are always reserved for research meetings with my team. 
                  </span>
                  <br />
                  <span>
                    <b>- PhD, PostDoc, or AI Engineer applications</b>: I'm <i>honoured</i> that you are considering me as a possible advisor! Please check out <a href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3Dvanschoren%26p_category_code_arr%3D6047-461659%26p_category_code_arr%3D6047-461661%26p_category_code_arr%3D6047-461665%26p_category_code_arr%3D6047-461666%26p_category_code_arr%3D6048-461676%26_gl%3D1*1tx08a4*_up*MQ..*_ga*OTIwMzU2OTcuMTcyNTAyOTg3Ng..*_ga_JN37M497TT*MTcyNTAyOTg3NS4xLjAuMTcyNTAyOTg3NS4wLjAuMA..&page=1" target="_blank">open positions in my lab</a>, or{" "}
                    <a href="https://jobs.tue.nl/en/vacancies.html#filter=p_type%3DSEARCH_RESULTS%26p_search%3D%26p_category_code_arr%3D6047-461659%26p_category_code_arr%3D6047-461661%26p_category_code_arr%3D6047-461665%26p_category_code_arr%3D6047-461666%26p_category_code_arr%3D6048-461676&page=1" target="_blank">other positions at our department</a>.
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
                    <b>- OpenML questions</b>: For questions about OpenML, please <a href="https://github.com/openml" target="_blank">post an issue on GitHub</a> or <a href="https://www.openml.org/about" target="_blank">ask us on Slack</a>.
                  </span>
                  <br />
                  <span>
                    <b>- Thesis students</b>: I can only supervise thesis topics that are closely related to my research. 
                    You can check{" "}<a href="https://dai.win.tue.nl/masterprojects/?group=5" target="_blank">example thesis topics here</a>.
                    Our research group organizes matchmaking and interviews every semester, and I generally expect students to have obtained good grades for relevant courses.
                  </span>
                  <br />
                  <span>
                    <b>- MSc students</b>: Please ask all course-related questions on Canvas, during lectures and labs, or contact a teaching assistant. If that doesn't work, I hold office hours on
                    Tuesdays and Thursdays from 16:00 - 17:00. Please ask our secretary to find a good time (see above).
                  </span>
                  <br />
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
