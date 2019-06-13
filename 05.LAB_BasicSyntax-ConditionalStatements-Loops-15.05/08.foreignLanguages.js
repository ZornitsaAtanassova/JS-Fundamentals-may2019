function foreignLanguage(country) {
    //Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: English is spoken in England and USA; Spanish is spoken in Spain, Argentina and Mexico; for the others, we should print "unknown".

    //See: How Can I Combine Multiple Cases? https://stackoverflow.com/questions/14221778/how-can-i-combine-multiple-cases

    let language = '';

    switch (country) {
        case 'England': // fall through
        case 'USA':
            language = 'English';
            break;
        case 'Spain': // fall through
        case 'Argentina': // fall through
        case 'Mexico':
            language = 'Spanish';
            break;
        default:
            language = 'unknown';
            break;
    }

    console.log(language);
}

foreignLanguage('USA');  //English
foreignLanguage('German');    //unknown
