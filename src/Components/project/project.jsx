import React, { Component } from "react";
class Pro extends Component {
  state = { name: "Pro" };
  render() {
    return (
      <>
        <div className="container">
          <h2>Hello {this.state.name}</h2>
        </div>
      </>
    );
  }
}

export default Pro;
