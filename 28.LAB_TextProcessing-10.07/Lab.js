// *************Define***********
let str = "Hello don't o0t..The end..!";
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
console.log(str.charAt(0));
console.log(str.charAt(str.length - 1));
console.log(str.charCodeAt(str.length - 1));
console.log(str.codePointAt(str.length / 2));
console.log(str.fontsize(7));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('end'));

let hello = 'Hello, World!';
console.log(hello.slice(7));
console.log(hello.slice(7, 12));
console.log(hello.slice(-6));
console.log(hello.slice(-6, -1));

// Find how many times a string includes a character/substring
const strThree = 'The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found, there is ...';
const substrThree = 'the';

function howManyAsSubstr(str, searchSubstr) {
    let counter = 0;
    let includingFromIndex = 0;
    let counterWord = 0;

    while (str.indexOf(searchSubstr, includingFromIndex) !== -1) {
        /* console.log(str.substr(includingFromIndex -2, 5));
        if (str.substr(includingFromIndex -2, 5) === 'the ') {
            counterWord++;
        } // for word count! But doesn't work!!! */

        includingFromIndex = str.indexOf(searchSubstr, includingFromIndex) + 1;
        // console.log(includingFromIndex-1);
        counter++;
    }
    return counter;
}
console.log(howManyAsSubstr(strThree, substrThree));

function howManyAsWord(str, searchWord) {
    let wordsArr = str.split(' ');
    let counter = 0;
    
    for (let word of wordsArr) {
        if (word === searchWord) {
            counter++;
        }
    }
    return counter;
}
console.log(howManyAsWord(strThree, substrThree));

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
let strFour = 'kicegi★cIceeb';
console.log(strFour.replace('ice', ''));
console.log(strFour.replace(/ice/gi, ''));

function removeWordOccurrence(word,str) {
    let copy = str.substring(0);
    while (copy.indexOf(word) !== -1) {
        copy = copy.replace(new RegExp(word, 'g'), '');
    }
    return copy;
}
const leftOut = removeWordOccurrence('ice', 'kicegiciceeb');
console.log(leftOut);

function solve(word, text) {
    let old;
    while (old !== text) {
      old = text;
      text = text.replace(word, '');
    }
  
    console.log(text);
 }
solve('ice', strFour);

console.log(`---------------------------`);
// ******************Replace******************

// ******************Split******************
console.log(str.split(' oot'));
// параметъра на split() се изтрива, т.е. не се добавя в масива от подстрингове разделени от този параметър! 
console.log(str);
console.log(`---------------------------`);
// ******************Split******************

// ******************Includes******************
console.log(str.includes(' o0t')); 
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

const sanitized = censorWords('This code is so shit FK!!! Hell can freeze over');
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
let strFive = 'AbCdEfGhIjKlMnOpQrStUvWxYzZZZ';
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

function upperCases(inp) {
    let upper = '';
    for (let i = 0; i < inp.length; i++) {
        let charCode = inp.charCodeAt(i);
    
        if (charCode >= 65 && charCode <= 90) {
            upper += `${inp[i]} `;
        } else {
            inp[i];   // Everything else!
        }
    }
    return upper;
}
console.log(upperCases('Hello, World!'));
console.log('akaka kaka l'.split(' '));

let textOne = "My name is John";
console.log(textOne.startsWith('My', 1)); // Expected output: true

let textTwo = "My name is Johne";
console.log(textTwo.endsWith('e', 7)); // Expected output: true
