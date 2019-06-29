function partyProfit(input) {
    let companionsCount = Number(input[0]);
    let coins = 0;

    for (let day = 1; day <= Number(input[1]); day++) {
        // console.log(i);
        coins += 50;

        if (day % 10 === 0) {
            companionsCount -= 2;
        }

        if (day % 15 === 0) {
            companionsCount += 5;
        }

        // leave at the start of the day, and joined at the beginning of the day!
        coins -= companionsCount * 2;

        if (day % 3 === 0) {
            coins -= companionsCount * 3;
        }

        if (day % 5 === 0) {
            coins += companionsCount * 20;
            if (day % 3 === 0) {
                coins -= companionsCount * 2;
            }
        }
    }

    let cionsPerCompanion = Math.floor(coins / companionsCount);
    console.log(`${companionsCount} companions received ${cionsPerCompanion} coins each.`);
}

partyProfit([ '3', '5' ]);  // 3 companions received 90 coins each.
console.log(`-------------------------------`);
partyProfit([ '15', '30' ]);  // 19 companions received 102 coins each.
