function convertToJson(name, lastName, hairColor) {
    // Write a function that receives name, lastName, hairColor and sets them to an object. Convert the object to JSON string and print it. Input is provided as 3 single strings in the order stated above.

    let person = {
        name,
        lastName,
        hairColor
    }

    let json = JSON.stringify(person);
    console.log(json);
}

convertToJson('George', 'Jones', 'Brown');    // {"name":"George", "lastName":"Jones", "hairColor":"Brown"}
