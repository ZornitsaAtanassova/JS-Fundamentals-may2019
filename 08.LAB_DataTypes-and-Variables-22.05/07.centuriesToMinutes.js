function centuriesToMinutes(centuries) {
    // Write program to receive a number of centuries and convert it to years, days, hours and minutes. Assume that a year has 365.2422 days at average (the Tropical year)
    //See: https://en.wikipedia.org/wiki/Tropical_year

    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422); // Why have to TRUNC now??? It will be not corect for the next calculations!!!
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

/*  // My way:   
    let years = centuries * 100;
    let days = years * 365.2422;
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${parseInt(days)} days = ${parseInt(hours)} hours = ${parseInt(minutes)} minutes`); */
}

centuriesToMinutes(1);   //1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
centuriesToMinutes(5);  //5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
