function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let price = 0;

    switch (typeOfTheGroup) {
        case 'Students': 
            switch (dayOfTheWeek) {
                case 'Friday': price = 8.45; break;
                case 'Saturday': price = 9.80; break;
                case 'Sunday': price = 10.46; break;
            }
        break;

        case 'Business': 
            switch (dayOfTheWeek) {
                case 'Friday': price = 10.90; break;
                case 'Saturday': price = 15.60; break;
                case 'Sunday': price = 16; break;
        }
        break;

        case 'Regular': 
            switch (dayOfTheWeek) {
                case 'Friday': price = 15; break;
                case 'Saturday': price = 20; break;
                case 'Sunday': price = 22.50; break;
        }
        break;   
        
    }

    if (typeOfTheGroup === 'Business' && groupOfPeople >= 100) {
        groupOfPeople -= 10;
    }

    let total = price * groupOfPeople;
    
    if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
        total *= 0.85;
    }
    
    if (typeOfTheGroup === 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(40, "Business", "Saturday");
vacation(100, "Business", "Saturday");