// Decorators = a function to apply to a Class
// Decorators execute when the class is defined, not when it's instantiated

// Var 1
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// Class Decorator
// @Logger
// class Person {
//     name = 'Max';

//     constructor() {
//         console.log('Creating person object...');
//     }
// }

// const pers = new Person();
// console.log(pers);

// Var 2
// Class Decorator
function Logger(logString: string) { // Printed first becouse the decorator is a function call
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

// @Logger('LOGGING - PERSON')
// class Person {
//     name = 'Max';

//     constructor() {
//         console.log('Creating person object...');
//     }
// }

// const pers = new Person();
// console.log(pers);


// Other Decorators
// Class Decorator - can return something
function WithTemplete(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY'); // Printed second becouse the decorator is a function call
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        
        // A decorator can return a constructor function which will replace the old constructor
        // Executes only we instantiate an object of the class decorated (Person)
        return class extends originalConstructor {
            constructor(..._: any[]) { // ..._ because we don't use ...args but we have to accept it a parameter
                super(); // save the original constructor
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;       
                }
            }   
        }
    }
}

@Logger('LOGGING') // Executes second
@WithTemplete('<h1>My Person Object</h1>', 'app') // Executes first
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);


// -----

// Property decorator - return values are not used
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

// Accessor decorator - can return something
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Method decorator - can return something
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Parameter decorator - return values are not used
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target); // prototype
    console.log(name); // name of the method
    console.log(position); // position of the parameter => 0 = first parameter of the method
}


class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, n: number) {
        this.title = t;
        this._price = n;
    }  

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

// Decorators runs without instantiating, only when the class is defined
// Decorators does not run twice, for p1 and p2

// ------

// function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!';
    
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer;

const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage);

// ------

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] =  {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}
 
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] =  {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
        // console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]; // !! t return true/false
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);

    if (!validate(createCourse)){
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createCourse);
});