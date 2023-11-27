// returns smaller value

// function min(a,b){
//     return (a < b) ? a : b;
// }
// console.log(min(2,5));
// console.log(min(3,-1));
// console.log(min(1,1));

// returns power

function pow(x,n){
    let result = x
    for(let i = 1; i < n; i++){
        result *= x
    }
    return result
}

let x = prompt("x?", "");
let n = prompt("n?", "");
if (n < 1){
    alert ("Enter a natural number greater than or equal to 1")
}
else{
    alert(pow(x,n));
}

// console.log(pow(3,2));
// console.log(pow(3,3));
// console.log(pow(1,100));