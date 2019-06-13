function reverseAnArrayOfStrings(inputArr) {
    // Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its elements. Swap elements.

// 1 way - method 'reverse()' + string variable for inline printing
    // 1)Reverse array with method 'reverse()'
    // 2)Define string variable for output array's elemens inline
    // 3)Iterates reversed array and heap output variable
    // 4)Print
    
/*     inputArr.reverse();
    let output = '';

    for (let i = 0; i < inputArr.length; i++) {
        output += inputArr[i] + ' ';
    }

    console.log(output); */

// 2 way - method 'reverse()' + method 'join()' for inline printing

    inputArr.reverse();
    console.log(inputArr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);  // e d c b a 
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);   // nop klm hig def abc
reverseAnArrayOfStrings(['33', '123', '0', 'dd']); // dd 0 123 33
