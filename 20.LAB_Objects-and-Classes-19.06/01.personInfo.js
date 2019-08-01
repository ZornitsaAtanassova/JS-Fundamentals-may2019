function personInfo(firstName, lastName, age) {
    // Write a function that receives 3 parameters, sets them to an object and prints the object's entries. The input comes as 3 separate strings in the following order: firstName, lastName, age.

    /* let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }; */
    // Short declaring
    let person = {
        firstName,
        lastName,
        age
    };
    // console.log(person);
    // console.log(Object.keys(person));
    // console.log(Object.values(person));
    // console.log(Object.entries(person).sort((a, b) => a[1] > b[1])); // [a[0]='firstName' a[1]='Peter']... Pan Peter 20

    // 1 solve:
    /* let arrOfTuples = Object.entries(person);
    // console.log(arrOfTuples);
    for (let [key, value] of arrOfTuples) {
        console.log(`${key}: ${value}`);
    } */

    // 2 solve:
    for (const tuple of Object.entries(person)) {
        const key = tuple[0];
        const value = tuple[1];

        console.log(`${key}: ${value}`);
    }

    // 3 solve:
    /* for (const key in person) {
        const value = person[key];

        console.log(`${key}: ${value}`);
    } */

    // 4 solve:
    /* Object.entries(person)
        .forEach(tuple => console.log(tuple.join(': '))); */
}

personInfo("Peter", "Pan", 20);   // firstName: Peter lastName: Pan age: 20
