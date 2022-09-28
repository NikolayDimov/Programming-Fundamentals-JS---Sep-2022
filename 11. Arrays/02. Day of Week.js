function weekday(daysAsNumber) {
    if (daysAsNumber < 1 || daysAsNumber > 7) {
        console.log('Invalid day!');
    } else {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                'Saturday', 'Sunday'];

    let index = daysAsNumber - 1;

    console.log(days[index]);
    } 
}

weekday(1);
weekday(3);
weekday(6);
weekday(-3);
weekday(33);
