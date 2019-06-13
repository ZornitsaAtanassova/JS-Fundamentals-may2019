function addOrSubtract(arr) {
    //Write a function, which changes the value of odd and even numbers in an array of numbers. If the number is even - add to its value its index position. If the number is odd - subtract to its value its index position
    
    //1)Define 2 sum variables - for original and modified array element sum
    //2)Iterate through array from 0 while arr.length. Because I will use the indexes
    //3)Sum up numbers from the original array 
    //4)Verify even or odd
    //5)Add or subtract index value to element value
    //6)Sum up numbers from the new modified array
    //7)Print
    
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;
    
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      sumOriginalArr += arr[i];
      
      if (arr[i] % 2 == 0) {
        arr[i] = arr[i] + i;
      } else {
        arr[i] = arr[i] - i;
      }
      
      sumModifiedArr += arr[i];
    }
    
    console.log(arr);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);
}

addOrSubtract([5, 15, 23, 56, 35]);    //[5, 14, 21, 59, 31] 134 130
addOrSubtract([-5, 11, 3, 0, 2]);    //[-5, 10, 1, 3, 6] 11 15
