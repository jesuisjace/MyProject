function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        if (!(a <= arr[i] && arr[i] <= b)){
            // console.log(arr[i]);
            arr.splice(i,1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log( arr );