// const button = document.querySelector('button')!;

// button.addEventListener('click', () => {
//     console.log('Clicked!');
// });

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(2, 7, 9, 13, 2, 2);
console.log(addedNumbers);

const hobbies = ["Sports", "Cooking"];
const [] = hobbies;
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const person = {
    firstName: "Max",
    age: 30
}
//const {} = person;
const {firstName: userName, age} = person;
console.log(userName, age, person);