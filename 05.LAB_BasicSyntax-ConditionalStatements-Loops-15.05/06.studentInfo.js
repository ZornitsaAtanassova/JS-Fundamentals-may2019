function studentInformation(name, age, grade) {
    //You will be given 3 parameters – student name (string), age (number) and average grade (number). Your task is to print all the info about the student. The grade should be formatted to the second decimal point.

    //Just print with interpolation and use method for number round
     
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

studentInformation('John', 15, 5.54678); //Name: John, Age: 15, Grade: 5.55
studentInformation('Steve', 16, 2.14);   //Name: Steve, Age: 16, Grade: 2.14
studentInformation('Marry', 12, 6.00);     //Name: Marry, Age: 12, Grade: 6.00