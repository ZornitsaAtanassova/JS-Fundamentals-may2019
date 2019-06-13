function concatenateNames(firstName, secondName, delimiter) {
    // Write a function which receives two names as string parameters and a delimiter. Print the names joined by the delimiter.

    // 1 way:
    // console.log(firstName + delimiter + secondName);
    // 2 way:
    // console.log(`${firstName}${delimiter}${secondName}`);
    // 3 way:
    return `${firstName}${delimiter}${secondName}`;
}

concatenateNames('John', 'Smith', '->');     // John->Smith
concatenateNames('Jan', 'White', '<->');     // Jan<->White
concatenateNames('Linda', 'Terry', '=>');     // Linda=>Terry
