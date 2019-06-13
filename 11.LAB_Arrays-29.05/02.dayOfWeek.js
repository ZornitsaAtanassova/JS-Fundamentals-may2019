function dayOfWeek(numberOfDay) {
    // Write a program which receives a number and prints the corresponding name of the day of week. If the number is NOT a valid day, print 'Invalid day!'.

    // 1 way - with switch-case conditional statement
/*     let day = '';

    switch (numberOfDay) {
        case 1: day = 'Monday'; break;
        case 2: day = 'Tuesday'; break;
        case 3: day = 'Wednesday'; break;
        case 4: day = 'Thursday'; break;
        case 5: day = 'Friday'; break;
        case 6: day = 'Saturday'; break;
        case 7: day = 'Sunday'; break;
        default:
            console.log('Invalid day!');
            return;
    }

    console.log(day); */

    // 2 way - with array indexes
    let arrayOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (numberOfDay >= 1 && numberOfDay <= 7) {
        console.log(arrayOfDays[numberOfDay - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);   // Wednesday
dayOfWeek(6);   // Saturday
dayOfWeek(11);  // Invalid day!
