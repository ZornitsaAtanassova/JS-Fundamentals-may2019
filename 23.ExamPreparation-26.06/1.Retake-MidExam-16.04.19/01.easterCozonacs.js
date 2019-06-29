function easterCozonacs(input) {
    let budget = Number(input[0]);
    let flourPrice = Number(input[1]);

    let eggsPackPrice = (flourPrice / 100) * 75;
    let milkLiterPrice = flourPrice + (flourPrice / 100) * 25;
    let milkQuarterPrice = milkLiterPrice / 4;
    let cozonacPrice = flourPrice + eggsPackPrice + milkQuarterPrice;
    // console.log(budget, flourPrice, eggsPackPrice, milkLiterPrice, milkQuarterPrice, cozonacPrice);
    let countOfCozonacs = Math.floor(budget / cozonacPrice);
    let moneyLeft = budget - countOfCozonacs * cozonacPrice;
    let countOfEggs = 0;

    for (let i = 1; i <= countOfCozonacs; i++) {
        countOfEggs += 3;
        if (i % 3 === 0) {
            countOfEggs -= (i - 2);
        }
    }

    /* while(budget > cozonacPrice) {
        budget -= cozonacPrice;
    } */
    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${countOfEggs} eggs and ${moneyLeft.toFixed(2)}BGN left.`);
}

easterCozonacs([ '20.50', '1.25' ]);   // You made 7 cozonacs! Now you have 16 eggs and 2.45BGN left.
console.log(`------------------------------`);
easterCozonacs([ '15.75', '1.4' ]);   // You made 5 cozonacs! Now you have 14 eggs and 1.31BGN left.
