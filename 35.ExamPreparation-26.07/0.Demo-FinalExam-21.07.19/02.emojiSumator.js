function emojiSumator(input) {
// III: Decode extra emoji
    function emojiDecode(input) {
       let asciiCode = input.split(':').map(Number);
       let emoji = '';
       // let test = String.fromCharCode(...input.split(':').map(Number));
       for (let code of asciiCode) {
           emoji += String.fromCharCode(code);
       }

        return emoji;
    }
    // console.log(emojiDecode(emojiCode));

// II: Calculate power of an emoji
    function calculatePower(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return sum;
    }
    // console.log(calculatePower('hamster'));

// I: Find and Print List of emojies
    let message = input.shift();
    let emojiCode = input.shift();
    let emojiArr = [];
    let power = 0;
    let pattern = /[ ]([:][a-z]{4,}[:])[ ,.!?]/g;

    // console.log(emojiArr.push(message.match(pattern)));
    // console.log(pattern.exec(message));
    let result = pattern.exec(message);
    while (result !== null) {
        emojiArr.push(result[1]);
        result = pattern.exec(message);
    }

    for (let i = 0; i < emojiArr.length; i++) {
        let tmp = emojiArr[i].match(/[a-z]{4,}/g);
        power += calculatePower(tmp[0]);
    }
    
    for (let i = 0; i < emojiArr.length; i++) {
        let tmp = emojiArr[i].match(/[a-z]{4,}/g);
        
        if (tmp[0] === emojiDecode(emojiCode)) {
            power *= 2;
        }
    }
    

    if (emojiArr.length !== 0) {
        console.log(`Emojis found: ${emojiArr.join(', ')}`);
    }
    
    console.log(`Total Emoji Power: ${power}`);
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
