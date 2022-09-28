function charactersInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let charsInRangeArray = [];

    for (let index = startChar + 1; index < endChar; index++) {
        let currentChar = String.fromCharCode(index);
        charsInRangeArray.push(currentChar);
        
    }
    console.log(charsInRangeArray.join(' ')); 
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');