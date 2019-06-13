function theatrePromotions(dayType, age) {
    //A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".

    //1)Define price variable
    //2)Check type of day or print error masage by default
    //3)Check age or print error masage
    //4)Set value to price
    //5)Check if price is not 0, print result

    let priceOfTicket = 0;

    switch (dayType) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                priceOfTicket = 12;
            } else if (age > 18 && age <= 64) {
                priceOfTicket = 18;
            } else if (age > 64 && age <= 122) {
                priceOfTicket = 12;
            } else {
                console.log('Error!');
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                priceOfTicket = 15;
            } else if (age > 18 && age <= 64) {
                priceOfTicket = 20;
            } else if (age > 64 && age <= 122) {
                priceOfTicket = 15;
            } else {
                console.log('Error!');
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                priceOfTicket = 5;
            } else if (age > 18 && age <= 64) {
                priceOfTicket = 12;
            } else if (age > 64 && age <= 122) {
                priceOfTicket = 10;
            } else {
                console.log('Error!');
            }
            break;
        default:
            console.log('Error!');
            break;
    }

    if (priceOfTicket !== 0) {
        console.log(priceOfTicket + "$");
    }  
}

theatrePromotions('Weekday', 42);   //18$
theatrePromotions('Holiday', -12);   //Error!
theatrePromotions('Holiday', 15);   //5$
