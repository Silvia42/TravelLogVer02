import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import '../App.css';

// Log in to Travel Log
// Email
// Password
// link: Forgot Password?
// button: Log In
//
// link: Sign Up
//______________________________
// Create Travel Log Account
// Email:
// Password
// Password 6-16
// Button: Sign Up
// Link: Log In
// By signing up, you agree to the Privacy Policy and EULA
// (Privacy Policy  and EULA are links)

////////////////////////////////////////////////////////////////////////////////
////////////////////////// class LoginUserForm  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export default class LoginUserForm extends React.Component {

    state = 
    { userName: ""
    , password: ""
    }
  
    handleInput = (evnt) => {
      let logUser = {...this.state};
      logUser[evnt.target.name] = evnt.target.value;
      this.setState(logUser)
    }
  
    handleSubmit = (evnt) => {
      evnt.preventDefault();
      
      // console.log('User was submitted',this.state)
      if (this.state.password===this.state.password) {
        this.props.setLoginUser({userName:this.state.userName})
        this.setState({ password: "", userName: ""})
      } else {
        alert("You have entered an invalid username or password!!!")
        this.setState({ password: "", userName: ""})
      }
      
    }
  
    render = () => (
    <form onSubmit={this.handleSubmit}>
      <input type="text"     name="userName"  onChange={this.handleInput} value={this.state.userName} placeholder="User Name"/>
      <input type="password" name="password"  onChange={this.handleInput} value={this.state.password}  placeholder="Password"/>
      <input type="submit"                    value="Sign In" />
    </form>
    )
  }
  //////////////////////// END OF class LoginUserForm  ///////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  
  