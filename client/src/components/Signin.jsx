import React from "react";
const axios = require("axios");
var passwordHash = require("password-hash");

// import Login from "./Login.jsx";
// import Home from "./Home.jsx";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      Cpassword: "",
    };

    this.inputDetect = this.inputDetect.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  inputDetect(event, filed) {
    this.setState({ [filed]: event.target.value });
    // check !
    console.log(this.state);
  }

  submitInput() {
    const user = {
      userName: this.state.userName,
      email: this.state.email,
      password: passwordHash.generate(this.state.password),
    };
    if (this.state.password !== this.state.Cpassword) {
      alert("check you password again !");
    } else {
      axios
        .post("/users/info", user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ email: "", password: "", Cpassword: ""});
    }
  }
  render() {
    return (
      <div className="signinS">
        <h2>User name</h2>
        <input
          className="loginp"
          type="text"
          placeholder="user name"
          onChange={(event) => this.inputDetect(event, "userName")}
          required
        />
        <h2>Email</h2>
        <input
          className="loginp"
          type="text"
          placeholder="email"
          onChange={(event) => this.inputDetect(event, "email")}
          required="text"
        />
        <h2>Password</h2>
        <input
          className="loginp"
          type="password"
          placeholder="password"
          onChange={(event) => this.inputDetect(event, "password")}
          required="text"
        />
        <h2>Confirme password</h2>
        <input
          className="loginp"
          type="password"
          placeholder="confirme password"
          onChange={(event) => this.inputDetect(event, "Cpassword")}
          required="text"
        />
        <h5 id="FP">forgot password ?</h5>
        <button
          id="btnS"
          className="loginp"
          type="submit"
          onClick={this.submitInput}
        >
          Sign up
        </button>
      </div>
    );
  }
}

export default Signin;
