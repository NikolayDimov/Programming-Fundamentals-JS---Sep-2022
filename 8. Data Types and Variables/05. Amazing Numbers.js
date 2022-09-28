function amazing(num) {
    let result = 0;
    let numAsString = String(num);  //let numAsString = num.toString();
        
    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }

    let resultAsString = String(result);
    let isAmaizing = false;

    for (i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] === '9') {
            isAmaizing = true;
            break;
        }
    }

    //console.log(result);

    console.log(`${num} Amazing? ${isAmaizing ? 'True' : 'False'}`);
}

amazing(1233);
amazing(999);
amazing(7814);
amazing(982);

//______________________________

function amazingIndexOf(num) {
    let result = 0;
    let numAsString = String(num);  //let numAsString = num.toString();
        
    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }

    console.log(`${num} Amazing? ${result.toString().indexOf('9') >= 0 ? 'True' : 'False'}`);
    // indexOf('9') >= 0 -> ако числото 9 не се съдържа в даден индекс ще върне -1,
    // а ако числото 9 се съдържа в някой индекс ще върне номера на индекса
    // затова се проверява дали е по-голям от 0
}

amazingIndexOf(1233);
amazingIndexOf(999);
amazingIndexOf(7814);
amazingIndexOf(982);

//___________________________

function solve(num) {
    num = num.toString();
    let sum = 0;
    
    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
      
    let result = sum.toString().includes('9');
    // дали се съдържа числото 9 измежду числата в резултата
    
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
  
solve(1233);
solve(999);
solve(7814);
solve(982);

