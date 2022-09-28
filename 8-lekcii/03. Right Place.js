function rightPlace(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result ? 'Matched' : 'Not Matched'
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong');

//_________________________

function replacePlace(str, char, result) {
    let result1 ='';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            result1 += char;
        } else {
            result1 += str[i];
        }
    }

    if (result1 === result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

replacePlace('Str_ng', 'I', 'Strong');