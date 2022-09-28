function charToString(char1, char2, char3) {
    let converted = '' + char1 + char2 + char3;
    console.log(converted);  
}
charToString('a', 'b', 'c');
charToString('%', '2','o');

//_________________________________

function charToString(char1, char2, char3) {
    console.log(`${char1}${char2}${char3}`);  
}
charToString('a', 'b', 'c');