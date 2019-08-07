function messageDecripter(input) {
    let countOfLines = input.shift();

    for (let i = 0; i < countOfLines; i++) {
        let pattern = /^([$%])([A-Z][a-z]{2,})\1:\s(\[\d+\]\|){3}$/g;
        let message = input[i];
        // console.log(message);

        let isValid = pattern.test(message);
        //console.log(pattern.test(message));

        if (isValid) {
            /* let tag = '';
            let match = pattern.exec(message);
            while (match !== null) {
                tag = tag[2];
            }
            console.log(pattern.exec(message)); */
        
            let patternTwo = /\d+/g;
            let arrOfNum = message.match(patternTwo).map(Number);
            //console.log(arrOfNum);
            let decryptedMessage = '';

            let patternThree = /([A-Z][a-z]{2,})/g;
            let arrOfTags = message.match(patternThree);

            for (let num of arrOfNum) {
                decryptedMessage += String.fromCharCode(num);
            }

            console.log(`${arrOfTags[0]}: ${decryptedMessage}`);

            /* if (true) {
                //console.log(`{tag}: {decryptedMessage}`);
            } else {
                console.log(`Valid message not found!`);
            } */
        } else {
            console.log(`Valid message not found!`);
        }        
    }
}

messageDecripter([ '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|' 
]);     // Request: Isi
// Valid message not found!
// Taggy: val
// Valid message not found!
console.log(`----------------------------`);
messageDecripter([ '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]    |',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true' 
]);     // Valid message not found!
// Valid message not found!
// Valid message not found!
