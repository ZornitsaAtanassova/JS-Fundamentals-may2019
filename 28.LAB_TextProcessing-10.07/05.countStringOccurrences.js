function countStringOccurences(text, searchWord) {
    // Write a function that receives a text and a string that you need to search. Print all the occurrences of that word in the string.

    let words = text.split(' ');
    let counter = 0;
    
    for (let word of words) {
        if (word === searchWord) {
            counter++;
        }
    }
    
    console.log(counter);
}

countStringOccurences('This is a word and it also is a sentence', 'is');    // 2
