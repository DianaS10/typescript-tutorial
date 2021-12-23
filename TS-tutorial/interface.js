"use strict";
// interface Person {
//     name: string;
//     age: number;
let addNum;
addNum = (n1, n2) => {
    return n1 + n2;
};
// a class can inherit multiple interfaces
// class Person implements Greetable, Named {
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
// let user1: Person;
// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }
// user1.greet('Hi there, I am');
let user1; // type can be also Person
user1 = new Person();
user1.greet('Hi there, I am ');
console.log(user1);
