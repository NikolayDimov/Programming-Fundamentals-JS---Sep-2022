function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let price = 0;

    if (typeOfTheGroup === 'Business' && groupOfPeople >= 100) {
        groupOfPeople -= 10;
    }

    if (typeOfTheGroup === 'Students' && dayOfTheWeek === 'Friday') {
        price = groupOfPeople * 8.45;
    } else if (typeOfTheGroup === 'Students' && dayOfTheWeek === 'Saturday') {
        price = groupOfPeople * 9.80;
    } else if (typeOfTheGroup === 'Students' && dayOfTheWeek === 'Sunday') {
        price = groupOfPeople * 10.46;
    } else if (typeOfTheGroup === 'Business' && dayOfTheWeek === 'Friday') {
        price = groupOfPeople * 10.90;
    } else if (typeOfTheGroup === 'Business' && dayOfTheWeek === 'Saturday') {
        price = groupOfPeople * 15.60;
    } else if (typeOfTheGroup === 'Business' && dayOfTheWeek === 'Sunday') {
        price = groupOfPeople * 16;
    } else if (typeOfTheGroup === 'Regular' && dayOfTheWeek === 'Friday') {
        price = groupOfPeople * 15;
    } else if (typeOfTheGroup === 'Regular' && dayOfTheWeek === 'Saturday') {
        price = groupOfPeople * 20;
    } else if (typeOfTheGroup === 'Regular' && dayOfTheWeek === 'Sunday') {
        price = groupOfPeople * 22.50;
    }

    if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
        price *= 0.85;
    }
    
    if (typeOfTheGroup === 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(40, "Business", "Saturday");
vacation(100, "Business", "Saturday");