// *************Define***********
let str = "Hello don't oot..The end...";
let strOne = 'Hello don\'t';   // Preferred in JS communities! With back-slash(\) escaped special symbols!
let strTwo = `Hello don't ${str}`;   // Interpolation. Template literals since ECMAScript 2015.

console.log(String(1+1) + 1);   // String() constructor/global object
// *************Define***********

// *************Concatenation***********
function getInfo(firstName, lastName) {
    let outputOne = firstName + lastName;   // JohnDoe
    let outputTwo = firstName + ' ' + lastName;     // John Doe
    let outputThree = `${firstName} ${lastName}`;     // John Doe - Recommended!
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
console.log(str.lastIndexOf('end'));

// Find how many times a string includes a character/substring
const strThree = 'The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found, there is ...';

function howManyAsSubstr(sentence) {
    let counter = 0;
    let includingFromIndex = 0;

    while (sentence.indexOf('the', includingFromIndex) !== -1) {
        includingFromIndex = sentence.indexOf('the', includingFromIndex) + 1;
        counter++;
    }
    return counter;
}
console.log(howManyAsSubstr(strThree));

function howManyAsWord(strThree, searchWord) {
    let words = strThree.split(' ');
    let counter = 0;
    
    for (let word of words) {
        if (word === searchWord) {
            counter++;
        }
    }
    return counter;
}
console.log(howManyAsWord(strThree, 'the'));

/* let searchTerm = 'the';
let indexOfFirst = strThree.indexOf(searchTerm);
console.log(`First: ${indexOfFirst}`);
console.log(`Next: ${strThree.indexOf (searchTerm, (indexOfFirst + 1))}`); */

// Find next character/substring - Don't work good!!!!
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

// ******************Substring******************
console.log(str.substr(12, 11));
console.log(str.substring(12, 26));
console.log(str);
// ******************Substring******************

// ******************Replace******************
let strFour = 'kicegiciceeb';
console.log(strFour.replace('ice', ''));
console.log(strFour.replace(/ice/gi, ''));

function removeWordOccurrence(word,str) {
    let copy = str.substring(0);
    while (copy.indexOf(word) !== -1) {
        copy = copy.replace(new RegExp(word, 'g'), '');
    }
    return copy;
}
const leftOut = removeWordOccurrence('key', 'kicegiciceeb');
console.log(leftOut);
console.log(`---------------------------`);
// ******************Replace******************

// ******************Split******************
console.log(str.split(' oot'));
// параметъра на split() се изтрива, т.е. не се добавя в масива от подстрингове разделени от този параметър! 
console.log(str);
console.log(`---------------------------`);
// ******************Split******************

// ******************Includes******************
console.log(str.includes(' oot')); 
console.log(`---------------------------`);
// ******************Includes******************

// ******************Repeat******************
const curseWords = [
    'shit',
    'hell',
    'fuck',
    'F0ck',
    'FUCK!!!',
    'FK'
];

function censorWords(someStr) {
    let sanitized = someStr.substring(0);

    curseWords.forEach(curse => {
        const index = sanitized.indexOf(curse);
        const reg = new RegExp(curse, 'g');

        if (index !== -1) {
            const len = 1;
            const firstThree = curse.substr(0, len);
            const hiddenChars = '*'.repeat(curse.length - len);

            sanitized = sanitized.replace(reg, firstThree + hiddenChars);
        }
    });

    return sanitized;
}

const sanitized = censorWords('This code is so shit FK!!! hell can freeze over');
console.log(sanitized);

console.log(`---------------------------`);
// ******************Repeat******************

// ******************Trim******************
function handleUserInput(input) {
    const data = {};

    data.input = input.trim();
    console.log(data);
}

handleUserInput('John  ');

// console.log('   Trim Start  '.trimStart()); //Don't work???
// console.log('   Trim End  '.trimEnd()); //Don't work???
console.log('hello     world !'.replace(/ /g, ''));

console.log(`---------------------------`);
// ******************Trim******************

// ******************CharCodeAt*****************
let strFive = 'AbCdEfGhIjKlMnOpQrStUvWxYz';
let upper = [];
let lower = [];

for (let i = 0; i < strFive.length; i++) {
    let charCode = strFive.charCodeAt(i);
    //console.log(charCode);
    if (charCode >= 65 && charCode <= 90) {
        upper.push(strFive[i]);
    } else {
        lower.push(strFive[i]);
    }
}

console.log(`${upper}\n${lower}`);

console.log(`---------------------------`);
// ******************CharCodeAt*****************

// ***************PadStart/PadEnd**************
let strSix = '010';
console.log(strSix.padStart(8, '0'));
console.log(strSix.padEnd(10, '.'));

console.log(`---------------------------`);
// ***************PadStart/PadEnd**************

// ***************startsWith/endWith************
console.log(strSix.startsWith('0'));
console.log(strSix.endsWith('.'));

let strSeven = 'When .... ? ';
const questionWords = ['what', 'why', 'when', 'should', 'how', 'is', 'can'];

function isQuestion(input) {
    let isIt = false;

    questionWords.forEach(word => {
        if (input.toLowerCase().startsWith(word)  && input.trim().endsWith('?')) {
            isIt = true;
        }
    });

    return isIt;
}

console.log(isQuestion(strSeven));
console.log(strSeven);

console.log(`---------------------------`);
// ***************startsWith/endWith************
