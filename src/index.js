const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrExpr = [];
    let result = [];
    let counter = 0;
    while (counter < expr.length) {
        arrExpr.push(expr.substr(counter, 10));
        counter = counter + 10; 
    };
    for (i = 0; i < arrExpr.length; i++) {
        arrExpr[i] = String(+arrExpr[i]);
    };
    for (i = 0; i < arrExpr.length; i++) {
        arrExpr[i] = arrExpr[i].replace(/10/g, '.');
        arrExpr[i] = arrExpr[i].replace(/11/g, '-');
        arrExpr[i] = arrExpr[i].replace('NaN', ' ');
    };
    for (i = 0; i < arrExpr.length; i++) {
        if (arrExpr[i] === ' ') {
            result.push(' ');
        }
        else {
        result.push(MORSE_TABLE[arrExpr[i]]);
        };
    }; 
    return result.join('');
};

module.exports = {
    decode
}