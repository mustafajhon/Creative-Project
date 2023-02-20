import React, { Component } from "react";
import Pro from "../project/project";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "Mustafa",
      Age: 22,
      Goal: "Travel Around The World",
      date: new Date(),
    };
  }

  UpHandler = () => {
    this.setState({ Age: this.state.Age + 1 });
  };
  DownHandler = () => {
    this.setState({ Age: this.state.Age - 1 });
  };

  ChangeName = () => {
    let input = window.prompt("Your Name:");
    this.setState({ myName: (this.state.myName = input) });
  };

  Tick = () => {
    const element = (
      <div>
        <h2>And It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    return element;
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text text-center">
            Hello {this.state.myName} you are {this.state.Age} years Old And It
            is:
            {this.state.date.toLocaleDateString()}.
          </h2>
          <div className="btns">
            <button className="btn btn-primary" onClick={this.UpHandler}>
              Increase
            </button>
            <button onClick={this.ChangeName} className="btn btn-danger">
              Click
            </button>
            <button className="btn btn-primary" onClick={this.DownHandler}>
              Decrease
            </button>
          </div>
        </div>
        <hr />
        <Pro />
      </>
    );
  }
}

export default Home;
