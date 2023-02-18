import React, { Component } from "react";
class Home extends Component {
  state = { myName: "Mustafa", Age: 21, Goal: "Travel Around The World" };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text text-center">
            Hello {this.state.myName} your are {this.state.Age} years Old.
          </h2>
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
