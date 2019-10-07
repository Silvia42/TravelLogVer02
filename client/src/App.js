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

const newUserForm = () => (
  <form>
    <input type="text"     name="userName"  value="" placeholder="User Name"/>
    <input type="email"    name="email"     value="" placeholder="Email"/>
    <input type="password" name="password1" value="" placeholder="Password"/>
    <input type="password" name="password2" value="" placeholder="Verify password"/>
    <input type="submit"                    value="Sign Up" />
  </form>
)

class App extends React.Component {

  state = {
    currentUser: 1,
    users: testUsers
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
        {newUserForm()}
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