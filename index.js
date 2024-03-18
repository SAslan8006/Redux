let name = "Süleyman"
let name2 = "Mahmut"

name2 = name;
name2 = "Merve";

console.log(`Hello ${name} and ${name2}`);


const user = {
    name: "Süleyman",
    age: 25
}

user.name = "Mahmut";
const user1 = user;
user1.age = 30;

console.log(user);
console.log(user1);

const user2 = { ...user };
user2.name = "Merve";

console.log(user2);
// Primitives vs Reference Types
console.log(user === user2);


const user3 = Object.assign({}, user);
user3.name = "Merve";

console.log(user3);
// Primitives vs Reference Types
console.log(user2 === user3);