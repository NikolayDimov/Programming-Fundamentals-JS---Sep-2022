
function login(input) {
    for (let index = 1; index < input.length; index++) {
        if (input[0].split('').reverse().join('') === input[index]) {
            console.log(`User ${input[0]} logged in.`);
        } else {
            if (index === input.length - 1) {
                console.log(`User ${input[0]} blocked!`);
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        } 
    }
}

login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);


//________________________________


function login1(input) {
    
    let index = 0;
    let username = input[index];
    index++;
    let password = '';
    let wrongPassCounter = 0;

    for (let i = username.length - 1; i >= 0 ; i--) {
        password = password + username[i];
    }
    //console.log(password);

    while (input[index] !== password) {
        wrongPassCounter++;
        if(wrongPassCounter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
    }

    if (input[index] === password) {
        console.log(`User ${username} logged in.`);
    }
}

login1(['Acer','login','go','let me in','recA']);


//__________________________________
function login1(input) {
    
    let index = 0;
    let username = input[index];
    index++;
    let password = username.split('').reverse().join('');
    let wrongPassCounter = 0;
    
    let currentInput = input[index];

    while (currentInput !== password) {
        wrongPassCounter++;
        if(wrongPassCounter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
        currentInput = input[index];
    }

    if (currentInput === password) {
        console.log(`User ${username} logged in.`);
    }
}

login1(['Acer','login','go','let me in','recA']);

