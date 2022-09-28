function lowToUp(char) {
    if (char === char.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowToUp('L');
lowToUp('f');

//_____________________________

function lowerToUpper(charInput) {
    console.log(charInput === charInput.toUpperCase() ? 'upper-case' : 'lower-case');
}

lowerToUpper('L');
lowerToUpper('f');