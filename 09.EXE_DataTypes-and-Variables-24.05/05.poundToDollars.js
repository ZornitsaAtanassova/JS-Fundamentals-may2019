function convertPoundsToDollars(pounds) {
    //Write a function that converts British pounds to Unated States dollars formatted to 3th decimal point.
    //£1(GBP) = $1.31(USD)

    //1)Convert pounds to dollars
    //2)Round £ to 3th decimal point
    //3)Print

    let poundsToDollars = pounds * 1.31;
    console.log(poundsToDollars.toFixed(3));
}

convertPoundsToDollars(80);   //104.800
convertPoundsToDollars(39);     //51.090
