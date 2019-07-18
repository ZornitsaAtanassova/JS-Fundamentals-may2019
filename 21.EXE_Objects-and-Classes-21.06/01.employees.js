function employees(input) {
    // You're tasked to create a list of employees and their personal numbers. You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). Try to use an object. At the end print all the list employees
    
    // 1 solve:
    /* for (let employeeName of input) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeName.length}`);
    } */

    // 2 solve: Used object.
    let employee = {};

    for (let employeeName of input) {
        employee['name'] = employeeName;
        employee['personalNum'] = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeName.length}`);
    }
}

employees([
            'Silas Butler',
            'Adnaan Buckley',
            'Juan Peterson',
            'Brendan Villarreal'
        ]
);    // Name: Silas Butler -- Personal Number: 12 ...
