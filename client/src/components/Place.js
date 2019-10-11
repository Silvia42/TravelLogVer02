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

const showItem = (x) => {
return (
    <div className="oneItem">
    {/* Name: &nbsp;&nbsp;  */}
    <a target="_blank" href={x.description}>{x.placeName} </a>
    {/* <br /> */}
    {/* Description: {x.description} <br /> */}
    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
    <br />
    </div>
    

)
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// class PlaceForm  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export default class PlaceForm extends React.Component {
  
    render = () => (
        <div>
            console.log('worldCountries',worldCountries)
            {/* this.props.match.params.id */}
            <p>{this.props.worldCountries.map(showItem)}</p> 
            {/* <form onSubmit={this.handleSubmit}> */}
            {/* </form> */}
            </div>
    )
  }
  //////////////////////// END OF class PlaceForm  ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  
  