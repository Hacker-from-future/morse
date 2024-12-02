const MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
};

const REVERSE_MORSE_CODE_DICT = Object.fromEntries(
    Object.entries(MORSE_CODE_DICT).map(([key, value]) => [value, key])
);

function convert() {
    const mode = document.getElementById("mode").value;
    const input = document.getElementById("input").value.trim();
    const output = document.getElementById("output");

    if (mode === "toMorse") {
        // Convert text to Morse code
        output.value = input.toUpperCase()
            .split('')
            .map(char => MORSE_CODE_DICT[char] || '?')
            .join(' ');
    } else if (mode === "toText") {
        // Convert Morse code to text
        output.value = input.split(' / ') // Split words using '/'
            .map(word => word.split(' ')  // Split characters within a word
                .map(code => REVERSE_MORSE_CODE_DICT[code] || '?') // Decode each character
                .join(''))
            .join(' '); // Rejoin words with spaces
    }
}
