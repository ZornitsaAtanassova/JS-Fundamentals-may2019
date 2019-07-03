function contactList(input) {
    let contacts = input.shift()
                        .split(' ');
    // console.log(contacts);
    for (let line = 0; line <= input.length; line++) {
        let command = input[line].split(' ');
        // console.log(command);
        if (command[0] === 'Add') {
            let isInclude = contacts.includes(command[1]);
            // console.log(isInclude)
            let index = Number(command[2]);
            if (index >= 0 && index <= contacts.length) {
                if (isInclude) {
                    contacts.splice(index, 0, command[1]);
                } else {
                    contacts.push(command[1]);
                }
            }            
        }

        if (command[0] === 'Remove') {
            let index = Number(command[1]);
            if (index >= 0 && index <= contacts.length) {
                // console.log(contacts[index]);
                contacts.splice(index, 1);
            }
        }

        if (command[0] === 'Export') {
            let index = Number(command[1]);
            let count = Number(command[2]);
            let exported = contacts.slice(index, count);
            console.log(exported.join(' '));
        }

        if (command[0] === 'Print') {
            if (command[1] === 'Normal') {
                console.log(`Contacts: ${contacts.join(' ')}`);
                return;
            } else if (command[1] === 'Reversed') {
                let reversedContacts = contacts.reverse();
                console.log(`Contacts: ${reversedContacts.join(' ')}`);
                return;
            }
        }
    }
}

contactList([ 'Alisson Bellamy Candace Tristan',
                'Remove 3',
                'Add Bellamy 2',
                'Print Normal' ]
);  // Contacts: Alisson Bellamy Bellamy Candace
console.log(`------------------------------`);
contactList([ 'Zayn Katy Ariana Avril Nick Mikolas',
                'Remove 3',
                'Add Jacob 0',
                'Export 0 3',
                'Export 3 8',
                'Print Reversed' ]
);  // Zayn Katy Ariana / Nick Mikolas Jacob / Contacts: Jacob Mikolas Nick Ariana Katy Zayn
