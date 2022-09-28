function reversedChar(firstChar, secondChar, thirdChar) {
    let reversed = `${thirdChar} ${secondChar} ${firstChar}`
    console.log(reversed);
}
reversedChar('A', 'B','C');
reversedChar('1', 'L', '&')

//_________________________________

function reversedChar(...params) {
    
    console.log(params.reverse().join(' '));
}
reversedChar('A', 'B','C');
reversedChar('1', 'L', '&')