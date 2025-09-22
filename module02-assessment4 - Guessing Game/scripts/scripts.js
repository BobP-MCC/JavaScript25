document.getElementById("titleText").innerHTML = "Guess the Number!";
const number = Math.floor(Math.random() * 1000) + 1;
const numbersGuessed = [];

function setup(){
  alert(number)
}

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();

  const input = document.getElementById("guess").value;
  const userNumber = Number(input);
  document.getElementById("guess").value = '';

  numbersGuessed.push(userNumber);
  document.getElementById("guessed").innerHTML = "Numbers guessed: " + numbersGuessed.join(', ');

  const diff = Math.abs(userNumber - number);

  if (userNumber == number) {
    document.getElementById("titleText").innerHTML = "YOU GOT IT!!!!";
    document.getElementById("headerColor").style.backgroundColor = "green";

  } else if (diff <= 10) {
    document.getElementById("titleText").innerHTML = "BOILING HOT!!!";
    document.getElementById("headerColor").style.backgroundColor = "var(--hottest)";

  } else if (diff <= 50) {
    document.getElementById("titleText").innerHTML = "VERY HOT!!";
    document.getElementById("headerColor").style.backgroundColor = "var(--hotter)";

  } else if (diff <= 100) {
    document.getElementById("titleText").innerHTML = "HOT!";
    document.getElementById("headerColor").style.backgroundColor = "var(--warm)";

  } else if (diff <= 250) {
    document.getElementById("titleText").innerHTML = "COLD!";
    document.getElementById("headerColor").style.backgroundColor = "var(--cool)";

  } else if (diff <= 500) {
    document.getElementById("titleText").innerHTML = "VERY COLD!!";
    document.getElementById("headerColor").style.backgroundColor = "var(--colder)";

  } else {
    document.getElementById("titleText").innerHTML = "ICE COLD!!!";
    document.getElementById("headerColor").style.backgroundColor = "var(--coldest)";
  }
});