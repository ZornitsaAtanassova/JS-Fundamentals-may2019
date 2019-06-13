function dungeonestDark(input) {
    let rooms = input[0].split('|');
    //console.log(rooms)
    let isAlive = true;
    let playerHealth = 100;
    let coins = 0;
    let roomsCount = 0;

    for (let room of rooms) {
        roomsCount++;
        let command = room.split(' ')[0];
        let number = Number(room.split(' ')[1]);

        // Destructoring
        /* let [command, number] = room.split(' ');
        number = Number(number);
        let names = ['P', 'G'];
        let [first, second] = names; */

        if (command === 'potion') {
            drinkPotion(number);
        } else if (command === 'chest') {
            collectCoins(number);
        } else {
            isAlive = fight(command, number);

            if (!isAlive) {
                break;
            }
        }
    }

    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

    function drinkPotion(health) {
        /*let increasedHealth = playerHealth + health;

         if (increasedHealth > 100) {
            increasedHealth = 100;
        } */

        let increasedHealth = Math.min(playerHealth + health, 100);

         if (increasedHealth > 100) {
            increasedHealth = 100;
        }

        console.log(`You healed for ${increasedHealth - playerHealth} hp.`);
        playerHealth = increasedHealth;
        console.log(`Current health: ${playerHealth} hp.`);
    }

    function collectCoins(value) {
        coins += value;
        console.log(`You found ${value} coins.`);
    }

    function fight(monster, damage) {
        let decreasedHealth = playerHealth - damage;

        if (decreasedHealth <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${roomsCount}`);

            return false;
        }

        playerHealth = decreasedHealth;
        console.log(`You slayed ${monster}.`);

        return true;
    }
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);   // You slayed rat. You slayed bat. You healed for 10 hp. Current health: 80 hp. You slayed rat. You found 100 coins. You died! Killed by boss. Best room: 6
//dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);   // You slayed cat. You healed for 10 hp. Current health: 100 hp. You slayed orc. You found 10 coins. You slayed snake. You found 110 coins. You've made it! Coins: 120 Health: 65
