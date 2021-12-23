"use strict";
// Generics - Built-in: Array, Promise
// const names: Array<string> = [];
//names[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
// Generics - custom
// function merge(objA: object, objB: object) {
// function returns an intersection of T and U
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);
// Generic function - custom
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));
// console.log(countAndDescribe([]));
// console.log(countAndDescribe(5)); // don't work because does not have length property
function extractAndConvert(obj, key) {
    return console.log('Value: ' + obj[key]);
}
extractAndConvert({ name: 'Max' }, 'name');
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// Generic Utility Types => Readonly
const names = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
