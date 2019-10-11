
// How can I merge properties of two JavaScript objects dynamically?
// https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically

// this is working
const concatenateObjects=(obj1, obj2) => {
    for (let key in obj1) {
        obj2[key]=obj1[key]
    }
    return obj2;
}

// ECMAScript 2018 Standard Method
// You would use object spread:

let merged = {...obj1, ...obj2};

const allRules = {...obj1, ...obj2, ...obj3};


// ECMAScript 2015 (ES6) Standard Method
Object.assign(obj1, obj2);

console.log({...{"asdf":12},...{"qwerty":0}})