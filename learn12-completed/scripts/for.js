// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

let text = "";

for (let i = 99; i > 0; i--) {
    if (i > 1) {
        text += i + " bottles of beer on the wall, <br>" + i + " bottles of beer, <br>" + "Take one down, pass it around...<br>";
    } else {
        text += i + " bottle of beer on the wall, <br>" + i + " bottle of beer, <br>" + "Take one down, pass it around...<br>No more bottles of beer on the wall!!!!!";
    }
}


document.getElementById("beer").innerHTML = text;



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let calendar = "";
for (let x in months) {
  calendar += months[x] + "<br>";
}

document.getElementById("for-in").innerHTML = calendar;


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let word = "sesquipedalian";

let spelling = "";
wordUpper = word.toUpperCase();
for (let x of wordUpper) {
    spelling += x +"!<br>";
}

document.getElementById("for-of").innerHTML = "What type of words do we like?<br><br> " + spelling + "<br><br> What does it spell?<br><br>" + word + "!";

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let count = ""
let num = 1;
while (num < 51) {
  count += num + "<br>";
  num++;
}

document.getElementById("while").innerHTML = count 