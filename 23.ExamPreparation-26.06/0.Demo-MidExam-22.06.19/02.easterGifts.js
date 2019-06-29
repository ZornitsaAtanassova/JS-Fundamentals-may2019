function easterGifts(input) {
    let gifts = input.shift().split(' ');
    // console.log(input, gifts);

    for (let line = 0; line < input.length; line++) {
        let command = input[line].split(' ');
        // console.log(command);

        if (command[0] === 'OutOfStock') {
            let indexOfGivenElement = gifts.indexOf(command[1]);
            
            while (indexOfGivenElement !== -1) {
                gifts.splice(indexOfGivenElement, 1, 'None');
                indexOfGivenElement = gifts.indexOf(command[1]);
            }
        }

        if (command[0] === 'Required') {
            if (command[2] >= 0 && command[2] < gifts.length -1) {
            gifts.splice(Number(command[2]), 1, command[1]);
            }
        }

        if (command[0] === 'JustInCase') {
            let indexOfLast = gifts.length-1;
            gifts.splice(indexOfLast, 1, command[1]);
        }

        if (command[0] === 'No') {
            break;
        }
    }

    let output = gifts.filter(word => word !== 'None');
    console.log(output.join(' '));
}

easterGifts([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
            'OutOfStock Eggs',
            'Required Spoon 2',
            'JustInCase ChocolateEgg',
            'No Money' ]
);  // StuffedAnimal Spoon Sweets EasterBunny ChocolateEgg
console.log(`-------------------------------`);
easterGifts([ 'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
            'Required Paper 8',
            'OutOfStock Clothes',
            'Required Chocolate 2',
            'JustInCase Hat',
            'OutOfStock Cable',
            'No Money' ]
);  // Sweets Cozonac Chocolate Flowers Wine Eggs Hat