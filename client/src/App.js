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
      currentUserId: 4 // 0=Nobody is Signed In
    , currentUserName:'Foo Bar'
    , currentUserEmail:''
    , places: [
      { placeName:''
       ,description:''
      }
    ],
    trips: [
      {
      tripDate: '2019',
      user: 0,
      place: 0
      }
    ],
    var42:0, // used for solving callbackFromPlace
    // users:[
    //   {id : 1
    // , userName: ""
    // , email   : ""
    // , password: ""
    //   }
    // ]
  }

  callback42 = (data) => {
    // console.log(data)
    // console.log(data)
    this.setState({"var42":data.var42})
    let t=[...this.state.trips]
    
    // console.log('tttt',t)
    t.push({"user":this.state.currentUserId, 
            "tripDate":data.tripDate,
            "place":parseInt(data.place)
          })
    // t.push(data)
    this.setState({"trips":t})
    // console.log('42',this.state.trips)
    // this.setState(
    //   {"trips": [
    //     {
    //     tripDate: '2019',
    //     user: 0,
    //     place: 0
    //     }]}
    // )

  }

  // callbackFromPlace = () => {
  //   // this.setState({trips: childData})
  //   this.getTripsFromServer()
  // }

  componentDidMount() {
    this.getPlacesFromServer()
    .then(this.getTripsFromServer())
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

  // getTripsFromServer for all Users      
  // getTripsFromServer = () =>
  //   fetch('/api/trip/')
  //       .then(res => res.json())
  //       //.then(res => res.json()).then(console.log)
  //       .then(listOfTrips => {
  //           this.setState({trips : listOfTrips})
  //     })

  // Only for current User:  http://localhost:8000/api/tripbyuserid/3/  
  getTripsFromServer = () =>
    fetch('/api/tripbyuserid/'+this.state.currentUserId.toString()+'/')
        .then(res => res.json())
        //.then(res => res.json()).then(console.log)
        .then(listOfTrips => {
            this.setState({trips : listOfTrips})
      })    

  setLoginUser = (logId) => {
    this.setState({currentUserId:logId})
    // console.log('this user loged in:',logId)
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
        <PlaceForm worldCountries={this.state.places} 
                   currentUserId={this.state.currentUserId}
                  //  callbackFromPlace={this.callbackFromPlace}
                   callback42={this.callback42}
                  // Child action={this.childHandler}
                   />
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
    {/* {this.state.var42} */}
      {/* <img src={require("./images/choroplethUSA.png")} alt="Globe" width="100%"/> */}
      {/* <img src={require("./images/choroplethWorld.png")} alt="Globe" width="100%"/> */}

      
      <TripList currentUserId={this.state.currentUserId}
              currentUserName={this.state.currentUserName}
              worldCountries={this.state.places} 
              trips={this.state.trips}
              var42={this.state.var42}
              />

    </div>
  </div>
  )
}

export default App;
/////////////////////////  END OF class App  ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////