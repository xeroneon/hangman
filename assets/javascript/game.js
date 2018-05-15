// guesses remaining
var guessRemain = 12;

//words that can be guessed
var words = ["dialect", "quickly", "amplify", "voyager", "chagrin", "journey"]

//letters that have been guessed. empty to store them as they are guessed
var guessLetters = [];

//store the letter that has been pressed
var letterPress;

var guessedWord = [];


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
        // if ()
        for (k = 0; k < 7; k++) {
            //if letter is matched then it will place the letter in the right place in an array for comparison
            guessedWord.splice(k, 1, document.getElementById(k).textContent);
            console.log("guessedWord", guessedWord);

        }
        // console.log("guessedwordstring", guessedWord.join(""));
        //use .join to make array a string with no commas and if they match then alert win and reset board
        if (guessedWord.join("") === currentWord) {
            for (j = 0; j < 7; j++) {
                document.getElementById(j).textContent = "_";
            }
            document.getElementById("guess-remain").textContent = "12";
            guessRemain = 12;
            document.getElementById("guess-letters").textContent = " ";
            guessLetters = [];
            guessedWord = [];
            currentWord = words[Math.floor(Math.random() * words.length)];
            alert("you won!");
        }
        // guessedWord = guessedWord + letterPress;
        // console.log("guessedWord", guessedWord);
        // if (currentWord.length===guessedWord.length && currentWord.split("").sort().join() == guessedWord.split("").sort().join()) {
        //     alert("you won");
        // }

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
                guessedWord = [];
                currentWord = words[Math.floor(Math.random() * words.length)];
                alert("You Lost")
            }
        }
    }
};
