import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import '../App.css';


////////////////////////////////////////////////////////////////////////////////
//////////////////////////    class TripList    ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export default class TripList extends React.Component {
    state = {
        wcObject : [] //null
      }

objectFromListById=(places) =>
    places.reduce((obj,plc) => {
    obj[plc.id] = plc;
    return obj
    },{})      

componentDidMount() {
    let wc=this.props.worldCountries
    let b = wc ? 
           this.objectFromListById(wc) : []
    this.setState({"wcObject":b})
    console.log('fffff',this.state.wcObject)
    }

// showTrip = (x) => (<h5>{x.place} visited in {x.tripDate} </h5>)
// showTrip = (x) => (console.log(typeof x.tripDate)) // string
// showTrip = (x) => (console.log(x.tripDate.slice(0,4)))
showTrip = (x) => (<h5>{x.place} visited in {x.tripDate.slice(0,4)} </h5>)

showTripWithPlaceName = (x) => {
    console.log(this.state.wcObject ? this.state.wcObject : null)
    // return (<h5>{this.state.wcObject[x.place].placeName} 
    //         VISITED IN {x.tripDate.slice(0,4)} </h5>)
}

render = () => (
    <div>
        {/* I am in TripList {this.props.var42} */}
        <img src={require("../images/choroplethWorld.png")} alt="Globe" width="100%"/>
        {/* <h3>User {this.props.currentUserId}  have visited this countries:  </h3> */}
        {/* <h3>User {this.props.currentUserName}  have visited this countries:  </h3> */}
        <h3>You have visited this countries:  </h3>

        {/* {console.log(this.state.trips)} */}
        {this.props.trips.map(this.showTrip)}
        {/* {(this.state.loading) ? null : this.props.trips.map(this.showTripWithPlaceName)} */}

        {this.state.wcObject ? this.props.trips.map(this.showTripWithPlaceName) : null}



        </div>
  )
}


/////////////////////////  END OF class TripList  //////////////////////////////
////////////////////////////////////////////////////////////////////////////////   