// guesses remaining
var guessRemain = 12;

//words that can be guessed
var words = ["cascadingstylesheet", "html", "javascript", "github"]

//letters that have been guessed. empty to store them as they are guessed
var guessLetters = [];

//store the letter that has been pressed
var letterPress;

var guessedWord = [];

var wins = 0;

var losses = 0;



//function to take a random word from word list and use it for current word
var currentWord = words[Math.floor(Math.random() * words.length)];
//console.log(currentWord);
//create a variable for the span i want to insert html into
var currentWordSpan = document.getElementById("current-word");
//make it empty for clean working slate
currentWordSpan.innerHTML = " ";
//for loop to push undertscores equal to the length of my word to the span
for (word = 0; word < currentWord.length; word++) {
    guessedWord.push("_");
    var span = document.createElement("span")
    span.id = word;
    span.textContent = "_ ";
    currentWordSpan.appendChild(span);
}

//function to get the letter that has been pressed
document.onkeyup = function (event) {
    //captures keypress and converts to lowercase and stores as variable
    letterPress = event.key.toLowerCase();
    // console.log("letterPress", letterPress);
    //checks to see if letter matches any letters in current word
    if (currentWord.indexOf(letterPress) !== -1) {
        console.log("first if");
        //if a letter matches this will loop through to check any letters matching for multiple letter matches
        for (i = 0; i < currentWord.length; i++) {
            //and then if the letter matches the letter pressed
            if (currentWord.charAt(i) === letterPress) {
                console.log("match");
                //insert that letter into an array that hold the guessed letters that match the current word
                guessedWord.splice(i, 1, letterPress);
                console.log("guessedWord", guessedWord);
                //changes html to be the letter that was pressed
                document.getElementById(i).textContent = letterPress;
                //if the guessed word ever matches the current word
                if (guessedWord.join("") === currentWord) {
                    //these reset the board
                    document.getElementById("guess-remain").textContent = "12";
                    guessRemain = 12;
                    document.getElementById("guess-letters").textContent = " ";
                    guessLetters = [];
                    guessedWord = [];
                    //this generates a new word
                    currentWord = words[Math.floor(Math.random() * words.length)];
                    //and this repeats the first function to make the html elements to hold the word
                    currentWordSpan.innerHTML = " ";
                    for (word = 0; word < currentWord.length; word++) {
                        guessedWord.push("_");
                        var span = document.createElement("span")
                        span.id = word;
                        span.textContent = "_ ";
                        currentWordSpan.appendChild(span);
                    }
                    wins++;
                    document.getElementById("wins").textContent = wins;
                    alert("win");
                }
            }

        }
    }
    //and if the letter doesnt match a letter in the current word
    else {
        //and if the letter doesnt match any letter theyve already guessed
        if (guessLetters.indexOf(letterPress) === -1) {
            ////then add it to an array
            guessLetters.push(letterPress);
            //and display that array
            document.getElementById("guess-letters").textContent = guessLetters;
            //score goes down by 1
            guessRemain--;
            //shows how many guesses you have left
            document.getElementById("guess-remain").textContent = guessRemain;
            // console.log("guessRemain", guessRemain);
            // console.log("guessLetters", guessLetters);


            //if score is zero reset board
            if (guessRemain === 0) {
                document.getElementById("guess-remain").textContent = "12";
                guessRemain = 12;
                guessLetters = [];
                document.getElementById("guess-letters").textContent = " ";
                guessedWord = [];
                currentWord = words[Math.floor(Math.random() * words.length)];
                //same loop to make a new word and html to hold word
                currentWordSpan.innerHTML = " ";
                for (word = 0; word < currentWord.length; word++) {
                    guessedWord.push("_");
                    var span = document.createElement("span")
                    span.id = word;
                    span.textContent = "_ ";
                    currentWordSpan.appendChild(span);
                }
                losses++;
                document.getElementById("losses").textContent = losses;
                alert("You Lost");
            }
        }
    }
};


