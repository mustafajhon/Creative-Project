import React, { Component } from "react";
class Pro extends Component {
  state = { name: "Pro" };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text text-center">Hello {this.state.name}</h2>
        </div>

        <div className="col-md-5">
          <div className="form">
            <label htmlFor="">Your Name</label>
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              className="form-control"
            />
            <br></br>
            <label htmlFor="">Your LastName</label>
            <input
              placeholder="Your LastName"
              type="text"
              id="lname"
              className="form-control"
            />
            <br />
            <label htmlFor="">Your Email</label>
            <input
              placeholder="Your Email"
              type="email"
              id="email"
              className="form-control"
            />
            <br />
            <label htmlFor="">Your Password</label>
            <input
              placeholder="Your Password"
              type="password"
              id="pass"
              className="form-control"
            />
            <br />
            <button onClick={this.BtnHandler} className="btn btn-secondary">
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }

  BtnHandler = () => {
    var value = document.getElementById("name").value;
    var lanme = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    console.log(
      `Your Name: ${value} Your LastName: ${lanme} Your email: ${email} Your password: ${pass}`
    );
    alert("Confirmed");
  };
}

export default Pro;
