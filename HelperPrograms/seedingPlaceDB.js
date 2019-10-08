

const listPlaces = [];


// npm install node-fetch --save
const fetch = require("node-fetch");

// console.log(listPlaces.length)

// TypeError: Only absolute URLs are supported
const savePlacesToServer = (plc) =>
    // fetch("/api/place/",
    fetch("http://localhost:8000/api/place/",
        {
            method: "POST"
            , headers: { "Content-Type": "application/json" }
            , body: JSON.stringify(plc)
        }
    )
        .then(res => res.json())
        .catch(console.log)

savePlacesToServer({ "placeName": "Zimbabwe", "description": "https://www.inf", "placeImageUrl": "https://www.info" })
