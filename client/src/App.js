import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import './App.css';

const testUsers = 
  [ { id : 1
    , userName: "BooBoo"
    , email   : "foo@foo.com"
    , password: "123"
    }
  ]  
const testPlaces = 
  [ {placeName: "test place 1", description: "bla bla bla", placeImageUrl:"qqq.com"}
  , {placeName: "test place 2", description: "be be be be", placeImageUrl:"www.com"}
  , {placeName: "test place 3", description: "foo foo foo", placeImageUrl:"foo.com"}
  ]

const placePreview = (place) => (
  <li>{place.id} - {place.description}</li>
)

const placesList = (places) => (
  <ul>
    {places.map(placePreview)}
  </ul>
)

const saveUserToServer = (newUser) => 
  fetch('/api/user/',
    { method  : "POST"
    , headers : { "Content-Type": "application/json" }
    , body    : JSON.stringify(newUser)
    }
  ).then(res => res.json())

////////////////////////////////////////////////////////////////////////////////
////////////////////////// class LoginUserForm  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
class LoginUserForm extends React.Component {

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


////////////////////////////////////////////////////////////////////////////////
////////////////////////// class NewUserForm  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
class NewUserForm extends React.Component {

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
    if (this.state.password1===this.state.password2) {
      this.props.addNewUser({userName:this.state.userName,email:this.state.email,password:this.state.password1})
      this.setState({ userName: "", email: "", password1: "",password2: ""})
    } else {
      alert("Both passwords must be identical!!!")
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

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// class App  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
class App extends React.Component {

  state = {
      currentUserId: 0 // Nobody is Signed In
    , currentUserName:''
    , currentUserEmail:''
    , places: [
      { placeName:''
       ,description:''
       ,placeImageUrl:''
      }
    ]
    , trips: [
      { tripDate:''
       ,userId:''
       ,placeId:''
      }
    ],
    users:[
      {id : 1
    , userName: ""
    , email   : ""
    , password: ""
      }
    ]
  }
  
  setLoginUser = (logId) => {
    this.setState({currentUserId:logId})
    console.log('this user loged in:',logId)
    // this.users.forEach(x => (x.id===logId) ? {
    //   this.setState({currentUserName : x.userName})
    //   this.setState({currentUserEmail : x.userEmail})
    //   })
  }

  addNewUser = (newUserInfo) => {
    newUserInfo=    {
        "userName": newUserInfo.userName
        , "email": newUserInfo.email
        , "password": newUserInfo.password
    } 
    // console.log('before saveUserToServer',newUserInfo)  
    saveUserToServer(newUserInfo)
      .then(newUser => {
        // console.log(newUser);
        // let users = {...this.state.users};
        // users[newUser.id] = newUser;
        // this.setState({ users, currentUser: newUser.id });
    })
  }

  render = () => (
  <div>
    <div className="topPageInfo">

      <div className="globe">
        <img src={require("./images/globe001.gif")} alt="Globe" width="80"/>
      </div>

      {/* <img src={require('/images/image-name.png')} /> */}

      <div className="dataArea">
        {placesList(testPlaces)}
      </div>

      <div className="userCorner">
        {/* {userInfo(testUsers[0])} */}
        {/* {newUserForm()} */}
        {/* <NewUserForm addNewUser={this.addNewUser}/> */}
        <LoginUserForm users={this.users} setLoginUser={this.setLoginUser}/>
        {/* {newPlaceForm()} */}
        {/* {newTripForm()} */}
      </div>

    </div>

    <div className="mapContainer">
    Place for big MAP
      {/* <img src={require("./images/choroplethUSA.png")} alt="Globe" width="100%"/> */}
      <img src={require("./images/choroplethWorld.png")} alt="Globe" width="100%"/>
    </div>
  </div>
  )
}

export default App;
/////////////////////////  END OF class App  ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////