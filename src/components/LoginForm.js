import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.username === "" ||this.state.password ==="")return

    this.props.handleLogin(this.state)
  }
  

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange ={this.handleChange} value = {this.state.username}name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange ={this.handleChange} value = {this.state.password}name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
