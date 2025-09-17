// declare and initialize array
let game = ["BILBO", "FRODO", "GANDALF", "MERRY", "PIPPIN", "ARAGORN", "LEGOLAS", "GIMLI", "BOROMIR", "SAMWISE"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
const lettersGuessed = [];
// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;

}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    found = false;
    for (let c = 0; c < answer.length; c++) {
        if (userLetter.toUpperCase() === letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true
        }
        
        output = output + display[c] + ' ';
    }
    
    if (found == false) {
        attemptsLeft--;
    }

        lettersGuessed.push(userLetter.toUpperCase());
        lettersGuessed.sort();
        document.getElementById("guessed").innerHTML = 'Letters guessed: ' + lettersGuessed.join(', ');
        
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!! RETURN TO THE SHIRE IN TRIUMPH!';
    } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE! THE FELLOWSHIP IS BROKEN!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    switch(attemptsLeft) {
        case 6:
            document.getElementById("hangman").src = "images/01.png";
            break;
        case 5:
            document.getElementById("hangman").src = "images/02.png";
            break;
        case 4:
            document.getElementById("hangman").src = "images/03.png";
            break;
        case 3:
            document.getElementById("hangman").src = "images/04.png";
            break;
        case 2:
            document.getElementById("hangman").src = "images/05.png";
            break;
        case 1:
            document.getElementById("hangman").src = "images/06.png";
            break;
        default:
            document.getElementById("hangman").src = "images/07.png";
            break;


    }

    document.getElementById("word").innerHTML = output;
    output = '';

    
});


//scirpt connected fine somereason the button and the script are not registering.