//________________my solution_____for of___________
function computer(input) {
    let command = input.pop();

    let prices = input.map(Number);
    let sum = 0;

    for (let el of prices) {
        if (el > 0) {
            sum += el;
        } else {
            console.log('Invalid price!');
        }    
    }

    let taxes = (sum * 20) / 100;
    let totalPrice = sum + taxes;
    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        if (command === 'special') {
            totalPrice *= 0.90;
        }
    
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`); 
        console.log(`Taxes: ${taxes.toFixed(2)}$`); 
        console.log('-----------'); 
        console.log(`Total price: ${totalPrice.toFixed(2)}$`); 
    }
    
}

computer(['1050','200','450','2','18.50','16.86','special'])

//__________________lector_______while___________________
function solve(data) {
    let index = 0;
    let command = data[index];
    index++;
    let price = 0;

    while (command !== 'regular') {   // while (command !== 'regular' && command !== 'special)
        if (command === 'special') {
            break;
        }

        let partPrice = Number(command);

        if (partPrice < 0) {
            console.log('Invalid price!');
            command = data[index];
            index++;
            continue;
        }
        price += partPrice;
        command = data[index];
        index++;
    }
    
    let taxes = (price * 20) / 100;
    let totalPrice = price + taxes;

    if (command === 'special') {
        totalPrice *= 0.90;
    }
    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        console.log(
        `Congratulations you've just bought a new computer!\n` +
        `Price without taxes: ${price.toFixed(2)}$\n` +
        `Taxes: ${taxes.toFixed(2)}$\n` +
        '-----------\n' +
        `Total price: ${totalPrice.toFixed(2)}$`
        );
    }
}

solve(['1050','200','450','2','18.50','16.86','special']);
solve(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular']);