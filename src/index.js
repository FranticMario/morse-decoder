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
    let letter = ""
    
    for (let i = 0; i < expr.length; i +=10) {
      let tenDigits = expr.slice(i, i +10)
  
      while (tenDigits[0] === "0") {
        tenDigits = tenDigits.slice(1);
      }
  
  
      let morseCode = "";
      for (let j = 0; j < tenDigits.length; j += 2) {
        const twoDigits = tenDigits.slice(j, j + 2);
        if (twoDigits === "11") {
          morseCode += "-";
        } else if (twoDigits === "10") {
          morseCode += ".";
        }
      }
      if (morseCode === "") {
        letter += " ";
      } else {
        letter += MORSE_TABLE[morseCode];
      }
    }
  
  return letter;
    }

module.exports = {
    decode
}