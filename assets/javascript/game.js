// guesses remaining
var guessRemain = 9;

//words that can be guessed
var words = ["quizzed", "buzzcut", "whizzed", "accrued", "brawler"]

//letters that have been guessed. empty to store them as they are guessed
var guessLetters = [];

//store the letter that has been pressed
var letterPress;


//function to take a random word from word list and use it for current word
var currentWord = words[Math.floor(Math.random() * words.length)];

//function to get the letter that has been pressed
document.onkeyup = function (event) {
    letterPress = event.key.toLowerCase();
    console.log("letterPress", letterPress);
    if (currentWord.match(letterPress)) {
        console.log("match");
    }

    else {
        if (guessLetters.indexOf(letterPress) === -1) {
            guessLetters.push(letterPress);
            guessRemain--;
            console.log("guessRemain", guessRemain);
            console.log("guessLetters", guessLetters);
        }
    }
};
