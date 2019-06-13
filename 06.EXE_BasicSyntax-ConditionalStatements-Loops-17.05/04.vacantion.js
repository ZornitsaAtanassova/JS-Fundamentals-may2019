function vacantion(groupSize, groupType, dayOfWeek) {
//1)condition: You are given a group of people, type of the group, and day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. There is table with price for a single person! 

    let priceForPerson = 0;

    switch (groupType) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                priceForPerson = 8.45;
            } else if (dayOfWeek === 'Saturday') {
                priceForPerson = 9.80;
            } else if (dayOfWeek === 'Sunday') {
                priceForPerson = 10.46;
            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                priceForPerson = 10.90;
            } else if (dayOfWeek === 'Saturday') {
                priceForPerson = 15.60;
            } else if (dayOfWeek === 'Sunday') {
                priceForPerson = 16;
            }

            /* if (groupSize >= 100) {
                groupSize -= 10;
            } */
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                priceForPerson = 15;
            } else if (dayOfWeek === 'Saturday') {
                priceForPerson = 20;
            } else if (dayOfWeek === 'Sunday') {
                priceForPerson = 22.50;
            }
            break;
    }

    let totalPrice = groupSize * priceForPerson;
    //console.log(totalPrice)

//2)condition: There are also discounts based on some conditions: St >= 30 - reduce total price by 15%; Bu >=100 - 10 people stay for free; Reg >= 10 && <= 20 - reduce total price by 5%.

    if (groupType === 'Students' && groupSize >= 30) {
        totalPrice -= (totalPrice * 15) / 100;      //totalPrice *= 0.85;
    }

    if (groupType === 'Business' && groupSize >= 100) {
        totalPrice -= 10 * priceForPerson; 
    }

    if (groupType === 'Regular' && (groupSize >= 10 && groupSize <= 20)) {
        totalPrice -= (totalPrice * 5) / 100;       //totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(30, "Students", "Sunday");    //Total price: 266.73
vacantion(40, "Regular", "Saturday");    //Total price: 800.00
vacantion(150, "Business", "Friday");    //Total price: 
