function stringManipulator(input) {
    let text = '';

    const add = (string) => {
        text += string;
        // text = text.concat(string);
    };

    const upgrade = (char) => {
        let incrementedChar = String.fromCharCode(char.charCodeAt(0) + 1);

        let regex = new RegExp(char, 'g');

        text = text.replace(regex, incrementedChar);
    }

    const print = () => {
        console.log(text);
    }

    const index = (char) => {
        let indexes = [];
        for (let i = 0; i < text.length; i++) {
            let currentChar = text[i];
            if (currentChar === char) {
                indexes.push(i);
            }
        }
        let oupput = indexes.join(' ');
        console.log(oupput);
    };

    const remove = (string) => {
        let regex = new RegExp(char, 'g');
        text = text.replace(regex, '');
    };

    let commandParser = {
        'Add': add,
        'Upgrade': upgrade,
        'Print': print,
        'Index': index,
        'Remove': remove
    }

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        commandParser[command](...tokens);
    }
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
