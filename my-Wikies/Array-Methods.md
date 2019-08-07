## _<p align=center>Quick Reference:</p>_ _<p align=center>A simple description of the [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods</p>_
_<p align=center>It is my first Wiki :blush:. I hope it is useful to you as well!</p>_
_<p align=center>[ **Enjoy!** :kissing_closed_eyes::grin: ];</p>_


***

## :sparkles: Table of frequently used array methods:

Method description | Returns | Changes the array | Does not change the array |
------------ | ------------- |------------- | ------------- |
[*unshift();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) Add to the front of an Array | new **length** of the array | :heavy_check_mark: | :heavy_multiplication_x: |
[*shift();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) Remove from the front of an Array | that removed **element** | :heavy_check_mark: | :heavy_multiplication_x: |
[*push();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Add to the end of an Array | new **length** of the array | :heavy_check_mark: | :heavy_multiplication_x: |
[*pop();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) Remove from the end of an Array | that removed **element** | :heavy_check_mark: | :heavy_multiplication_x: |
[*sort();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) Sorts the elements of an array. Converting the elements into strings, then comparing their sequences of UTF-16 code | sorted **array** |:heavy_check_mark: | :heavy_multiplication_x: |
[*reverse();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) Reverses an array | reversed **array** | :heavy_check_mark: | :heavy_multiplication_x: |
[*indexOf();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Default finds the index of the first met search item | the first met **index**, or **-1** if it is not present | :heavy_multiplication_x: | :heavy_check_mark: |
[*includes();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) Determines whether an array includes a certain value | **true**, or **false** | :heavy_multiplication_x: | :heavy_check_mark: |
[*join();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) Create a new string by concatenating all of the elements in an array with separator | new **string** with some separator | :heavy_multiplication_x: | :heavy_check_mark: |
[*toString();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) Create a new string by concatenating all of the elements in an array by commas | new **string** with commas | :heavy_multiplication_x: | :heavy_check_mark: |
[*forEach();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) Loop over an Array and executes a provided function once for each array element | **function return** | could | could |
[*map();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Creates a new array. Loop over an Array and executes a provided function once for each array element | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*filter();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Creates a new array with all elements that **pass the test** implemented by the provided function | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*slice();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) Copy a portion(or all) of an array into a new array object selected from begin to end (end not included) | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*splice();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Changes the contents of an array by **removing** or **replacing** existing elements and/or **adding** new elements | **changed array** and **new array** | :heavy_check_mark: | :heavy_multiplication_x: |
 |  |  |  |  | 
---
## :owl: Table with simple examples:
*For examples, this initial array is used:* ```let arr = ['a', 'b'];```

Examples | Returns | Original array |
------------ | ------------- |------------- |
```arr.unshift('some1');``` | ```4``` | **```['some1', 'a', 'b']```** |
```arr.shift();``` | ```some1``` | **```['a', 'b']```** |  |
```arr.push('c', 'some2');``` | ```4``` | **```['a', 'b', 'c', 'some2']```** |
```arr.pop();``` | ```some2``` | **```['a', 'b', 'c']```** |
*`1 instance:`* ```arr.sort((a, b) => b.localeCompare(a));``` | ```['c', 'b', 'a']``` | **```['c', 'b', 'a']```** |
*`2 instance:`* ```arr.sort((a, b) => a < b);``` | ```['c', 'b', 'a']``` | **```['c', 'b', 'a']```** |
```arr.reverse();``` | ```['a', 'b', 'c']``` | **```['a', 'b', 'c']```** |
```arr.indexOf('c', 1);``` | ```2``` | ```['a', 'b', 'c']``` |
```arr.include('d');``` | ```false``` | ```['a', 'b', 'c']``` |
```arr.join(' - ');``` | ```a - b - c``` | ```['a', 'b', 'c']``` |
```arr.toString();``` | ```a,b,c``` | ```['a', 'b', 'c']``` |
```arr.forEach(function(el, id) { console.log(el, id); });``` | a 0 :arrow_heading_down: b 1 :arrow_heading_down: c 2 | ```['a', 'b', 'c']``` |
```arr.map(function(x) { return x.toUpperCase(); });``` | **new array:** ```['A', 'B', 'C']``` | ```['a', 'b', 'c']``` |
```arr.filter(char => char === 'a');``` | **new array:** ```['a']``` | ```['a', 'b', 'c']``` |
*`1 instance:`* ```arr.slice(1, 2);``` | **new array:** ```['b']``` | ```['a', 'b', 'c']``` |
*`2 instance:`* ```arr.slice(0);``` | **new array:** ```['a', 'b', 'c']``` | ```['a', 'b', 'c']``` |
*`1 instance:`* ```arr.splice(2, 1);``` | **new array:** ```['c']``` | **```['a', 'b']```** |
*`2 instance:`* ```arr.splice(1, 0, 'some');``` | **new array:** ```[]``` | **```['a', 'some', 'b']```** |
*`3 instance:`* ```arr.splice(0, 3, 'ab', 'cd', 'ef', '...');``` | **new array:** ```['a', 'some', 'b']``` | **```['ab', 'cd', 'ef', '...']```** |
|  |  |  |

*The initial array: ```arr = ['a', 'b']``` after was modified by applied methods, now looks like this: ```arr = ['ab', 'cd', 'ef', '...']```*

---