function float(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);
    let type = 'Integer';

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            type = 'Float';
        }
    }

    console.log(`${sum} - ${type}`);  
}

float(1, 2, 3);
console.log('---');
float(1, 2, 3.14);
//______________________________

function float11(a, b, c) {
    let sum = a + b + c;

    console.log(`${sum} - ${parseInt(sum) === sum ? 'Integer' : 'Float'}`);  
}

float11(1, 2, 3);
console.log('---');
float11(1, 2, 3.14);

//_______________________________
function float1(a, b, c) {
    let sum = a + b + c;
    let type = 'Integer';
    let roundedSum = Math.round(sum);
    if (sum != roundedSum) {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);  
}
float1(1, 2, 3);
console.log('---');
float1(1, 2, 3.14);

//________________________________
function float2(a, b, c) {
    let sum = a + b + c;
    let type = 'Integer';

    if (sum % 1 != 0) {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);  
}
float2(1, 2, 3);
console.log('---');
float2(1, 2, 3.14);

//__________________________________
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

//______________________________
function float4(a, b, c) {
    let sum = a + b + c;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);  
}
float4(1, 2, 3);
console.log('---');
float4(1, 2, 3.14);