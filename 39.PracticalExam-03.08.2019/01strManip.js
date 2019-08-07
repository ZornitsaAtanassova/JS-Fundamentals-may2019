function strManip(input) {
    let text = input.shift();

    for (let line of input) {
        if (line === 'End') {
            break;
        }
        let command = line.split(' ');
        // console.log(command);

        switch (command[0]) {
            case 'Translate':
                let word = command[1]
                while (text.includes(word)) {
                     text = text.replace(word, command[2]);
                }

                console.log(text);
                break;

            case 'Includes':
                if (text.includes(command[1])) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            
            case 'Start':
                if (text.includes(command[1], 0)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            
            case 'Lowercase':
                text = text.toLocaleLowerCase();
                console.log(text);
                break;

            case 'FindIndex':
                console.log(text.lastIndexOf(command[1]));
                break;

            case 'Remove':
                let sub = text.substr(command[1], command[2]);
                console.log(text.replace(sub, ''));
                break;
        }
    }
    // console.log(text);
}

strManip([ '//Thi5 I5 MY 5trING!//',
            'Translate 5 s',
            'Includes string',
            'Start //This',
            'Lowercase',
            'FindIndex i',
            'Remove 0 10',
            'End' 
]);     // //This Is MY strING!//
// False
// True
// //this is my string!//
// 16
// my string!//
