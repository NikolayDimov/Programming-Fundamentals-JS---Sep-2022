function solve(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let charsInRangeArray = [];

    for (let i = startChar + 1; i < endChar; i++) {
        let currentChar = String.fromCharCode(i);
        charsInRangeArray.push(currentChar);
        
    }
    console.log(charsInRangeArray.join(' '));
}

solve('a','d')