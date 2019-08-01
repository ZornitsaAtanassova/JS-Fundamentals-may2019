function city(name, area, population, country, postCode) {
    // Receive five single strings. Create a city object which will hold the city name, area, population, country and postcode. 
    // Loop through all the keys and print them with their values in format: "{key} -> {value}"
    // The input will be in the following order: name, area, population, country and postCode.

    let city = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postCode
    };

    for (let key in city) {
        let value = city[key];

        console.log(`${key} -> ${value}`);
    }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000");     // name -> Sofia
// area -> 492
// population -> 1238438
// country -> Bulgaria
// postCode -> 1000
