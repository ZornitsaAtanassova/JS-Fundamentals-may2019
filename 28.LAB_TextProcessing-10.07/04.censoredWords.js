function censoredWords(text, word) {
    // Write a function that receives a text as a first parameter  and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

    // 1 solve: Long solution
    /* function repeatCensoredStr(plainStr) {
        let censoredStr = '';

        for (let ch of plainStr) {
            censoredStr += '*';
        }

        return censoredStr;
    }
    // console.log(repeatCensoredStr(word));

    function howManyAs(plainText, search) {
        let counter = 0;
        let includingFromIndex = 0;
    
        while (plainText.indexOf(search, includingFromIndex) !== -1) {
            includingFromIndex = plainText.indexOf(search, includingFromIndex) + 1;
            counter++;
        }
        
        return counter;
    }
    // console.log(howManyAs(text, word));

    let count = howManyAs(text, word);
    let copyText = text
    for (let i = 0; i < count; i++) {
        copyText = copyText.replace(word, repeatCensoredStr(word));
    }

    console.log(copyText); */

    // 2 solve: Clear solution
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}

censoredWords('A small sentence with some words', 'small');    // A ***** sentence with some words
