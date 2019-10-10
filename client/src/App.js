import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import './App.css';

import LoginUserForm from './components/SignIn'
import NewUserForm from './components/SignUp'

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