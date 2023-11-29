// let user = {
//     name: "John",
//     surname: "Smith",
// }

// or

let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

console.log(user.name);

delete user.name;

console.log("name" in user); // false
console.log("surname" in user); // true
console.log(user.name === undefined); // true