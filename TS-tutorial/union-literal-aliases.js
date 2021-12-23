"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //     // return parseFloat(result);
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Ana', 'as-text');
console.log(combinedNames);
