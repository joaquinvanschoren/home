(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(13),r=t.n(s),c=(t(21),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),h=t(11),d=t(14),p=t.n(d),E=(t(25),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},e)),l.a.createElement("li",{className:"hidesmall"},l.a.createElement("a",null,"|")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#news"},"News")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#software"},"Software")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#books"},"Books")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#talks"},"Talks")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#lab"},"Lab")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#pubs"},"Publications")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi!"),l.a.createElement("h3",null,"I'm a scientist on a quest to build AI systems that learn how to learn, making machine learning more ",l.a.createElement("i",null,"automatic"),", ",l.a.createElement("i",null,"frictionless")," and ",l.a.createElement("i",null,"never-ending"),". I could use some help :)"),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},a))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Joaquin Vanschoren"),l.a.createElement("li",null,"Built with React based on a design by Tim Baker and Styleshout"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image,a=this.props.data.phone,t=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:e,alt:"Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I am an ",l.a.createElement("a",{href:"https://www.tue.nl/en/research/researchers/joaquin-vanschoren/"},"assistant professor of machine learning at TU/e"),". I teach machines to learn how to learn, so that they can learn ",l.a.createElement("i",null,"automatically and continuously")," from one task to the next (much like we do). To enable this, machine learning must become ",l.a.createElement("i",null,"frictionless"),", ",l.a.createElement("i",null,"efficient")," and ",l.a.createElement("i",null,"never-ending"),".",l.a.createElement("br",null)," I founded ",l.a.createElement("a",{href:"https://www.openml.org"},"OpenML.org"),", an online platform for sharing data, code, models and experiments in an open, frictionless, and reproducible way, so that we can all learn from our collective past experience and build ever-better learning systems."),l.a.createElement("a",{href:t,className:"button pull-right"},l.a.createElement("i",{className:"fa fa-download"})," Download Resume"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-envelope"})," MetaForum 7.104a. Groene Loper 5, 5612 AZ Eindhoven, The Netherlands"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-phone"})," ",a),l.a.createElement("br",null)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",null,"Email"),l.a.createElement("p",{className:"address"},"I try to dedicate my time to current projects, students and family. As such, I use email sparingly. A few tips to make both our lives easier:",l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"- PhD positions"),": Check for ",l.a.createElement("a",{href:"#open"},"available opportunities"),"."),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"- MSc Students"),": Check ",l.a.createElement("a",{href:"#topics"},"MSc research topics"),". Use Canvas for course-related questions."),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"- Meetings"),": Book a time slot via Jose, our friendly secretary, at wsinfsys@tue.nl."),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"- Unsolicited job offers"),": No thank you (unless it's truly amazing :))"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"Otherwise, if you have a topic that you think will really really interest me, you can contact me at j.vanschoren ",l.a.createElement("i",{className:"fas fa-at"})," tue.nl. Thanks!")))))))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={newsShown:3,allNewsShown:!1,invitedShown:3,allInvitedShown:!1},t.showMoreNews=function(){t.setState(function(e){return{newsShown:t.props.data.news.length,allNewsShown:!0}})},t.showMoreInvited=function(){t.setState(function(e){return{invitedShown:t.props.data.invited.length,allInvitedShown:!0}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){this.state.newsCount=this.props.data.news.length,this.state.invitedCount=this.props.data.invited.length;var e=this.props.data.news.slice(0,this.state.newsShown).map(function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("a",{className:"newsitem",href:e.link},e.title),l.a.createElement("em",{className:"date"},e.time),l.a.createElement("p",null,e.description))}),a=this.props.data.invited.slice(0,this.state.invitedShown).map(function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("a",{className:"newsitem",href:e.link},e.title),e.slides&&l.a.createElement("a",{href:e.slides},l.a.createElement("i",{className:"fa fa-lg fa-desktop"})),l.a.createElement("em",{className:"date"},e.time),l.a.createElement("p",null,e.description))})}return l.a.createElement("section",{id:"news"},l.a.createElement("div",{className:"row separated"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"News"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("a",{onClick:this.showMoreNews,className:this.state.allNewsShown?"hide":"show"},l.a.createElement("i",{className:"fa fa-2x fa-angle-double-down"})," ",this.state.newsCount-this.state.newsShown," More"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Invited talks"))),l.a.createElement("div",{className:"nine columns main-col"},a),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("a",{onClick:this.showMoreInvited,className:this.state.allInvitedShown?"hide":"show"},l.a.createElement("i",{className:"fa fa-2x fa-angle-double-down"})," ",this.state.invitedCount-this.state.invitedShown," More"))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"software"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/expdblogo2.png",alt:"Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"OpenML"),l.a.createElement("p",null,"I founded ",l.a.createElement("a",{href:"https://www.openml.org"},"OpenML.org"),", an online platform for sharing data, code, models and experiments in an open and reproducible way, so that we can all learn from our collective past experience and build ever-better learning systems."),l.a.createElement("p",null,"OpenML is being developed and maintained by ",l.a.createElement("a",{href:"https://www.openml.org/contact"},"an awesome team")," of researchers and software developers. ",l.a.createElement("b",null,l.a.createElement("i",null,"Join us!"))),l.a.createElement("a",{href:"https://www.github.com/openml",className:"button pull-right"},l.a.createElement("i",{className:"fab fa-github"})," OpenML on GitHub"),l.a.createElement("br",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/software_placeholder.png",alt:"Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"GAMA"),l.a.createElement("p",null,"The Genetic Automated Machine learning Assistant is an open-source AutoML tool that automatically builds and optimizes machine learning pipelines using evolutionary techniques. It is being developed by ",l.a.createElement("a",{href:"#lab"},"Pieter Gijsbers"),"."),l.a.createElement("p",null,"Learn more in the ",l.a.createElement("a",{href:"http://joss.theoj.org/papers/10.21105/joss.01132"},"JOSS paper")," and the ",l.a.createElement("a",{href:"https://pgijsbers.github.io/gama/"},"documentation"),"."),l.a.createElement("a",{href:"https://github.com/PGijsbers/gama",className:"button pull-right"},l.a.createElement("i",{className:"fab fa-github"})," GAMA on GitHub"),l.a.createElement("br",null))))}}]),a}(n.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map(function(e){var a=e.image;return l.a.createElement("div",{key:e.title,className:"twelve columns books-item"},l.a.createElement("div",{className:"item-wrap two columns"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}))),l.a.createElement("div",{className:"item-details nine columns"},l.a.createElement("h2",null,e.title),l.a.createElement("h4",null,e.subtitle),l.a.createElement("h6",null,"Open Access"),l.a.createElement("p",null,e.description),l.a.createElement("a",{href:e.url,className:"button btn-outline-primary"},l.a.createElement("i",{className:"fa fa-lg fa-globe"})," Book website"),l.a.createElement("a",{href:e.source,className:"button btn-outline-primary"},l.a.createElement("i",{className:"fa fa-lg fa-file"})," PDF files"),l.a.createElement("a",{href:e.amazon,className:"button btn-outline-primary"},l.a.createElement("i",{className:"fa fa-lg fa-book"})," Buy it on Amazon")))});return l.a.createElement("section",{id:"books"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Books"),l.a.createElement("div",{id:"books-wrapper",className:""},e))))}}]),a}(n.Component),g=t(10),y=function(e){function a(e){var t;Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this))).pubtypes=["journal papers","conference papers","workshop papers","book chapters","books edited","dissertations"],t.state={},t.publist=[],t.show_more=function(e){var a=e.target.getAttribute("value"),n=t.state[a+"_count"];t.setState(function(e){var t;return t={},Object(g.a)(t,a+"_shown",n),Object(g.a)(t,a+"_allShown",!0),t})};for(var n=0;n<t.pubtypes.length;n++){var l=t.pubtypes[n];t.state[l+"_shown"]=3,t.state[l+"_allShown"]=!1}return t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){for(var e={},a=0;a<this.pubtypes.length;a++){var t=this.pubtypes[a],n=this.props.data[t];this.state[t+"_count"]=n.length,this.state[t+"_count"]<=this.state[t+"_shown"]&&(this.state[t+"_allShown"]=!0),e[t]=n.slice(0,this.state[t+"_shown"]).map(function(e){return l.a.createElement("div",{className:"citation",key:e.title},e.authors,l.a.createElement("br",null),l.a.createElement("a",{href:e.url},e.title)," ",l.a.createElement("i",null,e.reference))})}this.publist=[];for(var s=0;s<this.pubtypes.length;s++){var r=this.pubtypes[s];this.publist.push(l.a.createElement("div",{className:"row",key:r},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,r))),l.a.createElement("div",{className:"ten columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e[r]))),l.a.createElement("div",{className:"ten columns main-col pubmore"},l.a.createElement("a",{onClick:this.show_more,value:r,className:this.state[r+"_allShown"]?"hide":"show"},l.a.createElement("i",{className:"fa fa-2x fa-angle-double-down"})," ",this.state[r+"_count"]-this.state[r+"_shown"]," More"))))}}return l.a.createElement("section",{id:"pubs"},l.a.createElement("div",{className:"row separated"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h2",null,"Publications"),l.a.createElement("div",{className:"toplink"},"Publications ordered by type and date (newest first), linked to PDFs.",l.a.createElement("br",null),"Preprints are listed on ",l.a.createElement("a",{href:"https://arxiv.org/search/?query=joaquin+vanschoren&searchtype=all&abstracts=show&order=-announced_date_first&size=50"},"Arxiv"),". For citations, see ",l.a.createElement("a",{href:"http://scholar.google.nl/citations?user=HhDsD9UAAAAJ&hl=en&oi=ao"},"Google Scholar"),"."),l.a.createElement("div",null,this.publist))))}}]),a}(n.Component),k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map(function(e){var a="images/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns talks-item"},l.a.createElement("div",{className:"item-wrap"},"video"===e.type&&l.a.createElement("div",{className:"iframe-container"},l.a.createElement("iframe",{title:e.title,src:e.url,maxheight:"auto",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),"slideshare"===e.type&&l.a.createElement("div",{className:"iframe-container"},l.a.createElement("iframe",{title:e.title,src:e.url,maxheight:"auto",frameBorder:"0",allowFullScreen:!0})),"slides"===e.type&&l.a.createElement("div",{className:"slide-container"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"talks-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"}))))),l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.description,"video"===e.type&&l.a.createElement("a",{href:e.slides,className:"pull-right"},l.a.createElement("i",{className:"fa fa-desktop"})," Slides")))});return l.a.createElement("section",{id:"talks"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Talks"),l.a.createElement("div",{id:"talks-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e))))}}]),a}(n.Component),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={mscShown:6,allMscShown:!1,showScience:!1,showIndustry:!1},t.showMoreMsc=function(){t.setState(function(e){return{mscShown:t.props.data.msc.length,allMscShown:!0}})},t.showScienceTopics=function(){t.setState(function(e){return{showScience:!0}})},t.showIndustryTopics=function(){t.setState(function(e){return{showIndustry:!0}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.people.map(function(e){var a="images/"+e.picture;return l.a.createElement("div",{className:"columns people-item",key:e.name},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Profile Pic"})),l.a.createElement("h5",null,e.name),l.a.createElement("h6",null,e.role),l.a.createElement("p",null,e.topic))}),a=this.props.data.open.map(function(e){var a="images/"+e.picture;return l.a.createElement("div",{className:"columns people-item",key:e.name},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Profile Pic"})),l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.topic))}),t=this.props.data.former.map(function(e){var a="images/"+e.picture;return l.a.createElement("div",{className:"row",key:e.name},l.a.createElement("div",{className:"former-img two columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Profile Pic"})),l.a.createElement("div",{className:"former-info ten columns main-col"},l.a.createElement("b",null,e.name,":")," ",e.topic))});this.state.mscCount=this.props.data.msc.length;var n=this.props.data.msc.slice(0,this.state.mscShown).map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("b",null,e.name)," (",e.year,"): ",e.topic)}),s=this.state.showScience,r=this.state.showIndustry,c=this.props.data.topics.industry.map(function(e){return l.a.createElement("li",{key:e.title,className:"topic-item"},l.a.createElement("b",null,e.type),": ",e.title," ",r&&l.a.createElement("div",{className:"topic-description"},e.description," ",e.url&&l.a.createElement("a",{href:e.url}," Read more.")))}),i=this.props.data.topics.academic.map(function(e){return l.a.createElement("li",{key:e.title,className:"topic-item"},e.title," ",s&&l.a.createElement("div",{className:"topic-description"},e.description))})}return l.a.createElement("section",{id:"lab"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h1",null,"Learning to Learn Lab @ TU/e"),l.a.createElement("p",null,"I\u2019m fortunate to work with amazing PhD and Master students. We are working together to automate and better understand machine learning, and use it in novel applications. We are part of the ",l.a.createElement("a",{href:""},"TU/e Data Mining group"),"."),l.a.createElement("div",{id:"people-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",{id:"open"},"Open positions"),l.a.createElement("p",null,"These fully-funded positions are currently open. Please get in touch if you are interested! "),l.a.createElement("div",{id:"people-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},a),l.a.createElement("p",null,"If there are no open positions, the only way to join the lab is to be entirely self-funded and eager to work on our main research topics."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",null,"Former team members"),l.a.createElement("p",null,"These padawans have moved on to do even greater things :)"),l.a.createElement("div",{className:"former"},t))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",null,"Master students"),l.a.createElement("ul",{className:"student-list"},n))),l.a.createElement("div",{className:"twelve columns main-col"},l.a.createElement("a",{onClick:this.showMoreMsc,className:this.state.allMscShown?"hide":"show"},l.a.createElement("i",{className:"fa fa-2x fa-angle-double-down"})," ",this.state.mscCount-this.state.mscShown," More")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",{id:"topics"},"MSc research topics"),l.a.createElement("p",null,"Below is a selection of ideas for MSc thesis topics (or Capita Selecta projects). I also welcome your own ideas along these lines. Note that, in principle, I tend to only accept students that received 80% or higher on a machine-learning related course or the data mining seminar."),l.a.createElement("p",null,"Due to time constraints, I typically do not supervise industry internships."),l.a.createElement("h5",null,"Scientific topics"),l.a.createElement("a",{onClick:this.showScienceTopics,className:this.state.showScience?"hide":"show"}," ",l.a.createElement("i",{className:"fa fa fa-angle-double-right"})," See descriptions"),l.a.createElement("ul",{className:"topic-list"},i),l.a.createElement("h5",null,"Industry topics"),l.a.createElement("a",{onClick:this.showIndustryTopics,className:this.state.showIndustry?"hide":"show"}," ",l.a.createElement("i",{className:"fa fa fa-angle-double-right"})," See descriptions"),l.a.createElement("ul",{className:"topic-list"},c))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns main-col"},l.a.createElement("h2",null,"Teaching"),l.a.createElement("p",null,"I teach several master-level courses on machine learning. Most of my materials are ",l.a.createElement("a",{href:"https://joaquinvanschoren.github.io/ML-course/"},"publicly available on Canvas"),". Other materials are available to students on ",l.a.createElement("a",{href:"https://canvas.tue.nl/"},"Canvas"),"."))))))}}]),a}(n.Component),O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",data:{}},h.a.initialize("UA-133923780-1"),h.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"https://raw.githubusercontent.com/joaquinvanschoren/home/master/public/data.json",dataType:"json",cache:!1,success:function(e){this.setState({data:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.data.main}),l.a.createElement(v,{data:this.state.data.main}),l.a.createElement(w,{data:this.state.data.news}),l.a.createElement(b,{data:this.state.data}),l.a.createElement(N,{data:this.state.data.books}),l.a.createElement(k,{data:this.state.data.talks}),l.a.createElement(j,{data:this.state.data.lab}),l.a.createElement(y,{data:this.state.data.publications}),l.a.createElement(f,{data:this.state.data.main}))}}]),a}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=t(29);r.a.render(l.a.createElement(C.a,{basename:"/home"},l.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/home",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/home","/service-worker.js");S?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):M(e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.8eef0f03.chunk.js.map