function lowerToUpper(character) {
    //Write a function that prints whether a given character is upper-case or lower-case.
    //See: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip AND https://jsperf.com/isupper-comparison/5

    //1)Convert input character case in upper (or lower)
    //2)Verify input character with converted input character

    let upperConvertCharacter = character.toUpperCase();

    if (character === upperConvertCharacter) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowerToUpper('L');     //upper-case
lowerToUpper('f');  //lower-case
