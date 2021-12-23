// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// type AddFn = (a: number, b: number) => number;


interface AddFn {
    (a: number, b: number): number;
}

let addNum: AddFn;
addNum = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    output?: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

// a class can inherit multiple interfaces
// class Person implements Greetable, Named {
class Person implements Greetable {
    name?: string;

    constructor(n?: string) {
        this.name = n;
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + this.name);
        } else {
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

let user1: Greetable; // type can be also Person

user1 = new Person();
user1.greet('Hi there, I am ');
console.log(user1);