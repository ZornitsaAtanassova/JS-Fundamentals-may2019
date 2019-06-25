function houseParty(input) {
    // Write a function that keeps track of guests that are going to a house party. You will be given an array of strings. Each string will be one of the following:
    // "{name} is going!" - If you receive this input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
    // "{name} is not going!" - If you receive this input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").
    // At the end print all the guests each on a separate line.

    // 1)With for-of loop throught input array
    // 2)Dfine work variable for each element
    // 3)Split each element in work var
    // 4)Define global empty array for list of present guests
    // 5)Define variable for name of guests
    // 6)Check whether he/she will attend the party - TRUE:
        // 6.1)Define flag variable for included name in list
        // 6.2)Nested check whether he/she already exists in the list of guests
            // 6.2.1)Print
            // 6.2.2)Add to array list of guests
    // 7)FALSE:
        // 7.1)Define variable for index name
        // 7.2)Nested check
            // 7.2.1)Remove from array list of guests
            // 7.2.2)Print
            
    let listOfGuests = [];

    for (let str of input) {
        let workArr = str.split(' '); // console.log(workArr);
        let name = workArr[0]; // console.log(name);
        
        if (workArr.length === 3) {
            // Add person to list of guests
            let isIncluded = listOfGuests.includes(name);

            if (isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                listOfGuests.push(name);
            }
        } else {
            // Remove person from list of guests
            let indexOfPerson = listOfGuests.indexOf(name);

            if (indexOfPerson !== -1) {
                listOfGuests.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    
    console.log(listOfGuests.join(`\n`));
}

houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!']);   //  John is not in the list!   Allie
console.log(`--------------------------------`);
houseParty(['Tom is going!',
            'Annie is going!',
            'Tom is going!',
            'Garry is going!',
            'Jerry is going!']);   //  Tom is already in the list!   Tom   Annie   Garry   Jerry
