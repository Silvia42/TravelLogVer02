import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import '../App.css';


////////////////////////////////////////////////////////////////////////////////
//////////////////////////    class TripList    ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export default class TripList extends React.Component {
    state = {
        trips: [
            {
            tripDate: '2019',
            user: 0,
            place: 0
            }
          ]
      }

componentDidMount() {
    this.getTripsFromServer()
    // this.setState({places: worldCountries})
}

getTripsFromServer = () =>
    fetch('/api/trip/')
        .then(res => res.json())
        //.then(res => res.json()).then(console.log)
        .then(listOfTrips => {
            this.setState({trips : listOfTrips})
    })

// showTrip = (x) => (<h5>{x.place} visited in {x.tripDate} </h5>)
// showTrip = (x) => (console.log(typeof x.tripDate)) // string
// showTrip = (x) => (console.log(x.tripDate.slice(0,4)))
showTrip = (x) => (<h5>{x.place} visited in {x.tripDate.slice(0,4)} </h5>)


render = () => (
    <div>
        <img src={require("../images/choroplethWorld.png")} alt="Globe" width="100%"/>
        <h3>User {this.props.currentUserId}  have visited this countries:  </h3>
        <h3>User {this.props.currentUserName}  have visited this countries:  </h3>

        {/* {console.log(this.state.trips)} */}
        {this.state.trips.map(this.showTrip)}




        </div>
  )
}


/////////////////////////  END OF class TripList  //////////////////////////////
////////////////////////////////////////////////////////////////////////////////        