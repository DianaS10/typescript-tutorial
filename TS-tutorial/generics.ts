// Generics - Built-in: Array, Promise
// const names: Array<string> = [];
//names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})

// Generics - custom
// function merge(objA: object, objB: object) {
// function returns an intersection of T and U
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max'}, {age: 30});
console.log(mergeObj.age);

interface Lengthy {
    length: number;
}

// Generic function - custom
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));
// console.log(countAndDescribe([]));
// console.log(countAndDescribe(5)); // don't work because does not have length property

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return console.log('Value: ' +  obj[key]);
}

extractAndConvert({name: 'Max'}, 'name');

// Generic Classes
class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem({name: 'Max'});
// console.log(objStorage.getItems());

// Generic Utility Types => Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
    ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// Generic Utility Types => Readonly
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();