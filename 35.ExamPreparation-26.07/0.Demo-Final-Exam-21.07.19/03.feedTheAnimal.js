function feedTheAnimals(input) {
// ==*==*==*==*==MANIPULATE==*==*==*==*==*==*==
    let arrOfObjAnimals = [];
    let arrOfObjAreas = [];
    /* let objAnimal = {
        animalName: '',
        dailyFoodLimit: 0,
        area: ''
    }; */
    /* let objArea = {
        areaName: '',
        countAnimal: 0
    }; */

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Last Info') {
            break;
        }

        let command = input[i].split(':');
        // console.log(command);

        switch (command[0]) {
            case 'Add':
                let objAnimal = {
                    animalName: command[1],
                    dailyFoodLimit: Number(command[2]),
                    area: command[3]
                };
                // console.log(objAnimal);
                let objArea = {
                    areaName: command[3],
                    countAnimal: 1
                };
                // console.log(objArea);

                // Animals:
                let isExistAnimal = false;

                for (let i = 0; i < arrOfObjAnimals.length; i++) {
                    if (arrOfObjAnimals[i].animalName === objAnimal.animalName) {
                        arrOfObjAnimals[i].dailyFoodLimit += objAnimal.dailyFoodLimit;   
                    
                        isExistAnimal = true;
                    }
                }

                if (isExistAnimal === false) {
                    arrOfObjAnimals.push(objAnimal);
                
                
                // Areas:
                    let isExistArea = false;

                    for (let i = 0; i < arrOfObjAreas.length; i++) {
                        if (arrOfObjAreas[i].areaName === objArea.areaName) {
                            arrOfObjAreas[i].countAnimal += objArea.countAnimal;
                    
                            isExistArea = true;
                        }
                    }

                    if (isExistArea === false) {
                        arrOfObjAreas.push(objArea);
                    }
                }
                break;

            case 'Feed':
                // Animals:
                let fedAnimalFromArea = '';

                for (let i = 0; i < arrOfObjAnimals.length; i++) {
                    if (arrOfObjAnimals[i].animalName === command[1]) {
                        arrOfObjAnimals[i].dailyFoodLimit -= Number(command[2]);
                    }

                    if (arrOfObjAnimals[i].dailyFoodLimit <= 0) {
                        console.log(`${arrOfObjAnimals[i].animalName} was successfully fed`);

                        fedAnimalFromArea = arrOfObjAnimals[i].area;
                        arrOfObjAnimals.splice(i, 1);
                        break;
                    }
                }

                // Areas:
                for (let i = 0; i < arrOfObjAreas.length; i++) {
                    if (arrOfObjAreas[i].areaName === fedAnimalFromArea) {
                        arrOfObjAreas[i].countAnimal--;
                        break;
                    }
                }
                break;
        }
    }
    // console.log(arrOfObjAnimals);
    // console.log(arrOfObjAreas);
// ==*==*==*==*==MANIPULATE==*==*==*==*==*==*==

// ==*==*==*==*==*==PRINT==*==*==*==*==*==*==
    // Sort by name in ascending order:
    arrOfObjAnimals.sort((a, b) => a.animalName.localeCompare(b.animalName));
    // arrOfObjAnimals.sort((a, b) => a.animalName > b.animalName); // Alternative way!

    // Sort by daily food limit in descending order:
    arrOfObjAnimals.sort((a, b) => a.dailyFoodLimit < b.dailyFoodLimit);

    console.log('Animals:');
    for (let animal of arrOfObjAnimals) {
        console.log(`${animal.animalName} -> ${animal.dailyFoodLimit}g`);
    }

    // Sort by daily food limit in descending order:
    arrOfObjAreas.sort((a, b) => a.countAnimal < b.countAnimal);

    console.log('Areas with hungry animals:');
    for (let area of arrOfObjAreas) {
        if (area.countAnimal > 0) {
            console.log(`${area.areaName} : ${area.countAnimal}`);
        }
    }    
// ==*==*==*==*==*==PRINT==*==*==*==*==*==*==
}

feedTheAnimals([ 
    'Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info' 
]);
// Adam was successfully fed
// Jamie was successfully fed
// Animals:
// Maya -> 8830g
// Gem -> 8730g
// Bobbie -> 270g
// Areas with hungry animals:
// WaterfallArea : 2
// DeepWoodsArea : 1
console.log(`-----------------------------`);
/* feedTheAnimals([ 
    'Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info' 
]); */
