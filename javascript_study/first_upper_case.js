function ucFirst(str) {
    if (!str) return str;
    
    let result = str[0].toUpperCase() + str.slice(1) //, str.length);
    return result;
}

console.log( ucFirst("john") );