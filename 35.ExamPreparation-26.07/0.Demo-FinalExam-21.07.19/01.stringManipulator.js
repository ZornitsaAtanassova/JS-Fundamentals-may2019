function stringManipulator(input) {
    let str = '';

    for (let line of input) {
        let command = line.split(' ');
        // console.log(command);

        switch (command[0]) {
        case 'Add':
            str = str + command[1];
            break;

        case 'Upgrade':
            let replaced = String.fromCharCode(command[1].charCodeAt(0) + 1);
            // console.log(replaced);

            while(str.includes(command[1])) {
                str = str.replace(command[1], replaced);
            }
            break;

        case 'Print':
            console.log(str);
            break;
            
        case 'Index':
            let arr = [];
            let startIndex = 0;
            let currentIndex = str.indexOf(command[1], startIndex);

            while(currentIndex !== -1) {
                arr.push(currentIndex);
                startIndex = currentIndex + 1;
                currentIndex = str.indexOf(command[1], startIndex);
            }

            if (arr.length !== 0) {
                console.log(arr.join(' '));
            } else {
                console.log('None');
            }
            break;

        case 'Remove':
            while(str.includes(command[1])){
                str = str.replace(command[1], '');
            }
            break;

        case 'End':
            return;
        }
    }
    // console.log(str);
}

stringManipulator([ 
    'Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End' 
]);  // abracadabra bbrbcbdbbrb 0 1 3 5 7 8 10 cbd
