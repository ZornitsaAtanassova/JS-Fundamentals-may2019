function barIncome(input) {
    // Calculate the money from the products that were sold throughout the day. Until you receive a line with text "end of shift" you will be given lines of input.
    // Each valid order should have a customer, product, count and a price
    // For each valid line print on the console: "{customerName}: {product} - {totalPrice}". When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}".
    // !!! Between each part there can be other symbols, except ('|', '$', '%' and '.')!!!

    let sum = 0;

    // I: Validate by RegEx Capturing Group
    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }

        let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+[.]?\d+)\$/g; // used Lazy Quantifier!!!
        // %([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*(\d+[.]?\d+)\$  - Judje give me (30/100)!!!
        // %([A-Z][a-z]+)%<(\w+)>\|(\d+)\|(\d+[.]?\d+)\$  - Judje give me (70/100)!!!
        
        let tmpOrder = pattern.exec(line);

        if (tmpOrder !== null) {
            // console.log(tmpOrder)
            ;

            let currentPrice = Number(tmpOrder[3] * Number(tmpOrder[4]));
            sum += currentPrice;

            console.log(`${tmpOrder[1]}: ${tmpOrder[2]} - ${currentPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}

barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$', 
    '%Maria%<Cola>|1|2.4$', 
    'end of shift'
]);    // George: Croissant - 20.60
// Peter: Gum - 1.30
// Maria: Cola - 2.40
// Total income: 24.30

console.log(`-------------------------------`);
barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$', 
    '%Maria%<Cola>|1|2.4', 
    '%Valid%<Valid>valid|10|valid20$', 
    'end of shift'
]);    // Valid: Valid - 200.00
// Total income: 200.00
