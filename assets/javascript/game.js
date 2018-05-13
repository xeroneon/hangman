// guesses remaining
var guessRemain = 12;

//words that can be guessed
var words = ["dialect", "healthy", "quickly", "amplify", "voyager"]

//letters that have been guessed. empty to store them as they are guessed
var guessLetters = [];

//store the letter that has been pressed
var letterPress;

var guessedWord;


//function to take a random word from word list and use it for current word
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);

//function to get the letter that has been pressed
document.onkeyup = function (event) {
    //captures keypress and converts to lowercase and stores as variable
    letterPress = event.key.toLowerCase();
    console.log("letterPress", letterPress);
    //checks to see if letter matches any letters in current word
    if (currentWord.match(letterPress)) {
        console.log("match");
        //sets i to index of letter pressed
        var i = currentWord.indexOf(letterPress);
        //changes html to be the letter that was pressed
        document.getElementById(i).textContent = letterPress;
        
    }

    else {
        //if letter isnt in the guessed array add it to the array
        if (guessLetters.indexOf(letterPress) === -1) {
            guessLetters.push(letterPress);
            document.getElementById("guess-letters").textContent = guessLetters;
            //score goes down by 1
            guessRemain--;
            document.getElementById("guess-remain").textContent = guessRemain;
            console.log("guessRemain", guessRemain);
            console.log("guessLetters", guessLetters);


            //if score is zero reset board
            if (guessRemain === 0) {
                for (j = 0; j < 7; j++) {
                    document.getElementById(j).textContent = "_";
                }
                document.getElementById("guess-remain").textContent = "12";
                guessRemain = 12;
                document.getElementById("guess-letters").textContent = " ";
                guessLetters = [];
                alert("You Lost")
            }
        }
    }
};
