"use strict";
// interface Admin {
//     name: string;
//     privileges: string[];
// };
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
// Type Guards
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 10); //type Combinable not string
result.split(' ');
// Optional Chaining
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
// console.log(fetchUserData.job && fetchUserData.job.title); //JS => no error at runtime
// Optional Chaining
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing => ?? 
// const userInput = null;
// const userInput = '';
const userInput = undefined;
// const storedData = userInput || 'DEFAULT'; 
// if userInput is null or undefined (not '') use 'DEFAULT
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log('Name is: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car;
const v2 = new Truck;
function useVehicle(vehicle) {
    vehicle.drive();
    // Type Guards
    // if ('loadCargo' in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    // if (animal instanceof Bird) // will not work because Bird is an interface not a Class
    if ('flyingSpeed' in animal) {
        // works but is harder to debug when typo occur
    }
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// const paragraph = document.querySelector('p');
// Type Casting - var 1 => < >
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// Type Casting - var 2 => as
// ! => the expresion before it will never return null
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a character'
};
