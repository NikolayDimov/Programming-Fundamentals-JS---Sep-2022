function amazingNum(num) {
    let result = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }
    
    let resultAsString = String(result);
    let isAmaizing = false;

    for (let j = 0; j < resultAsString.length; j++) {
        if (resultAsString[j] === '9') {
            isAmaizing = true;
            break;
        }
        
    }
    console.log(`${num} Amazing? ${isAmaizing ? 'True' : 'False'}`);
}

amazingNum(1233);
amazingNum(999);

//__________________________________

function amazingNum1(num) {
    let sum = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    let result = sum.toString().includes('9');

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNum1(1233);
amazingNum1(999);

//_________________________________
function am(input) {
    let numAsString = String(input);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);

    if(sum.toString().includes('9')) {
        console.log(`${input} Amazing? True`);
    } else {
        console.log(`${input} Amazing? False`);
    }
}
am(1233);
am(999);