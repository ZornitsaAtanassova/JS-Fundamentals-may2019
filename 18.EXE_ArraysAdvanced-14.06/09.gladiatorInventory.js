function gladiatorInventory(input) {
    let inventory = input
        .shift()
        .split(' ');

    // forEach is void function. Not return result! Just iterate! It's same as for loop!
    input.forEach(line => {
        /* let worker = line.split(' ');
        let command = worker[0];
        let equipment = worker[1]; */

        // Destructoring:
        let [command, equipment] = line.split(' ');
        let indexOfEquipment = inventory.indexOf(equipment);

        if (command === 'Buy' && indexOfEquipment === -1) {
            inventory.push(equipment);
        } else if (command === 'Trash' && indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment, 1);
        } else if (command === 'Repair' && indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment, 1);
            inventory.push(equipment);
        } else if (command === 'Upgrade') {
            let worker = equipment.split('-');
            equipment = worker[0];
            let upgrade = worker[1];
            indexOfEquipment = inventory.indexOf(equipment);

            if (indexOfEquipment !== -1) {
                inventory.splice(indexOfEquipment + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    });

    console.log(inventory.join(' '));
}

gladiatorInventory(
[
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]
);   // SWORD SWORD:Steel Bag Spear
gladiatorInventory(
[
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]
);   // SWORD Spear Shield
