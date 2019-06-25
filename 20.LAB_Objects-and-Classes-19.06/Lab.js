// Objects are collection of related data(properties) or functionality(methods).
// Добрата практика за дефиниране на обект е с {} - Оbject literal. Може и с операттор "new", но не се препоръчва!
// Израза за функция "Method" се ползва когато тази функция е свойство на обект, а "Function", когато не принадлежат на "нещо"
    const cup = {
        // properties(keys): values
        // describe only using information
        color: 'black',
        shape: 'cilindre',
        volume: '300ml',
        material: 'paper',
        type: 'coffeeCup',
        hasHandle: true,
    };

    const car = {
        stertEngine1: function stertEngine1() {
            console.log('?');
        },
        stertEngine2() {
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
    }
// Access object property
    const fewProperties = ['color', 'shape'];
    for (const prop in cup) {
        if (fewProperties.indexOf(prop) !== -1) {
            // console.log(prop, cup(prop));
        }
    }
// Добавяне или промяна на свойство
    function addLogo() {
        cup.logo = 'same logo';
    }
    function removeLogo() {
        cup.logo = null;
    }

    console.log(cup);
// Кое свойство от ООП (абстракция, наследяване, капсулиране) се ползва в JS?

    console.log(`----------------------------`);
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