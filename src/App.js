import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import News from "./Components/News";
import Software from "./Components/Software";
import Books from "./Components/Books";
import Teaching from "./Components/Teaching";
import Publications from "./Components/Publications";
import Talks from "./Components/Talks";
import Lab from "./Components/Lab";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      data: {}
    };

    ReactGA.initialize("UA-133923780-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url:
        "https://raw.githubusercontent.com/joaquinvanschoren/home/master/public/data.json",
      dataType: "json",
      cache: false,
      success: function( data ) {
        this.setState({ data: data });
      }.bind(this),
      error: function( xhr, status, err ) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <About data={this.state.data.main} />
        <News data={this.state.data.news} />
        <Software data={this.state.data} />
        <Books data={this.state.data.books} />
        <Talks data={this.state.data.talks} />
        <Teaching data={this.state.data.courses} />
        <Lab data={this.state.data.lab} />
        <Publications data={this.state.data.publications} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
