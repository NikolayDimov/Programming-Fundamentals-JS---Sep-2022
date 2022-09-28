function gladiatorExpences(lostFights, helmetPrice, swothPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    
    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
       
        if (currentFight % 2 === 0) {
            totalExpenses += helmetPrice;
       }
        if (currentFight % 3 === 0) {
        totalExpenses += swothPrice;
       }
        if (currentFight % 6 === 0) {
        totalExpenses += shieldPrice;
       }
        if (currentFight % 12 === 0) {
        totalExpenses += armorPrice;
       } 
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`); 
}

gladiatorExpences(7, 2, 3, 4, 5 );
gladiatorExpences(23, 12.50, 21.50, 40, 200);