function sumDigits(number) {
    //Write a function which will be given a single number. Your task is to find the sum of its digits.

    //1)Convert number to string
    //2)Define sum variable
    //3)Iterate through string with "for" loop
    //4)Convert string to number
    //5)Add to sum
    //6)Print

    let numAsText = number.toString();
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        let digit = Number(numAsText[i]);   //Number(numAsText.charAt(i));
        sum += digit;
    }

    console.log(sum);
}

sumDigits(245678);  //32
sumDigits(97561);   //28
sumDigits(543);     //12
