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
var currentWordSpan = document.getElementById("current-word");
currentWordSpan.innerHTML = " ";
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
        for (i = 0; i < currentWord.length; i++) {
            if (currentWord.charAt(i) === letterPress) {
                console.log("match");
                guessedWord.splice(i, 1, letterPress);
                console.log("guessedWord", guessedWord);
                //changes html to be the letter that was pressed
                document.getElementById(i).textContent = letterPress;
                if (guessedWord.join("") === currentWord) {
                    document.getElementById("guess-remain").textContent = "12";
                    guessRemain = 12;
                    document.getElementById("guess-letters").textContent = " ";
                    guessLetters = [];
                    guessedWord = [];
                    currentWord = words[Math.floor(Math.random() * words.length)];
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
    else {
        if (guessLetters.indexOf(letterPress) === -1) {
            //if letter isnt in the guessed array add it to the array
            // if (guessLetters.indexOf(letterPress) === -1) {
            guessLetters.push(letterPress);
            document.getElementById("guess-letters").textContent = guessLetters;
            //score goes down by 1
            guessRemain--;
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
            // }
        }
    }
};


