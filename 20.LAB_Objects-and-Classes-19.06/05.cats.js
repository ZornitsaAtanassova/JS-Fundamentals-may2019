function cat(input) {
    // Create a Cat class that receives in the constructor the name and the age parsed from the input. 
    // It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
    // For each of the strings provided you must create a cat object.

    let catsInput = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };

    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        catsInput.push(new Cat(name, age));
    }

    // console.log(catsInput);
    // console.log(Cat);
}

cat(['Mellow 2', 'Tom 5']);    // Mellow, age 2 says Meow     Tom, age 5 says Meow
