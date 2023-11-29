let sum = 0
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function summation(obj){
    for (let key in obj){
        // console.log(key);
        // console.log(obj[key]);
        sum += +obj[key];
    }
    return sum; // 390
}

// or

// let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// -------------- //

console.log(summation(salaries));
// console.log(salaries.John);
// console.log("John" in salaries);