function printGrade(grade) {
    // Write a function that receives a grade between 2.00 and 6.00 and prints the corresponding grade in words

    let result = '';

    if (grade >= 2.00 && grade <= 2.99) {
        result = 'Fail';
    } else if (grade >= 3.00 && grade <= 3.49) {
        result = 'Poor';
    } else if (grade >= 3.50 && grade <= 4.49) {
        result = 'Good';
    } else if (grade >= 4.50 && grade <= 5.49) {
        result = 'Very good';
    } else if (grade >= 5.50 && grade <= 6.00) {
        result = 'Excellent';
    }

    console.log(result);
}

printGrade(3.33);   // Poor
printGrade(4.50);   // Very good
printGrade(2.99);   // Fail
