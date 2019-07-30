function solve(input) {
    for (let line of input) {
        let pattern = /^([#$%*&])([A-Za-z]+)\1=(\d+)!!([\w\W]*?)$/g;
        let tokens = pattern.exec(line);
   
        if (tokens !== null) {
            let [ racer, length, encryptedCode ] = tokens.slice(2);
            length = Number(length);
   
            if (length === encryptedCode.length) {
                let decryptedCode = decryptCode(encryptedCode, length);
                console.log(`Coordinates found! ${racer} -> ${decryptedCode}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
   
    function decryptCode(encrypted, length) {
        let decryptedCode = '';
   
        for (let i = 0; i < encrypted.length; i++) {
            let ascii = encrypted.charCodeAt(i);
            ascii += length;
            decryptedCode += String.fromCharCode(ascii);
        }
   
        return decryptedCode;
    }
}

solve([ '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S' 
]);
console.log(`-----------------------------`);
solve([ 'Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd' 
]);
