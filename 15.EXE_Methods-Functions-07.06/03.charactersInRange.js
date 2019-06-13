function charactersInRange(firstChar, secondChar) {
    // Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
    // Поредността на подадените параметри може и да не се спазва. Т.е. последния параметър може да се използва за първи в диапазона!!!

    // 1)Define char code variable. Fix char ASCII/UTF-8 code. Use method ".charCodeAt(0);"
    // 2)Define counters. Fix smaller char-code to start from him and bigger for stop. Use Math.min() method.
    // 3)Define new empty array for range printing. Or string variable!
    // 4)Iterate ASCII/UTF-8 from next code to before last code
    // 5)Convert ASCII/UTF-8 char-code to String. Use method "String.fromCharCode(127)"
    // 6)Store array. Use method ".push(element);"
    // 7)Print. Use method ".join(' ');" for inline whith space
    
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let startLoop = Math.min(firstCode, secondCode);
    let endLoop = Math.max(firstCode, secondCode);

    let characters = [];
    //let output = '';
    for (let i = startLoop + 1; i < endLoop; i++) {
        let currentChar = String.fromCharCode(i);
        characters.push(currentChar);
        //output += currentChar + ' ';
    }

    console.log(characters.join(' '));
}

charactersInRange('a', 'd');    // b c
charactersInRange('#', ':');    // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
charactersInRange('C', '#');    // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
