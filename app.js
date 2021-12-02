"use strict"

// Reduce, in a nutshell:
// oneFinalThing = someArray.reduce(arg1, arg2);
// arg1 --> yourCallbackFunction(prevVal, currVal, currIdx, arr) {returns something}
// arg2 --> optionalInitialValue

const array1 = [1, 2, 3, 4];

// no initial value
let total = array1.reduce(
    function thisIsMyCallback(previousValue, currentValue) {
        return previousValue + currentValue;
    }
);

let total2 = array1.reduce(
    function thisIsMyCallback(acc, next) {
        return acc + next;
    }
);

let total3 = array1.reduce(
    function(potato, taco) {
        return potato + taco;
    }
);

let total4 = array1.reduce((pv, cv) => pv + cv);

// with an initial value - now pv and cv change!
let totalWithStartingValue = array1.reduce((pv, cv) => {
    return pv + cv;
}, 5);


