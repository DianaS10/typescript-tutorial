// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple
// } = {
// // const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

//person.role.push('admin'); //push is an exception (no err) and must be treated separatly
//person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR = 'AUTHOR'}  ; // 0, 1, 2 default

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[]; // : any[]
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); 
    // ERR: property map() does not exist on type 'string' (only on arrays)
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}