function gladiator(lostFights, helmetPrice, swordprice, shieldprice, armorPrice) {
    let totalExpenses = 0;

    for (let currFight = 1; currFight <= lostFights; currFight++) {
        
        if (currFight % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (currFight % 3 === 0 ) {
            totalExpenses += swordprice;
        }
        if (currFight % 6 === 0) {
            totalExpenses += shieldprice;
        }
        if (currFight % 12 === 0) {
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

gladiator(7,
    2,
    3,
    4,
    5
    )

gladiator(23,
    12.50,
    21.50,
    40,
    200
    )