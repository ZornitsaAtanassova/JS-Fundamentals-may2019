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
            console.log(prop, cup(prop));
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