## _<p align=center>Quick Reference:</p>_ _<p align=center>A simple description of the [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) methods</p>_
_<p align=center>'**Enjoy!** :kissing_closed_eyes::grin:';</p>_


***

## :sparkles: Table of frequently used string methods:

Method description | Returns |
------------ | ------------- |
[*charAt(index);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) Returns single character from UTF-16 | a new string of single character |
[*charCodeAt(index);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) Returns UTF-16 code representing the character at the given index | an integer: UTF-16 code between 0 and 65535 |
[*codePointAt(index);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) Returns Unicode code point value at the given index | an integer: Unicode code |
[*String.fromCharCode(UTF-16 code, -//-//-);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) The static **String**.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units | a new string of characters|
[*concat(variable, 'some string', variable, ...);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat) Concatenates the string arguments | a new string |
[*indexOf('substring', fromIndex);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) Finds the index of the **first** occurrence of the specified value, starting the search at _fromIndex_ | an integer: **index** of the first met, or **-1** if it is not found |
[*lastIndexOf('substring');*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) Finds the index of the **last** occurrence of the specified value | an integer: **index** of the last met, or **-1** if it is not found |
[*substr(startIndex, count of characters);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) _Is not strictly deprecated (as in "removed from the Web standards")_ | a new string: portion of the string |
[*substring(startIndex, endIndex);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) Give the part of the string between the start and end indexes (exclude), or to the end of the string | a new string: range from the string |
[*slice(startIndex, endIndex);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) Extracts a section of a string and returns it as a new string, without modifying the original string | a new string: range from the string |
[*replace(searchPattern, replacement);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) If search pattern is a string, only the first occurrence will be replaced. If it is RegEx replace each matches | a new string|
[*split('some separator');*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) Splits a String object into an array of strings by separating the string into substrings | a new array of strings |
[*includes('substring');*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) Determines whether one string may be found within another string | **true** or **false** |
[*repeate('some string', count);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) Repeate specified chars or string | a new string |
[*trim();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) Removes whitespace (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.) from both ends of a string | a new string |
[*trimStart();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) Removes whitespace from the beginning of a string | a new string |
[*trimEnd();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) Removes whitespace from the end of a string | a new string |
[*startsWith('substring', fromIndex);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) Determines whether a string begins with the characters of a specified string | **true** or **false** |
[*endWith('substring', fromIndex);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) Determines whether a string begins with the characters of a specified string | **true** or **false** |
[*padStart(total string length, 'substring');*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) Add to the current string another substring at the start until a length is reached | a new string |
[*padEnd(total string length, 'substring');*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) Add to the current string another substring at the start until a length is reached | a new string |
 |  |  |  |  | 
---
## :sparkles: Table with simple examples:
*For examples, these initial strings are used:* 
```javascript
let strA = 'Hello, World!';
let strB = 'kicegi★cIceeb';
let strC = ' Surrounded by whitesp ';
let strD = 'When .... ?';
let strE = '010';
```

Examples | Returns |
------------ | ------------- |
```strA.charAt(strA.length - 1);``` | ```!``` |
```strA.charCodeAt(strA.length - 1);``` | ```33``` |
```strB.codePointAt(strB.length / 2);``` | ```9733``` |
```String.fromCharCode(189, 43, 190, 61);``` | ```½+¾=``` |
```strA.concat(' (', strE, ')');``` | ```Hello, World! (010)``` |
```strA.indexOf('llo', 0);``` | ```2``` |
```strA.lastIndexOf('l');``` | ```10``` |
```strA.substr(7, 5);``` | ```World``` |
```strA.substring(7, 12);``` | ```World``` |
*`1 instance:`* ```strA.slice(7);``` | ```World!``` |
*`2 instance:`* ```strA.slice(7, 12);``` | ```World``` |
*`3 instance:`* ```strA.slice(-6);``` | ```World!``` |
*`4 instance:`* ```strA.slice(-6, -1);``` | ```World``` |
*`1 instance:`* ```strB.replace('ice', '');``` | ```kgi★cIceeb``` |
*`2 instance:`* ```strB.replace(/ice/gi, '');``` | ```kgi★ceb``` |
*`1 instance:`* ```strA.split('o, W');``` | ```[ 'Hell', 'orld!' ]``` |
*`2 instance:`* ```strA.split();``` | ```[ 'Hello, World!' ]``` |
```strA.includes('! ');``` | ```false``` |
```strA.repeate('!', strC.length);``` | ```Hello, World!!!!!!!!!!!!!!``` |
```strC.trim();``` | ```'Surrounded by whitesp'``` |
```strC.trimStart();``` | ```'Surrounded by whitesp '``` |
```strC.trimEnd();``` | ```' Surrounded by whitesp'``` |
```strD.starstWith('W', 4);``` | ```false``` |
```strD.endWith('?');``` | ```true``` |
```strE.padStart(8, '0');``` | ```00000010``` |
```strE.padEnd(10, '*');``` | ```010*******``` |
|  |  |

---
## :sparkles: Pattern tasks:
*Each task manipulates a different string*

#### 1. Requirement: Return only upper cases
> H W I J S D
###### Implementation:
```javascript
const strA = 'Hello, World! I\'m a JavaScript Developer.';

function upperCase(str) {
    let uppers = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
    
        if (charCode >= 65 && charCode <= 90) {
            uppers += `${str[i]} `;
        } else {
            str[i];   // Everything else!
        }
    }
    return uppers;
}
console.log(upperCase(strA));
```
***
#### 2. Requirement: Find all occurrence substrings
*For example substring 'the' from the string. Тhe return should be:*
> The substring 'the' meets 7 times.
###### Implementation: (_used method: indexOf()_)
```javascript
const strB = 'The indexOf() method returns the index within \
the calling String object of the first occurrence of the specified value, \
starting the search at fromIndex. For example, there is ...';
const substrB = 'the';

function howManyAsSubstr(strB, substrB) {
    let counter = 0;
    let fromIndex = 0;

    while (strB.indexOf(substrB, fromIndex) !== -1) {
        fromIndex = strB.indexOf(substrB, fromIndex) + 1;
        counter++;
    }
    return counter;
}
console.log(`The substring 'the' meets ${howManyAsSubstr(strB, substrB)} times.);
```
***
#### 3. Requirement: Find all occurrence words (substring surrounded by whitespaces)
> The word ' the ' meets 6 times.
###### Implementation: (_used method: split()_)
```javascript
const strB = 'The indexOf() method returns the index within \
the calling String object of the first occurrence of the specified value, \
starting the search at fromIndex. For example, there is ...';
const substrB = 'the';

function howManyAsWord(strB, substrB) {
    let counter = 0;
    let wordsArr = str.split(' ');

    for (let word of wordsArr) {
        if (word === substrB) {
            counter++;
        }
    }
    return counter;
}
console.log(`The substring 'the' meets ${howManyAsWord(strB, substrB)} times.`);
```
***
#### 4. Requirement: Remove all occurrence substrings 
*For example remove substring 'ice' from string 'kicegicIceeb'. Тhe rest should be:*
> kgb
###### Implementation:
```javascript
const strB = 'kicegicIceeb';
const substrB = 'ice';

function removeAllOccurrence(substr, str) {
    let old;
    while (old !== str) {
        old = str;
        str = str.replace(substr, '');
    }
    return str;
}
console.log(removeAllOccurrence(substrB, strB));
```
***
#### 5. Requirement: Replace some substring with repetitive character:
> This code is so s*** F*!!! H*** can freeze over.
###### 5.1. Implementation: (_used methods: padStart() or padEnd()_)
```javascript
...
```
###### 5.2. Implementation: (_used methods: replace() and repeate()_)
```javascript
let strC = 'This code is so shit FK!!! Hell can freeze over.';
let censor = ['shit', 'Hell', 'FK'];

function censorWords(str, censor) {
    censor.forEach(item => {
        const index = str.indexOf(item);

        if (index !== -1) {
            const censoredLen = 1;
            const firstChars = item.substr(0, censoredLen);
            const hiddenChars = '*'.repeat(item.length - censoredLen);

            str = str.replace(item, firstChars + hiddenChars);
        }
    });
    return str;
}
console.log(censorWords(strC, censorList));
```
***
#### 6. Requirement: ... 
_<p align=center>In progress...</p>_
***