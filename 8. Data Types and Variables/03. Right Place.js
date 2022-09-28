function place(word, char, match) {
    //create variable for result
    let result = '';

    //combine word char
    for (let i = 0; i < word.length; i++) {
        //console.log(word[i]) -> print all characters
        //-read characters one by one
        //--if current character is "_" add char parameter to result
        if (word[i] == '_') {
            result += char;
        //--else add current character to result
        } else {
            result += word[i];
        }
    }
    //console.log(result);

    //compare resilt with match and print message
    if (result === match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }  
}
place('Str_ng', 'I', 'Strong');
place('Str_ng', 'i', 'String');

//__________________________________

function place1(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);  
}
place1('Str_ng', 'I', 'Strong');
place1('Str_ng', 'i', 'String');