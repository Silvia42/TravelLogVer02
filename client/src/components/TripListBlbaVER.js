import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import '../App.css';


////////////////////////////////////////////////////////////////////////////////
//////////////////////////    class TripList    ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export default class TripList extends React.Component {
 
    state = {
    //   wcObject : {}
    // ,loading: true
      }

// sleep = (milliseconds) => {
//     return new Promise((resolve) => setTimeout(resolve, milliseconds));
//     };

// wait = async (milliseconds = 2000) => {
//     await this.sleep(milliseconds);
//     this.setState({
//         loading: false
//     });
//     };      

// showTrip = (x) => (<h5>{x.place} visited in {x.tripDate} </h5>)
// showTrip = (x) => (console.log(typeof x.tripDate)) // string
// showTrip = (x) => (console.log(x.tripDate.slice(0,4)))
showTrip = (x) => (<h5>{x.place} visited in {x.tripDate.slice(0,4)} </h5>)

showTripWithPlaceName = (x) => {
    // console.log('qqqwerty',this.props.wcObject)
    return (<h5>{this.props.wcObject[x.place].placeName} visited in {x.tripDate.slice(0,4)} </h5>)
}

showItem = (x) => (<h4>{x.placeName}</h4>)

showTripWithPlaceName2 = (x) => {
    let c=[...this.props.worldCountries]
    let d=c.filter(y=>y.id===x.place)
    console.log('ddddd',d)
    let q=d[0].placeName
    console.log('qqqqqq',q)
    return (<h5>{ q } 
        VISITED in {x.tripDate.slice(0,4)} </h5>)
    }

componentDidMount() {
    // this.wait(2000)
    let wc=this.props.worldCountries
    let b= (wc != undefined) ? 
            this.objectFromListById(wc) : null
    this.setState({"wcObject":b})
    console.log('fffff',this.state.wcObject)
    }

// render() {
//     let myComponent;
//     if(check if props has val) {
//         myComponent = <MyComponent />
//     } else {
//         myComponent = null
//     }
//     return (
//         <div>
//             {myComponent}
//         </div>
//     )
// }

render = () => (
    <div>
        {/* I am in TripList {this.props.var42} */}
        <img src={require("../images/choroplethWorld.png")} alt="Globe" width="100%"/>
        <h3>User {this.props.currentUserId}  have visited this countries:  </h3>
        <h3>User {this.props.currentUserName}  have visited this countries:  </h3>

        {/* {console.log(this.state.trips)} */}
        {this.props.trips.map(this.showTrip)}
        {/* {this.makeWCObject()} */}
        {/* {this.props.trips.map(this.showTripWithPlaceName)} */}
        {console.log('aaa',this.state.wcObject)}
        {/* {this.props.wcObject["533"].placeName} */}
        {console.log('bbb',this.props.wcObject)}
        {/* {this.props.wcObject["533"].placeName} */}
         {/* {this.props.trips.map(this.showTripWithPlaceName)} */}
         {/* {this.props.wcObject.map((x) => (<h5>{x.place})</h5>))} */}

         {this.props.trips.map(this.showTripWithPlaceName2)}

         {this.props.worldCountries.map(this.showItem)}

        </div>
  )
}


/////////////////////////  END OF class TripList  //////////////////////////////
////////////////////////////////////////////////////////////////////////////////     

// if("geolocation" in navigator) {
// 	navigator.geolocation.getCurrentPosition(function(position) {
// 		console.log(position);
// 	});
// }