import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; //#RR#
import '../App.css';

const placePreview = (place) => (
    <li>{place.id} - {place.description}</li>
  )

const placesList = (places) => (
    <ul>
      {/* {places.map(placePreview)} */}
    </ul>
  )

//   { placeName:''
//   ,description:''
//  }



// {
// return (
//     // <div className="oneItem">
//     {/* Name: &nbsp;&nbsp;  */}

//     <option value={x.id}>{x.placeName}</option>

//     {/* <a target="_blank" href={x.description}>{x.placeName} </a> */}

//     {/* <br /> */}
//     {/* Description: {x.description} <br /> */}
//     {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
//     {/* <br /> */}
//     // </div>
// )
// }

////////////////////////////////////////////////////////////////////////////////
////////////////////////// class PlaceForm  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export default class PlaceForm extends React.Component {
    state = {
        place: 0,
        //date: Date.now()
        tripDate:new Date().toISOString().slice(0,10)
      }

    handleInput = (evnt) => {
        let newVal = {...this.state};
        newVal[evnt.target.name] = evnt.target.value;
        this.setState(newVal)
    }

    saveTripToServer = (newTrip) => 
        fetch('/api/trip/',
        { method  : "POST"
        , headers : { "Content-Type": "application/json" }
        , body    : JSON.stringify(newTrip)
        }
    ).then(res => res.json())


    addNewTrip = (trip) => {
        console.log('I want save on server:',{"user":this.props.currentUserId,...trip})
        this.saveTripToServer({"user": this.props.currentUserId,...trip})
        .then(this.props.callback42({var42: Math.random(42),...trip }))

        //   .then(newIssue => {
        //     let users = {...this.state.users};
        //     users[this.state.currentUser].issues.push(newIssue);
        //     this.setState({ users });
        //   })
        // 
        // this.setState({ trip })
        //console.log("I am adding a new trip", trip)
        //console.log("Actual user is:", this.props.currentUserId)
      }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log('From form I got: ',this.state)
        if (this.state.place)
        {this.addNewTrip(this.state)
        }else{
        alert("Country must be selected!!!") 
        } 
        this.setState({ place: 0, date:new Date().toISOString().slice(0,10)})
        // .then(this.props.callbackFromPlace)
        // .then(this.props.callback42({var42: Math.random(42)}))
        // this.props.action('Set Parent state set from child: ' + Math.floor(Math.random() * 999))
    }
  
    showItem = (x) => (<option value={x.id}>{x.placeName}</option>)

    render = () => (
        <div>
            <form onSubmit={this.handleSubmit}>

            {/* <select value={0} onChange={(evnt) => console.log(evnt.target.value)}>  */}
            <select name="place" value={this.state.place} onChange={this.handleInput}>   
            {/* {console.log(this.state.place)}  */}
            {/* {this.state.place} */}
                <option value = {0}>Choose country</option>
                {this.props.worldCountries.map(this.showItem)}
            </select>
                {/* {console.log('worldCountries',this.props.worldCountries)} */}
                {/* <p>{this.props.worldCountries.map(showItem)}</p>  */}  
            <input type="date"  name="tripDate"  value={this.state.date}   onChange={this.handleInput}/>
            <input type="submit"                    value="Add this trip" />
            {/* <h4>Current user is: {this.props.currentUserId}</h4> */}
            <h4>Current user is: {this.props.currentUserName}</h4>
            </form>
        </div>
    )
  }
  //////////////////////// END OF class PlaceForm  ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  