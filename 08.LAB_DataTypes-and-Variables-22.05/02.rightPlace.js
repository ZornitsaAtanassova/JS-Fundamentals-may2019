function replaceUnderscore(firstStr, replaceChar, secondStr) {
    // You will receive 3 parameters (string, char, string). First string will be a word with a missing char replaced with a underscore '_' You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string. If they are equals you should print "Matched", otherwise print "Not Matched".

    // 1)Use method replace()
    // 2)Check if equal

    // This way not work for strings, unlike arrays!
    /* for (let i = 0; i < firstStr.length; i++) {
        //console.log(firstStr[i]);
        if (firstStr[i] === '_') {
            firstStr[i] = missingChar;
            console.log(firstStr[i]);
            break;
        }        
    } */

    firstStr = firstStr.replace('_', replaceChar);
    // console.log(firstStr);

    if (firstStr === secondStr) {
        console.log('Matched');
    } else{
        console.log('Not Matched');
    }
}

replaceUnderscore('Str_ng', 'I', 'Strong');   // Not Matched
replaceUnderscore('Str_ng', 'i', 'String');    // Matched
