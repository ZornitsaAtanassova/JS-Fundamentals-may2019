/* Undefined and Null:
undefined - Никога не е имало нещо там!
let a;
let a = null;
let a = 0; */

/* Array конструктор?
Масивите са от тип обекти
JS позволява данните да са от различен тип, но не е добра практика!
Могат да се extend-ват динамично. Т.е. имат неопределена дължина, за разлика от С, С++, С#,...
Конвенционално индексите:
    - започват от [0]
    - и завършват до [arrName.length - 1] */

/* Обхождане на елементите се прави по индекси чрез:
    - по отделно - arrName[0], ..., до послдения [arrName.length - 1].
    -for loop - for(let i = 0; i < arrName.length; i++) */

/* let arrName = [0, 1, 2, 3];
for (let i = 0; i < arrName.length; i++) {
    console.log(arrName[i]);
}

for (let i = 0; i <= arrName.length-1; i++) {
    console.log(arrName[i]);
}

for (let i = 1; i < arrName.length; i++) {
    console.log(arrName[i]);
} */

//*********************************************
function dayOfWeek(day) {
    let days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]); //Because indexes starts from [0] -> Mon=[day1 - 1]=[0]; Tue=[day2-1]=[1]; ect...
    } else {
        console.log('Invalid day!');
    }

    if (day <= 0 || day > 7) {
        return 'Invalid day!';
    }
    return days[day - 1];
}

dayOfWeek(3);
//*********************************************

let arr = [1, 2, 3];

console.log(arr[2]);
console.log(arr.includes('10'));

arr[0] = 10; // assignment operator for change element
arr.push(5); // method for ADD element at the end
arr.unshift(0); // method for ADD element at the begining
arr.shift(); // method for CUT element at the begining
arr.pop(); // method for CUT element at the end
console.log(arr[Math.floor(arr.length / 2)]); // find element in the middle of array
console.log(arr.toString()); // print array like string without separate
console.log(arr); // print array like array
arr.reverse(); // reverse array
console.log(arr); // print reversed array like array

// For-of*************************************
for (let arrElement of arr) {
    console.log(arrElement + 1);
}

let days = ['Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'Sun'];

for (let day of days) {
    console.log(day + 'day');
}
console.log(days);
// For-of*************************************

for (let i = 0; i < days.length; i++) {
    days[i] += 'day';
}
console.log(days);

// For-in*************************************
for (let arrIndex in arr) {
    console.log(arrIndex);
}
// For-in*************************************

// join()/split()*************************************
let arrToStr = [1, 2, 3];
console.log(arrToStr.join(' / '));
let strToArr = '1, 2, 3';
console.log(strToArr.split(', '));
// join()/split()*************************************

//Objects******************************************* */
const pesho = {};
pesho.name = 'Pesho';
pesho['age'] = 22;
pesho[10] = 10;
console.log(pesho);
//Objects******************************************* */




