// =*=*=*=*=*=*=*=*=FLAGS=*=*=*=*=*=*=*=*=*=*=*=*
let str = 'Is this all there is?\nIs this begins?';
let patt0 = 'is'; // Търся само ПЪРВОТО срещнато!
let patt1 = /is/; // Търся само ПЪРВОТО срещнато!
let patt2 = /is/g; // Търся ВСИЧКИТЕ!
let patt3 = /is/gi; // Търся всичките, независимо от РЕГИСТЪРА!
let patt4 = /^is/mgi; // Търся само в началото (или края) на всеки РЕД, независимо от регистъра!
let patt5 = /\?$/mgi; // Търся само в (началото или) края на всеки РЕД, независимо от регистъра!
console.log(str + '\n');
console.log(str.match(patt0) + '\n' + 
            str.match(patt1) + '\n' + 
            str.match(patt2) + '\n' + 
            str.match(patt3) + '\n' +
            str.match(patt4) + '\n' +
            str.match(patt5)
);

/* let str2 = `1st place: 7Winnie \n2nd place: Piglet
33rd place: Eeyore`;
console.log(str2);
console.log( str2.match(/^\d+/gm) ); // 1, 2, 33 */
// =*=*=*=*=*=*=*=*=FLAGS=*=*=*=*=*=*=*=*=*=*=*=*

// =*=*=*=*=*=BRACKETS-SET & RANGE*=*=*=*=*=*=*=*
let patt6 = /[is]/mgi; // Търся само в (началото или) края на всеки РЕД, независимо от регистъра!
console.log(str.match(patt6) + '\n' 
           // str.match(patt1) + '\n' + 
           // str.match(patt2) + '\n' + 
            //str.match(patt3) + '\n' +
            //str.match(patt4) + '\n' +
            //str.match(patt5)
);
// =*=*=*=*=*=BRACKETS-SET & RANGE*=*=*=*=*=*=*=*
