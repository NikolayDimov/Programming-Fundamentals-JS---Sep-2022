function repeatString(str, n) {
    let buff = '';

    for (let i = 0; i < n; i++) {
        buff += str; 
    }
    return buff;
}

console.log(repeatString('abc', 3)); 
console.log(repeatString("String", 2)); 