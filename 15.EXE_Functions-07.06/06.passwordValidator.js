function passwordValidator(password) {
    // Write a function that checks if a given password is valid. Password validations are: 
    // • The length should be 6 - 10 characters (inclusive)
    // • It should consists only of letters and digits A-Z/a-z/0-9
    // • It should have at least 2 digits 
    // If a password is valid print "Password is valid". If it is NOT valid, for every unfulfilled rule print a message:
    // • "Password must be between 6 and 10 characters"
    // • "Password must consist only of letters and digits"
    // • "Password must have at least 2 digits"


    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;

    let validLength = hasValidLength();
    let validContent = hasValidContent();
    let valiDidits = hasAtleastTwoDigits();

    if (!validLength) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!validContent) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (!valiDidits) {
        console.log(`Password must have at least 2 digits`);
    }

    if (validLength && validContent && valiDidits) {
        console.log(`Password is valid`);
    }

    // console.log(hasValidContent());
    function hasValidLength() {
        return password.length >= 6 && password.length <= 10;
    }

    function hasValidContent() {
        // let isValid = true;
        let lowerCasePass = password.toLowerCase();
        let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;

        for (let i = 0; i < lowerCasePass.length; i++) {
            let ascii = lowerCasePass.charCodeAt(i);

            /* if (!(isLetter(ascii) || isDigit(ascii))) {
                // Not A-Z and not 0-9
                // isValid = false;
                // break;
                return false;
            } */
            if (isLetter(ascii) || isDigit(ascii)) {
                continue;
            }

            return false;
        }

        return true;
    }

    function hasAtleastTwoDigits() {
        let digitsCount = 0;

        for (let i = 0; i < password.length; i++) {
            let ascii = password.charCodeAt(i);

            let asciiIsDigit = isDigit(ascii);

            if (asciiIsDigit) {
                digitsCount++;
            }
        }

        return digitsCount >= 2;
    }
}

passwordValidator('logIn');     // Password must be between 6 and 10 characters    Password must have at least 2 digits
console.log(`-------------------------------`);
passwordValidator('MyPass123');     // Password is valid
console.log(`-------------------------------`);
passwordValidator('Pa$s$s');     // Password must consist only of letters and digits    Password must have at least 2 digits
