function matchPhoneNumber(input) {
    // Write a regular expression to match a valid phone number from Sofia. After you find all valid phones, print them on the console, separated by a comma and a space ", ".
    // A valid number has the following characteristics:
    // • It starts with "+359"
    // • Then, it is followed by the area code (always 2)
    // • After that, it’s followed by the number itself:
    // ◦ The number consists of 7 digits (separated in two groups of 3 and 4 digits respectively). 
    // • The different parts are separated by either a space or a hyphen ('-').

    let pattern = /[+][359]+([ -])[2]\1[\d]{3}\1[\d]{4}\b/g; // with SAME type of delimiters: space OR hyphen!
    // [+][359]+[ -][2][ -][\d]{3}[ -][\d]{4}\b - with MIXED delimiters: space AND hyphen!

    let validPhoneNumber = [];
    let matched = pattern.exec(input);
    // console.log(matched);

    while (matched !== null) {
        validPhoneNumber.push(matched[0]);
        matched = pattern.exec(input);
    }
    
    console.log(validPhoneNumber.join(', '));
}

matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');     // +359 2 222 2222, +359-2-222-2222
