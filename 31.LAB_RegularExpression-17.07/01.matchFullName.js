function matchFullName(input) {
    // Write a JavaScript function to match full names from a list of names and print them on the console.
    // A valid full name has the following characteristics:
    // ◦ It consists of two words.
    // ◦ Each word starts with a capital letter.
    // ◦ After the first letter, it only contains lowercase letters afterwards.
    // ◦ Each of the two words should be at least two letters long.
    // ◦ The two words are separated by a single space.

    let pattern = /\b[A-Z][a-z]{1,}[ ][A-Z][a-z]{1,}\b/g;

    // 1 solve: used string method - match(), returned an array of the matched pattern 
    // console.log(input.match(pattern).join(' '));

    // 2 solve: used RegExp method - exec(), returned an array of the matches pattern
    let validName = [];
    let matched = pattern.exec(input);
    // console.log(matched);

    while (matched !== null) {
        validName.push(matched[0]);
        matched = pattern.exec(input);
    }
    
    console.log(validName.join(' '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');    // Ivan Ivanov Test Testov
