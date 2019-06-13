function monthPrinter(num) {
    //Write a program, which takes an integer from the console and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"

    //1)Define month variable
    //2)Assosiate months with numbers
    //3)Default masage
    //4)Print

    let month = '';

    switch (num) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
         case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
        default:
            console.log('Error!');
            break;
    }
    
    console.log(month);
}

monthPrinter(2);    //February
monthPrinter(13);   //Error!
