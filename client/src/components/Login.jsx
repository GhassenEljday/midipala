import React from "react";
const axios = require("axios");
var passwordHash = require("password-hash");


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      Ruser: "",
    };
    this.inputDetect = this.inputDetect.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  inputDetect(event, filed) {
    this.setState({ [filed]: event.target.value });
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/users").then((response) => {
      const Rdata = response.data;
      var toto = [];
      for (let i = 0; i < Rdata.length; i++) {
        toto.push(Rdata[i])
        this.setState({Ruser: toto})
      }
    })
  }

  submitInput(){
      const userL = {
        email: this.state.user,
        password: this.state.password,
      };
        const check = this.state.Ruser;
        for (let i = 0; i < check.length; i++) {
          if (check[i].email === userL.email ) {
            localStorage.setItem("exists",true);
          }
          else{
            console.log("n")
          }
        }
    }

  render() {
    return (
      <div className="login">
      <h2>Email</h2>
        <input
          className="loginp"
          type="text"
          placeholder="user name or email"
          onChange={(event) => this.inputDetect(event, "user")}
        />
        <h2>Password</h2>
        <input
          className="loginp"
          type="password"
          placeholder="password"
          onChange={(event) => this.inputDetect(event, "password")}
        />
        <button id="btnlog" className="loginp" type="submit" onClick={this.submitInput}>
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
