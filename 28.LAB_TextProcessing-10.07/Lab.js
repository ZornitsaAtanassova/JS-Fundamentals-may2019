// *************Define***********
let str = "Hello don't oo..";
let strOne = 'Hello don\'t';   // Preferred in JS communities! With back-slash(\) escaped special symbols!
let strTwo = `Hello don't ${str}`;   // Interpolation. Template literals since ECMAScript 2015.

console.log(String(1+1) + 1);   // String() constructor/global object
// *************Define***********


// *************Concatenation***********
function getInfo(firstName, lastName) {
    let outputOne = firstName + lastName;   // JohnDoe
    let outputTwo = firstName + ' ' + lastName;     // John Doe
    let outputThree = `${firstName} ${lastName}`;     // John Doe
    return outputThree;
}

getInfo('John', 'Doe');

let concatStr = str.concat('CONCAT', strOne, ' ', 'CONCAT', ' ', strTwo);
console.log(concatStr);
console.log(`---------------------------`);
// *************Concatenation***********


// *********Access characters and index*********
console.log(str.charAt(1));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));

// Find how many times a string includes a character/substring
const strThree = 'The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.';

function howManyAs(sentence) {
    let counter = 0;
    let includingFromIndex = 0;

    while (sentence.indexOf('the', includingFromIndex) !== -1) {
        includingFromIndex = sentence.indexOf('the', includingFromIndex) + 1;
        counter++;
    }
    return counter;
}
console.log(howManyAs(strThree));

/* let searchTerm = 'the';
let indexOfFirst = strThree.indexOf(searchTerm);
console.log(`First: ${indexOfFirst}`);
console.log(`Next: ${strThree.indexOf (searchTerm, (indexOfFirst + 1))}`); */

// Find next character/substring - Don't work!!!!
function nextIncluded(sentence) {
    let searchTerm = 'the';
    let indexOfFirst = strThree.indexOf(searchTerm);
    console.log(`1: ${indexOfFirst}`);
    let counter = 2;
    let includingFromIndex = 0;

    while (sentence.indexOf(searchTerm, includingFromIndex) !== -1) {
        includingFromIndex = sentence.indexOf(searchTerm, includingFromIndex) + 1;
        console.log(`${counter}: ${strThree.indexOf (searchTerm, includingFromIndex)}`);
        counter++;
    }
}
nextIncluded(strThree);

console.log(`---------------------------`);

/* for (let ch of str) {
    console.log(ch);
} */
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log(`---------------------------`);
// *********Access characters  and index********


console.log(str.split(''));
