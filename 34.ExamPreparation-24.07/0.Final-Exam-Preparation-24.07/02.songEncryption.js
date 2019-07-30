function solve(input) {
 
    for (const line of input) {
        if (line === 'end') {
            break;
        }
   
        let [ artist, song ] = line.split(':');
   
        if (!/^[A-Z][a-z\s\']+$/g.test(artist) || !/^[A-Z\s]+$/g.test(song)) {
            console.log('Invalid input!');
            continue;
        }
   
        let key = artist.length;
        let encryptedString = '';
        for (const char of line) {
            if (char === ':') {
                encryptedString += '@';
                continue;
            }
   
            let asciiCode = char.charCodeAt(0);
            if ((asciiCode >= 65 && asciiCode <= 90)) {
                asciiCode += key;
                if (asciiCode > 90) {
                    asciiCode -= 26;
                }
            }
   
            if ((asciiCode >= 97 && asciiCode <= 122)) {
                asciiCode += key;
                if (asciiCode > 122) {
                    asciiCode -= 26;
                }
            }
   
        encryptedString += String.fromCharCode(asciiCode);
        }
   
    console.log(`Successful encryption: ${encryptedString}`);
    }
}
   
solve([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:ROLLING IN THE DEEP',
    'end'
]);
   
solve([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end'
]);
  