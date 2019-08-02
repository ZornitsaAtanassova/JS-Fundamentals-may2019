function emojiSumator(input) {
    // TO DO:
    // 1)Receive input in 2 strings variables
    // 2)Decode "extra" emoji ASCII to Char
        // 2.1)Used string method split() to split emoji code by separator in array
        // 2.2)Used array method map() to convert to number
        // 2.3)Iterate trought array to decode by for loop
        // 2.3)Used String method fromCharCode()
    // 3)Regular Expression Pattern - with groups and lookaheads!!!
        // 3.1)Validation allowed
        // 3.2)Emoji for print
        // 3.2)Emoji for calculation
    // 4)Fill the arrays (print and calc) used while loop
        // 4.1)Define 2 arrays
        // 4.2)Used RegExr method exec() to match
        // 4.3)Iterate until null
        // 4.4)Used array method push() to fill arrays
    // 5)Calculate(Sum) power of ONE emoji
        // 5.1)Iterate One Emoji
        // 5.2)Used string method charCodeAt()
    // 6)Call function Calculate
        // 6.1)Define variable for total sum
        // 6.2)Iterate trougth all emojies
    // 7)Check for "extra" emoji and multiply the total emoji power by 2
    // 8)Print

// Decode extra emoji ASCII to Char
    function emojiDecode(input) {
        let asciiCode = input.split(':').map(Number);
        let emoji = '';
        // console.log(asciiCode)
        for (let code of asciiCode) {
            emoji += String.fromCharCode(code);
        }
 
        return emoji;
    }

// Calculate power of ONE emoji
    function calculatePower(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return sum;
    }
    
// Receive input in 2 strings variables
    let message = input.shift();
    let extraEmojiCode = input.shift();

// Regular Expression Pattern - with groups
    let pattern = /(?<=\s)([:]([a-z]{4,})[:])[\s,.!?]/g;

// Fill the arrays
    let printEmoji = [];
    let calcEmojiPower = [];

    let match = pattern.exec(message);
    // console.log(match);

    while (match !== null) {
        printEmoji.push(match[1]);
        calcEmojiPower.push(match[2]);

        match = pattern.exec(message);
    }
    // console.log(printEmoji);
    // console.log(calcEmojiPower);

// Call function Calc
    let totalSum = 0;

    for (let emoji of calcEmojiPower) {
        totalSum += calculatePower(emoji);
    }

// Check for "extra" emoji and multiply the total emoji power by 2
    if (calcEmojiPower.includes(emojiDecode(extraEmojiCode))) {
        totalSum *= 2;
    }

// Print
    if (printEmoji.length !== 0) {
        console.log(`Emojis found: ${printEmoji.join(', ')}`);
    }    
    console.log(`Total Emoji Power: ${totalSum}`);

    //console.log(message.match(pattern));
    //console.log(emojiDecode(extraEmojiCode));
}

emojiSumator([ 
    'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110' 
]);     // Emojis found: :seven:, :hamster:
// Total Emoji Power: 2602
console.log(`--------------------------------`);
emojiSumator([ 
    'In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
    '97:101:117:114' 
]);     // Total Emoji Power: 0
