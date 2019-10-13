import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import './App.css';

import LoginUserForm from './components/SignIn'
import NewUserForm from './components/SignUp'
import PlaceForm from './components/Place'
import TripList from './components/TripList'

const testUsers = 
  [ { id : 1
    , userName: "BooBoo"
    , email   : "foo@foo.com"
    , password: "123"
    }
  ]  

const worldCountries = 
  [ {placeName: "test place 1", description: "bla bla bla"}
  , {placeName: "test place 2", description: "be be be be"}
  , {placeName: "test place 3", description: "foo foo foo"}
  ]

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// class App  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
class App extends React.Component {



  state = {
      currentUserId: 2 // 0=Nobody is Signed In
    , currentUserName:'Foo Bar'
    , currentUserEmail:''
    , places: [
      { placeName:''
       ,description:''
      }
    ],
    // users:[
    //   {id : 1
    // , userName: ""
    // , email   : ""
    // , password: ""
    //   }
    // ]
  }

  componentDidMount() {
    this.getPlacesFromServer()
    // this.setState({places: worldCountries})
  }
  
  saveUserToServer = (newUser) => 
    fetch('/api/user/',
      { method  : "POST"
      , headers : { "Content-Type": "application/json" }
      , body    : JSON.stringify(newUser)
      }
    ).then(res => res.json())

  getPlacesFromServer = () =>
    fetch('/api/place/')
      .then(res => res.json())
      //.then(res => res.json()).then(console.log)
      .then(listOfPlaces => {
        this.setState({places : listOfPlaces})
      })

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
    this.saveUserToServer(newUserInfo)
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
        {/* {placesList(testPlaces)} */}
        {/* <PlaceForm addNewUser={this.addNewUser}/> */}
        {/* {console.log(this.state.places)} */}
        <PlaceForm worldCountries={this.state.places} currentUserId={this.state.currentUserId}/>
      </div>

      <div className="userCorner">
        {/* {userInfo(testUsers[0])} */}
        {/* {newUserForm()} */}
        <NewUserForm addNewUser={this.addNewUser}/>
        <LoginUserForm users={this.users} setLoginUser={this.setLoginUser}/>
        {/* {newPlaceForm()} */}
        {/* {newTripForm()} */}
      </div>

    </div>

    <div className="mapContainer">
    Place for big MAP
      {/* <img src={require("./images/choroplethUSA.png")} alt="Globe" width="100%"/> */}
      {/* <img src={require("./images/choroplethWorld.png")} alt="Globe" width="100%"/> */}

      
      <TripList currentUserId={this.state.currentUserId}
              currentUserName={this.state.currentUserName}/>

    </div>
  </div>
  )
}

export default App;
/////////////////////////  END OF class App  ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////