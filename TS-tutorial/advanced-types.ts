// interface Admin {
//     name: string;
//     privileges: string[];
// };

// interface Employee {
//     name: string;
//     startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}

// Intersection Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}
console.log(e1);

type Combinable = number | string;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
// Type Guards
function add(a: Combinable, b: Combinable) {
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
    job: {title: 'CEO', description: 'My own company'}
};

// console.log(fetchUserData.job && fetchUserData.job.title); //JS => no error at runtime
// Optional Chaining
console.log(fetchUserData?.job?.title);

// Nullish Coalescing => ?? 
// const userInput = null;
// const userInput = '';
const userInput = undefined;
// const storedData = userInput || 'DEFAULT'; 
// if userInput is null or undefined (not '') use 'DEFAULT
const storedData = userInput ?? 'DEFAULT'; 

console.log(storedData);

// Type Guards
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name is: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

function useVehicle(vehicle: Vehicle){
    vehicle.drive();

    // Type Guards
    // if ('loadCargo' in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Union
// Add one common property in every object that
// makes up our union, which describes that object
interface Bird {
    type: 'bird'; // Discriminated Union
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'; // Discriminated Union
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'bird', flyingSpeed: 10});

// const paragraph = document.querySelector('p');

// Type Casting - var 1 => < >
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');

// Type Casting - var 2 => as
// ! => the expresion before it will never return null
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there!';

// without !
// const userInputElement = document.getElementById('user-input');
// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// Index Properties
// {email: 'Not a valid email', username: "Must start with a character"}
// can be different types of inputs, we don't know in advance how many
// the value will be always a string
interface ErrorContainer { 
    // I don't know the property name and type
    // I know that property name will be a string and the value will be a string
    // id: string; // only string because prop: string
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a character'
}