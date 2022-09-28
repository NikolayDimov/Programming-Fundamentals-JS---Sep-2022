function lowerToUpper(charInput) {
    if (charInput === charInput.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerToUpper('L');
lowerToUpper('f');

//_____________________________

function lowerToUpper(charInput) {
    console.log(charInput === charInput.toUpperCase() ? 'upper-case' : 'lower-case');
}
lowerToUpper('L');
lowerToUpper('f');