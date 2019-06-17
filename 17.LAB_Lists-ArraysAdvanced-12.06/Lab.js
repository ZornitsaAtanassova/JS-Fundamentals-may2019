const numbers = ['1', '2', '3', '4', '5', '6'];
console.log(`=*=*=*=*=*=*join, push, pop, unshift, shift=*=*=*=*=*=*`);
// method ".join('')". Return string from all array's elements
console.log(numbers.join(' mississippi, '), numbers);

// method ".push()". Add at the tail end - element(cell and value)
const pushReturn = numbers.push('seven(7)');
console.log(pushReturn, numbers);

// method ".pop()". Remove from the tail end - element(cell and value)
const popReturn = numbers.pop();
console.log(popReturn, numbers);

// method ".unshift()". Add at the start - element(cell and value)
const unshiftReturn = numbers.unshift('zero(0)');
console.log(unshiftReturn, numbers);

//  method ".shift()". Remove from the start - element(cell and value)
const shiftReturn = numbers.shift();
console.log(shiftReturn, numbers);
console.log(`=*=*=*=*=*=*join, push, pop, unshift, shift=*=*=*=*=*=*\n`);

console.log(`**************slice**************`);
//  method ".slice()". Copies range from the origin array to new array. First argument is START index/value (include), Second argument is END index/value (exclude)!
const sliceReturn1 = numbers.slice('1', '3');
const sliceReturn2 = numbers.slice(0);
console.log(sliceReturn1, sliceReturn2, numbers);
console.log(`**************slice**************\n`);

console.log(`-----------sPlice-------------`);
//  method ".splice()". Change origin array! Replace range from the origin array to new array. First argument is START index/value (include), Second argument is END index/value (exclude)!
const spliceReturn1 = numbers.splice(1, 2);
const spliceReturn2 = numbers.splice(1, 0, '2', '3');
console.log(spliceReturn1, spliceReturn2, numbers);
console.log(`-----------sPlice--------------\n`);

//  method ".map()".
const mapReturn = numbers.map(Number);
console.log(mapReturn, numbers);

// method ".forEach()". 
let newVariableForEach = '';
numbers.forEach((element) => {
    newVariableForEach += (Number(element) + 100) + ' ';
});
console.log(newVariableForEach);
console.log(numbers);

//  operator "delete". Remove from anywhere - only value, cell stay and there is undefined. Not good for arrays! Use pop() and shift() instead!
delete numbers[1];
console.log(numbers);

// algorithm for add at the middle - element(cell and value)
/* for (let i = 1; i < numbers.length; i++) {
    let worker = [];

} */
console.log(`------------------------`);

// Sorting array
const arrNumbers = ['11', '15', '-123', '99', '5', '-5'];
function sortNums(strArr) {
    const newSortedArr = [];

    for (let i = 0; i < strArr.length; i++) {
        const num = Number(strArr[i]);
        if (num < 0) {
            newSortedArr.unshift(num);
        } else {
            newSortedArr.push(num);
        }

        // ternary operator:
        /* (num < 0)
            ? newSortedArr.unshift(num)
            : newSortedArr.push(num); */
    }
    return newSortedArr.join('\n');
}
const newSortedArr = sortNums(arrNumbers);
console.log(newSortedArr);
console.log(arrNumbers);
console.log(`------------------------`);

// method ".forEach()"
arrOne = [1, 2, 3];
for (let i = 0; i <arrOne.length; i++) {
    arrOne[i] += 10;
}
console.log(arrOne);

let newArrOne = [];
arrOne.forEach((element) => {
    // element -= 10;
    newArrOne.push(element -= 10);
    // console.log(element);
    arrOne.pop();
});
console.log(newArrOne);
console.log(arrOne);
console.log(`------------------------`);

