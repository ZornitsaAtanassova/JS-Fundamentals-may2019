function convertMetersToKm(meters) {
    //You will be given a number that will be distance in meters. Write a program that converts meters to kilometers formatted to the 2nd decimal point.
    //1meter = 0.001kilometers; 1kilometer = 1000 meters;

    //1)Convert meters to kilometers
    //2)Round km to second decimal point
    //3)Print

    let metersToKilometers = meters * 0.001;
    console.log(metersToKilometers.toFixed(2));
}

convertMetersToKm(1852);   //1.85
convertMetersToKm(798);     //0.80
