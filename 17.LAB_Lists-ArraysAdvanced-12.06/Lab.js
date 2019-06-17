const numbers = ['1', '2', '3', '4', '5', '6'];
console.log(numbers.join(', '));

// add at the tail end - element(cell and value)
numbers.push('seven(7)');
console.log(numbers.join(', '));

// remove from the tail end - element(cell and value)
numbers.pop();
console.log(numbers.join(', '));

// add at the start - element(cell and value)
numbers.unshift('zero(0)');
console.log(numbers.join(', '));

// remove from the start - element(cell and value)
numbers.shift();
console.log(numbers.join(', '));

numbers.map(Number);
console.log(numbers.join(', '));

// add at the middle - element(cell and value)
/* for (let i = 1; i < numbers.length; i++) {
    let worker = [];

} */

// remove from anywhere - only value, cell stay and there is undefined. Not good for arrays!
delete numbers[1];
console.log(numbers.join(', '));


console.log(`------------------------`);
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