function camelize(str) {
    // arr = str.split("-");
    // console.log(arr);
    return str
       .split("-").map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
       .join('');
    // arr = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
    // return arr;
}

console.log(camelize("hello-my-name-is"));
console.log(camelize("-hello-my-name-is"));