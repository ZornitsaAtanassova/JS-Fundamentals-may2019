## _<p align=center>Quick Reference:</p>_ _<p align=center>A simple description of JS objects and [Оbject](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) methods</p>_
_<p align=center>{ **Enjoy!** :kissing_closed_eyes::grin: };</p>_


***
[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) is one of [JavaScript Standard Built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). 

JavaScript variables are containers for data values. Objects are variables too. But objects can contain many values. For example, in real life, a car is an object. A car has properties like weight and color, and methods like start and stop:
![Image of object in real life](https://github.com/ZornitsaAtanassova/JS-Fundamentals-may2019/blob/master/20.LAB_Objects-and-Classes-19.06/objectInRealLife.png)
All cars have the same **properties**, but the property values differ from car to car. All cars have the same **methods**, but the methods are performed at different times (Methods are actions that can be performed on objects. Methods are stored in properties as function definitions).

**Object Definition syntax:**
The Object constructor creates an object wrapper. The Object can be defined (and create) in 2 ways - with an object literal and called as a constructor:
```javascript
let objName = {
    property1: value,
    property2: value,
    ...
};

// or:

let objName = new Object(values, ...);
```
**Class Definition syntax:**
```javascript
class ClassName {
    constructor(property1, property2, ...) {
        this.property1 = property1;
        this.property2 = property2;
        ...
    }
};
```

## :sparkles: Table of frequently used object methods:

Method description | Returns |
------------------ | ------- |
[*Object.keys(obj);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) Returns an array of a given object's own property names, in the same order as we get with a normal loop | an array of properties like **strings** |
[*Object.values(obj);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop | an array of values in theirs data type |
[*Object.entries(obj);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) Returns an array of a given object's own enumerable string-keyed property [key, value] pairs | an array of arrays of key-value tuples |

:bangbang: Since the returned results are mostly arrays, the array methods can be applied chaining!

## :owl: Table with simple examples:
*For examples, this initial object is used:* 
```javascript
                    let obj = {
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 20
                    };
```

Examples | Returns |
-------- | ------- |
```Object.keys(obj);``` | ```['firstName', 'lastName', 'age']``` |
```Object.keys(obj).length;``` | ```3``` |
```Object.getOwnPropertyNames(obj).length;``` | ```3``` |
--------------------- | ------
```Object.values(obj);``` | ```['John', 'Doe', 20]``` |
```Object.entries(obj);``` | ```[ ['firstName', 'John'], ['lastName', 'Doe'], ['age', 20] ]``` |
---

## :sparkles: Table of all(2) methods used by JSON object:
[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) (**J**ava**S**cript **O**bject **N**otation) is Open-standard file format that uses text to transmit data objects. Also, it is one of [JavaScript Standard Built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). JSON is language independent. JSON is "self-describing" and easy to understand.
JSON Usage:
* Exchange data between browser and server
* JSON is a lightweight format compared to XML
* JavaScript has built-in functions to parse JSON so it's easy to use
* JSON uses human-readable text to transmit data


Method description | Returns |
------------------ | ------- |
[*JSON.parse(text in JSON format);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) Parses a JSON string, constructing the JavaScript value or object described by the string | an object |
[*JSON.stringify(object, replacer, space);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Converts a JavaScript object or value to a JSON string | a JSON string |

## :owl: Table with simple examples: 

Examples | Returns |
-------- | ------- |
```JSON.parse('{"x":5, "y":6, "z":"7"}');``` | ```{'x': 5, 'y': 6, 'z': '7'}``` |
```JSON.stringify({x: 5, y: 6, z: '7'});``` | ```'{"x":5, "y":6, "z":"7"}'``` |
```JSON.stringify({x: 5, y: 6}, null, 4);``` | ```'{ "x": 5, "y": 6 }'``` |
---

## :owl: Pattern tasks:
*For examples, this initial object is used:*
```javascript
                    let person = {
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 20
                    };
```

#### 1. Requirement: Return a specific value, for example:
> John
###### 1.1. Implementation:
```javascript
person.firstName;
```
###### 1.2. Implementation:
```javascript
person['firstName'];
```
###### 1.3. Implementation:
```javascript
let prop = 'firstName';
person[prop];
```
***

#### 2. Requirement: Return few of values, for example:
> Doe 

> 20
###### Implementation:
```javascript
let fewProp = ['lastName', 'age'];
for (let prop of fewProp) {
    person[prop]; 
}
```
***
#### 3. Requirement: Return all kays/properties:
> [ 'firstName', 'lastName', 'age' ]
###### 3.1. Implementation:
```javascript
Object.keys(person);
```
> 'firstName', 'lastName', 'age'
###### 3.2. Implementation:
```javascript
for (let key in person) {
    ...key...
}
```
***
#### 4. Requirement: Return array of all values:
> [ John, Doe, 20 ]
###### Implementation:
```javascript
Object.values(person);
```
***
#### 5. Requirement: Return object. All of pairs (_PROPERTY:VALUE_), like object:
> { firstName: John, lastName: Doe, age: 20 }
###### Implementation:
```javascript
person;
```
***
#### 6. Requirement: Return array of arrays. All of pairs (_PROPERTY:VALUE_), like array:
> [ [firstName, John], [lastName, Doe], [age, 20] ]
###### Implementation:
```javascript
Object.entries(person);
```
***
#### 7. Requirement: Return strings. All of pairs (_PROPERTY:VALUE_), like strings:
> firstName: John

> lastName: Doe

> age: 20
###### 7.1. Implementation: Destructoring syntax. New in EcmaScript 6! for...of and Object.entries(...);
```javascript
let entries = Object.entries(person);
for (let [key, value] of entries) {
     console.log(`${key}: ${value}`);
}
```
###### 7.2. Implementation: for...of and Object.entries(...);
```javascript
for (const tuple of Object.entries(person)) {
     const key = tuple[0];
     const value = tuple[1];

     console.log(`${key}: ${value}`);
}
```
###### 7.3. Implementation: Object.entries(...) and forEach(...);
```javascript
Object.entries(person)
      .forEach(tuple => console.log(tuple.join(': ')));
```
###### 7.4. Implementation: for...in
```javascript
for (const key in person) {
     const value = person[key];

     console.log(`${key}: ${value}`);
}
```
***
#### 8. Requirement: Sorting an object by properties
> age: 20

> firstName: John

> lastName: Doe
###### Implementation:
```javascript
let entries = Object.entries(person).sort((a, b) => a > b);
for (let [key, value] of entries) {
     console.log(`${key}: ${value}`);
}
```
***
#### 8. Requirement: Sorting an array of objects by properties. First sort priority - by 'first name' (in ascending order A-Z). Second sort - by 'age' (in descending order 9-0)
> First sort result: -------|------ Second (final) sort result:

--------------------------------|--------------------------

> James at 7 ------------|----------- Maya at 44

> John at 20 -------------|----------- John at 20

> Maya at 44 ------------|----------- James at 7

> Mohn at 4 --------------|----------- Mohn at 4
###### Implementation:
```javascript
let arrOfObjPerson = [ {firstName: 'John', lastName: 'Doe', age: 20},
                       {firstName: 'Mohn', lastName: 'Doe', age: 4},
                       {firstName: 'Maya', lastName: 'Bond', age: 44},
                       {firstName: 'James', lastName: 'Bond', age: 7}
];

arrOfObjPerson.sort((a, b) => a.firstName.localeCompare(b.firstName));
arrOfObjPerson.sort((a, b) => a.age < b.age));

for (let person of arrOfObjPerson) {
     console.log(`${person.firstName} at ${person.age}`);
}
```
***
#### 9. Requirement: Short declaring (syntax sugar)

###### Implementation:
```javascript
function person(firstName, middleName, lastName) {
    let age = 22;
    let person = {
        firstName,
        middleName,
        lastName,
        age
    };
}
```
***