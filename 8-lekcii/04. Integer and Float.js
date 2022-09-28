function InorFloat(n1, n2, n3) {
    let sum = n1 + n2 + n3;
    sum % 1 === 0 ? sum += ' Integer' : sum += ' Float';
    console.log(sum);
}

InorFloat(9, 100, 1.1);
InorFloat(100, 200, 303)

//____________________
function float3(a, b, c) {
    let sum = a + b + c;
    let type = '';

    if (sum % 1 === 0) {
        type = 'Integer';
    } else {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);  
}
float3(1, 2, 3);
console.log('---');
float3(1, 2, 3.14);

//_______________________________
function float(a, b, c) {
    let sum = a + b + c;
    let type = '';

    if(Number.isInteger(sum)) {
        type = 'Integer';
    } else {
        type = 'Float';
    }
    console.log(`${sum} - ${type}`);  
}
float(1, 2, 3);
console.log('---');
float(1, 2, 3.14);