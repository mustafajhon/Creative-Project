import React, { Component } from "react";
class Home extends Component {
  state = { myName: "Mustafa", Age: 22, Goal: "Travel Around The World" };

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
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text text-center">
            Hello {this.state.myName} you are {this.state.Age} years Old.
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
        <div className="container-fluid">
          <div className="row">
            <div className="half  col-md-6">
              <div className="box1">Box1</div>
              <div className="box1">Box2</div>
              <div className="box1">Box3</div>
            </div>

            <div className="col-md-6"></div>
          </div>
        </div>
        <hr />
        <div className="div">
          <div className="divin">
            <h2>hello</h2>
          </div>
          <div className="divin">
            <h2>hello</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
