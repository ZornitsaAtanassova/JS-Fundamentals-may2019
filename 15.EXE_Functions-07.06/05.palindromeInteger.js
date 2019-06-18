function palindrome(input) {
    // A palindrome is a number which reads the same backward as forward, such as 323 or 1001. Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.

    // Solves:
    // 1.for back-loop -> reverse numbers
    // 2.half for back-loop + check
    // 3.Convert to String + str operations

    // 1 solve:
    // 1)Define hoisting function who return Boolean
        // 1.1)Define variable for reversed input
        // 1.2)Define var...

/*     for (let element of input) {
        console.log(isPalindrome(element));
    }

    function isPalindrome(num) {
        let reversedNum = '';
        let numAsStr = num.toString();

        for (let i = numAsStr.length - 1; i >= 0; i--) {
            reversedNum += numAsStr[i];
        }

        return numAsStr === reversedNum;
    } */

    // 2 solve:
    for (let element of input) {
        console.log(isPalindrome(element));
    }

    function isPalindrome(num) {
        let numAsStr = num.toString();
        let lengthOfNum = numAsStr.length;
        
        for (let i = 0; i < lengthOfNum / 2; i++) {
            if (numAsStr[i] !== numAsStr[lengthOfNum - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}

palindrome([123,323,421,121]);     // false true false true
palindrome([32,2,232,1010]);     // false true true false
