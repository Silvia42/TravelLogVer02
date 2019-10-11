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


    handleSubmit = (evnt) => {
        evnt.preventDefault();
        // console.log('something')
        
        alert("Button was ...!!!") 
    }
  
    showItem = (x) => (<option value={x.id}>{x.placeName}</option>)

    render = () => (
        <div>
            <form onSubmit={this.handleSubmit}>

            {/* <select value={0} onChange={(evnt) => console.log(evnt.target.value)}>  */}
            <select name="place">    
            <option value ="none">Nothing</option>
                {this.props.worldCountries.map(this.showItem)}
            </select>

                {/* {console.log('worldCountries',this.props.worldCountries)} */}
                {/* <p>{this.props.worldCountries.map(showItem)}</p>  */}
                

            <input type="submit"                    value="Add this trip" />
            </form>
            </div>
    )
  }
  //////////////////////// END OF class PlaceForm  ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  
  