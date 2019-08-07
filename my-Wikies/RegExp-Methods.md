## _<p align=center>Quick Reference:</p>_ _<p align=center>A simple description of the [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object methods</p>_
_<p align=center>In progress...</p>_
_<p align=center>/^ **Enjoy!** :kissing_closed_eyes::grin: $/;</p>_


***
[*RegExp*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) is one of [JavaScript Standard Built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). It falls into the category "Text processing" along with object [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). These objects represent strings and support manipulating them. Regular expressions are patterns used to match character combinations in strings.

## :sparkles: Table of all(2) methods used by RegExp object:

Method description | Returns |
------------------ | ------- |
[*test(string);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ... | **true** or **false** |
[*exec(string);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) ... | For every single match - individual **array** with strings of: _['the match', 'groups', 'index', 'initial string']_  or **null** |

### :owl: : Simple examples:
*For examples, this initial string is used:* 
```javascript
             let order = '%George%<Croissant>|2|10.3$';
```

#### 1. Used method _exec()_: Return from order customer, product, count and price
> George

> Croissant

> 2

> 10.3

> ```javascript
> [ '%George%<Croissant>|2|10.3$',
>   'George',
>   'Croissant',
>   '2',
>   '10.3',
>   index: 0,
>   input: '%George%<Croissant>|2|10.3$' ]
> ```
###### Implementation:
```javascript
let pattern = /%([A-Z][a-z]+)%<(\w+)>\|(\d+)\|(\d+[.]?\d+)\$/g;

let match = pattern.exec(order);

console.log(`${match[1]}\n${match[2]}\n${match[3]}\n${match[4]}\n`);
console.log(match);
```
---

## :sparkles: Table of methods used by String object above RegExp:

Method description | Returns |
------------------ | ------- |
[*match(pattern);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) ... | an **array** of strings with the all matches or **null** |
[*split(pattern);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) ... | ... |
[*replace(pattern, substring);*]() ... | ... |
[*search(pattern);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) ... | ... |
[*matchAll(pattern);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) Don't work in SoftUni Judge! | ... |


### :owl: : Table with simple examples:
*For examples, these initial string and patterns are used:* 
```javascript
let str = '%George%<Croissant>|2|10.3$';
let patternA = /[A-Z][a-z]+|[\d\.]+/g;
```

Examples | Returns |
-------- | ------- |
```str.match(patternA);``` | ```['George', 'Croissant', '2', '10.3']``` |
---

## :sparkles: :owl: Pattern tasks:
*Each task manipulates a different string with different pattern*

#### 1. Requirement: Return ...
> ...
###### Implementation:
```javascript
...
```
***
#### 2. Requirement: ... 
_<p align=center>In progress...</p>_
***