// Кое свойство от ООП (абстракция, наследяване, капсулиране) се ползва в JS?

// Sort() array method - алгоритъм за сортиране в НИЗХОДЯЩ ред
    let arr3 = [2, -1, 10, 12, 55, 33, 11];
    arr3.sort(); // [ -1, 10, 11, 12, 2, 33, 55 ]
    arr3.sort((a, b) => {
        if (a > b) {
            return 1;
        } // [ -1, 2, 10, 11, 12, 33, 55 ]

        /* if (a > b) {
            return -1;
        } // [ 2, -1, 10, 12, 55, 33, 11 ] */

        /* if (a > b) {
            return 0;
        } // [ 2, -1, 10, 12, 55, 33, 11 ] */

        /* if (a < b) {
            return 1;
        } // [ 55, 33, 12, 11, 10, 2, -1 ] */
    });
    console.log(arr3);

    let arr = [1, 2, 3];
    arr.forEach(function(item, index, array) {
        console.log(item, index, array);
    });

    let months = ['z', 'a', 'F', 'd'];
    // 1 solve:
    // months.sort((a, b) => a < b); // z, d, a, F
    // 2 solve:
    /* months.sort((a, b) => {
        if (a < b) {
            return true;
        }
    }); */
    // 3 solve:
    months.sort((a, b) => a.localeCompare(b)); // a, d, F, z
    months.sort((a, b) => b.localeCompare(a));  // z, F, d, a
    console.log(months);
    console.log(months.indexOf(33));
    console.log(months.includes(3));
    console.log(months.join('*'));
    console.log(months.toString());
    console.log(months.map(function(x) { return x.toUpperCase(); }));
    console.log(months.filter(char => char === 'a'));
    months.forEach(function(item, index) {
        console.log(item, index);
    });

    let arr2 = ['1', '2', '3'];
    console.log(arr2);
    let arr2New1 = arr2.map(Number);
    console.log(arr2New1);
    let arr2New2 = arr2.map((n) => n.toString());
    console.log(arr2New2);

    console.log(`----------------------------`);
    console.log(`----------------------------`);





// Objects are collection of related data(properties) or functionality(methods).
// Добрата практика за дефиниране на обект е с {} - Оbject literal. Може и с оператор "new", но не се препоръчва!
// Израза за функция "Method" се ползва когато тази функция е свойство на обект, а "Function", когато не принадлежат на "нещо"
    const cup = {
        // properties(keys): values
        // describe only using information
        color: 'black',
        shape: 'cilindre',
        volumeInMilliliters: 300,
        material: 'paper',
        type: 'coffeeCup',
        hasHandle: true,
    };
    console.log(cup);
// Access object property
    // 1 way:
    let colorCup = cup.color;
    // 2 way:
    let colorCup2 = cup['shape'];
    console.log(colorCup, colorCup2);
    // 3 way - multiple properties:
    const fewPropertiesOfCup = ['material', 'type'];
    /* for (const prop in cup) { 
        if (fewPropertiesOfCup.indexOf(prop) !== -1) {
            console.log(prop +': '+ cup[prop]);
        }
    } */
    // 4 way - multiple properties:
    for (let propName of fewPropertiesOfCup) {
        console.log(propName +':'+ cup[propName]);
    }
    console.log(`----------------------------`);
// Добавяне или промяна на свойство и стойност
    cup.logo = 'same logo';
    cup.logo3 = 'same logo3';
    
    function addLogo() {
        cup.logo = 'same logo';
        cup.logo2 = 'same logo2';
    }
    function removeLogo2() {
        cup.logo2 = null;
    }
    addLogo();
    removeLogo2();
    delete cup.logo3;

    console.log(cup);
    console.log(`----------------------------`);

// Object Methods
// Define methods in object
    // 1 way:
    let person = {
        sayHello: function sayHello() {
            console.log('Hi, guys');
        }
    };
    person.sayHello();

    // 2 way:
    let person2 = {
        sayHello: function () {
            console.log('Hi, guys');
        }
    };
    person2.sayHello();

    // 3 way - Recommended!:
    let person3 = {
        sayHello() {
            console.log('Hi, guys');
        }
    };
    person3.sayHello();

// Add a method to an already defined object
    let person4 = {
        name: 'Peter',
        age: '20'
    };
    person4.sayHello = () => console.log('Hi, guys');
    person4.sayHello();

    // console.log(person, person2, person3, person4);

    const car = {
        startEngine1: function startEngine1() {
            console.log('?');
        },
        startEngine2() {
            console.log('Another sintaxys for declaring methods');
        },
        tires: [
            {
                season: 'sumer',
                color: 'black',
            },
            {
                season: 'sumer',
                color: 'black',
            },
            {
                season: 'sumer',
                color: 'black',
            },
            {
                season: 'sumer',
                color: 'black',
            },
        ],
        color: 'black',
    };
    car.startEngine1();
    car.startEngine2();
    console.log(`----------------------------`);

// Object class methods - "Object.entries(myObject);" / "Object.keys(myObject);"
    console.log(Object.entries(cup));
    console.log(Object.keys(cup));
    console.log(Object.values(cup));


// JSON - ???   
console.log(JSON.stringify({ x: 5, y: '6' }, null, 4));
console.log(JSON.parse('{"x":5, "y":"6"}'));

// Classes - ???
    class Dog {
        constructor(name, breed, hasRabbies, canTalk, doesItBite, hasLegs) {
            this.name = name;
            this.breed = breed;
            this.hasRabbies = hasRabbies;
            this.canTalk = canTalk;
            this.doesItBite = doesItBite;
            this.hasLegs = hasLegs;
        }
    }

    const myDog = new Dog('my Dog', 'French Bulldog', false, false, true, true);

    myDog.canTalk = false;
    myDog.doesItBite = true;
    
    const anotherDog = new Dog();
    anotherDog.canTalk = true;
    anotherDog.doesItBite = true;

    // constructor() - is special method of the class, който се вика когато дефинираме обекта се с оператора "new"
    class Dog2 {
        constructor(breed, hasRabbies, canTalk, doesItBite, hasLegs) {
            this.breed = bread;
            this.hasRabbies = hasRabbies;
            this.canTalk = canTalk;
            this.doesItBite = doesItBite;
            this.hasLegs = hasLegs;

            /* return {
                breed: breed,
                hasRabbies: hasRabbies,
                canTalk: canTalk,
                doesItBite: doesItBite,
                hasLegs: hasLegs
            } */
        }
    }
    const mony = new Dog('Mony', 'French Bulldog', false, false, false, true);
    const johny = new Dog('Johny', 'Koli', false, false, true, true);

    console.log(mony);
    console.log(johny);
