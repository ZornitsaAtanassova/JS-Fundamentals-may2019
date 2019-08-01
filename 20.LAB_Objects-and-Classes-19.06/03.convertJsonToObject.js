function convertJsonToObject(jsonStr) {
    // Write a function that receives a string in JSON format and converts it to object.
    // Loop through all the keys and print them with their values in format: "{key}: {value}"
    // JSON - JavaScript Object Notation
    let person = JSON.parse(jsonStr);
    // console.log(person);

    for (let key in person) {
        let value = person[key];

        console.log(`${key}: ${value}`);
    }
}

convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');  // name: George
// age: 40
// town: Sofia
