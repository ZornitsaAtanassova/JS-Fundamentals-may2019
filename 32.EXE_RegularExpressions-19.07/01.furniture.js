function furniture(input) {
    // Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". For the line to be valid it should be in the following format: ">>{furniture name}<<{price}!{quantity}"
    // The price can be floating point number or whole number. Store the names of the furniture and the total price. At the end print the each bought furniture on separate line

    // console.log(input);

    // 1 solve: Don't work in Judge!!!(80/100)
    /* let pattern = />>([A-Za-z]+)<<([\d]+[.]?[\d]*)!([\d]+)/gm;
    let furnitureArr = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let matches = pattern.exec(input[i]);
        // console.log(matches);

        while (matches !== null) {
            // console.log(matches);
            furnitureArr.push(matches[1]);
            sum += (Number(matches[2]) * Number(matches[3]));
            matches = pattern.exec(input[i]);
        }
    }

    // console.log(furnitureArr);
    console.log('Bought furniture:');
    console.log(furnitureArr.join('\n'));
    console.log(`Total money spend: ${sum.toFixed(2)}`); */

    // 2 solve: used Named Capturing Groups. Don't work in my Node.js!!!(100/100)
    console.log('Bought furniture:');
    let totalSum = 0;

    input.forEach ((line) => {
        const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[.]?[\d]*)!(?<quantity>[\d]+)/gm; // Важно е да се декларира в цикъла, а не отвън, защото дава различен резултат!
        let result = pattern.exec(line);

        if (result) {
            let currentSum = Number(result.groups.price) * Number(result.groups.quantity);
            totalSum += currentSum;
            console.log(result.groups.name);
        }
    });

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([ 
    '>>Sofa<<312.23!3', 
    '>>TV<<300!5', 
    '>Invalid<<!5',
    'Purchase'
]);   // Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69
