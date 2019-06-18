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
const sliceNewArrReturn1 = numbers.slice('1', '3');
const sliceNewArrReturn2 = numbers.slice(0);
console.log(sliceNewArrReturn1, sliceNewArrReturn2, numbers);
console.log(`**************slice**************\n`);

console.log(`-----------sPlice-------------`);
//  method ".splice()". Change origin array! Replace range from the origin array to new array. First argument is START index/value (include), Second argument is END index/value (exclude)!
const spliceNewArrReturn1 = numbers.splice(1, 2);
const spliceNewArrReturn2 = numbers.splice(1, 0, '2', '3');
console.log(spliceNewArrReturn1, spliceNewArrReturn2, numbers);

// algorithm for add at the middle - element(cell and value)
/* for (let i = 1; i < numbers.length; i++) {
    let worker = [];

} */
console.log(`-----------sPlice--------------\n`);

console.log(`==========map, forEach, filter==========`);
//  method ".map()"
const mapNewArrReturn = numbers.map(Number);
console.log(mapNewArrReturn, numbers);

// method ".forEach()"
let forEachNewVariableReturn = '';
numbers.forEach((element) => {
    forEachNewVariableReturn += (Number(element) + 100) + ' ';
});
console.log(forEachNewVariableReturn, numbers);

// method ".filter()"
const filterNewNewArrReturn = numbers.filter((el) => {
    return el % 2 === 0;
});
console.log(filterNewNewArrReturn, numbers);
console.log(`==========map, forEach, filter==========\n`);

//  operator "delete". Remove from anywhere - only value, cell stay and there is undefined. Not good for arrays! Use pop() and shift() instead!
delete numbers[1];
console.log(numbers);

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


//===========================================
// Access all of array elements front of behind
    let arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (let element of arrTwo) {
        console.log(element);
    }
    console.log(`------------------------`);

// Access all of array elements backwards
    for (let i = arrTwo.length-1; i >= 0 ; i--) {
        console.log(arrTwo[i]);
    }
    console.log(`------------------------`);

// Access the first element
    console.log(arrTwo[0]);
    // console.log(arrTwo.shift());
// Access the last element
    console.log(arrTwo[arrTwo.length - 1]);
    // console.log(arrTwo.pop());
// Access the middle element/elements
    let lengthArr = arrTwo.length;
    if (lengthArr % 2 !== 0) {
        console.log(arrTwo[Math.floor(lengthArr / 2)]);
    } else {
        console.log(arrTwo[(lengthArr / 2) - 1] + ' ' + arrTwo[lengthArr / 2]);
    }
    console.log(`------------------------`);

// Sum up all elements mirrored(огледално)
    for (let i = 0; i < Math.floor(arrTwo.length/2); i++) {
        // console.log(arr[i]);
        let sum = Number(arrTwo[i]) + Number(arrTwo[arrTwo.length-1 - i]);
        console.log(sum);
    }
    console.log(`------------------------`);
