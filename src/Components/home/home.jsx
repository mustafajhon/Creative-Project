import React, { Component } from "react";
class Home extends Component {
  state = { myName: "Mustafa", Age: 22, Goal: "Travel Around The World" };

  UpHandler = () => {
    this.setState({ Age: this.state.Age + 1 });
  };
  DownHandler = () => {
    this.setState({ Age: this.state.Age - 1 });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2 className="text text-center">
            Hello {this.state.myName} your are {this.state.Age} years Old.
          </h2>
          <div className="btns">
            <button onClick={this.UpHandler}>A</button>
            <button onClick={this.DownHandler}>V</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nisi ipsa temporibus commodi veniam dignissimos laborum consequuntur
            molestiae natus quas id, iste, delectus ducimus tempora illo
            corporis similique! Officia, necessitatibus!
          </p>
        </div>
      </>
    );
  }
}

export default Home;
