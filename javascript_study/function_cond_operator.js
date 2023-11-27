// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('보호자의 동의를 받으셨나요?');
//     }
//   }

// use ? and write above function in one line
// function checkAge(age){
//     return (age > 18) ? true : confirm('Have you obtained parental consent?');
// }
// console.log(checkAge(18));

// use || (OR)
function checkAge(age){
    return (age > 18 || confirm('Have you obtained parental consent?'));
}
console.log(checkAge(19));