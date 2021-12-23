"use strict";
// function add(n1: number, n2: number): string
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void {
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// let combineValues: Function;
let combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
