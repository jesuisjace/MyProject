// let isTrue = true
// while(isTrue){
//     let num = prompt('Enter a number greater than 100.');
//     if (num > 100 || num == null || num == '') {
//         isTrue = false;
//     }
// }

// let num;
// do{
//     num = prompt('Enter a number greater than 100.','');
// } while (num <= 100 && num);


// print prime numbers only

let n = 20;
nextPrime:
for(let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
        if(i % j == 0) continue nextPrime;
    }
    console.log (i);
}