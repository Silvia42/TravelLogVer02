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

const App = () => (
  <div>
    <div className="topPageInfo">

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
    Placefor big MAP
    </div>
  </div>
)

export default App;