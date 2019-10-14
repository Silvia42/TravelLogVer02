import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import '../App.css';

////////////////////////////////////////////////////////////////////////////////
////////////////////////// class NewUserForm  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export default class NewUserForm extends React.Component {

state = 
{ userName: ""
, email   : ""
, password1: ""
, password2: ""
}

handleInput = (evnt) => {
    let newUser = {...this.state};
    newUser[evnt.target.name] = evnt.target.value;
    this.setState(newUser)
}

handleSubmit = (evnt) => {
    evnt.preventDefault();
    // console.log('User was submitted',this.state)
    if (this.state.password1===this.state.password2 && this.state.password1) {
    this.props.addNewUser({userName:this.state.userName,email:this.state.email,password:this.state.password1})
    this.setState({ userName: "", email: "", password1: "",password2: ""})
    } else {
    alert("Both passwords must be identical and NOT empty!")
    this.setState({ password1: "",password2: ""})
    } 
}

render = () => (
<form onSubmit={this.handleSubmit}>
    <input type="text"     name="userName"  onChange={this.handleInput} value={this.state.userName} placeholder="User Name"/>
    <input type="email"    name="email"     onChange={this.handleInput} value={this.state.email}    placeholder="Email"/>
    <input type="password" name="password1" onChange={this.handleInput} value={this.state.password1}  placeholder="Password"/>
    <input type="password" name="password2" onChange={this.handleInput} value={this.state.password2}  placeholder="Verify password"/>
    <input type="submit"                    value="Sign Up" />
</form>
)
}
//////////////////////// END OF class NewUserForm  /////////////////////////////
////////////////////////////////////////////////////////////////////////////////