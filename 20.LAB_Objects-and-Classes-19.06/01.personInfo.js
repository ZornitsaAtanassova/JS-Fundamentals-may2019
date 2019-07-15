function personInfo(firstName, lastName, age) {
    // Write a function that receives 3 parameters, sets them to an object and prints the object's entries. The input comes as 3 separate strings in the following order: firstName, lastName, age.

    let person = {
        firstName:firstName,
        lastName:lastName,
        age:age
    };
    // console.log(person);
    // console.log(Object.keys(person));
    // console.log(Object.values(person));

    let entries = Object.entries(person);
    // console.log(entries);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

personInfo("Peter", "Pan", "20");   // firstName: Peter lastName: Pan age: 20
