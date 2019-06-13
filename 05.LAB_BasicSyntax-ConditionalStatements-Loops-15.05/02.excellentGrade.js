function exellentGrade(grade) {
    //Write a function that receives a single number and checks if the grade is excellent or not.

    //1)Check if the grade given is greater or equal to 5.50
    //2)Print the corresponding result

    if (grade >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

exellentGrade(5.50);    //Excellent
exellentGrade(4.35);    //Not excellent
