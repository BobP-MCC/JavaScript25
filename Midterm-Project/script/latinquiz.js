// function load() {
//     document.getElementById("mood").value = "";
//     document.getElementById("tense").value = "";
//     document.getElementById("voice").value = "";
//     document.getElementById("person").value = "";
//     document.getElementById("number").value = "";
// }

  const moods = ["Indicative","Subjunctive","Imperative"];
  const tenses = ["Present","Imperfect","Future","Perfect","Pluperfect","Future Perfect"];
  const voices = ["Active","Passive"];
  const persons = ["First","Second","Third"];
  const numbers = ["Singular","Plural"];

  const randomMood = Math.floor(Math.random()*moods.length);
  const randomTense = Math.floor(Math.random()*tenses.length);
  const randomVoice = Math.floor(Math.random()*voices.length);
  const randomPerson = Math.floor(Math.random()*persons.length);
  const randomNumber = Math.floor(Math.random()*numbers.length);

  if (moods[randomMood] === "Imperative") {
    conjugatedWord = `${moods[randomMood]} | Second | ${numbers[randomNumber]} | Present | ${voices[randomVoice]}`;
    } else {
    conjugatedWord = `${moods[randomMood]} | ${persons[randomPerson]} | ${numbers[randomNumber]} | ${tenses[randomTense]} | ${voices[randomVoice]}`;
    }

  document.getElementById("conjugated-word").textContent = conjugatedWord;

function mood() {
    return document.getElementById("mood").value;
}

function person() {
    return document.getElementById("person").value;
}

function number() {
    return document.getElementById("number").value;
}

function tense() {
    return document.getElementById("tense").value;
}

function voice() {
    return document.getElementById("voice").value;
}
function checkAnswer() {
    let userMood = mood();
    let userTense = tense();
    let userVoice = voice();
    let userPerson = person();
    let userNumber = number();

    if (userMood === moods[randomMood] && userTense === tenses[randomTense] && userVoice === voices[randomVoice] && userPerson === persons[randomPerson] && userNumber === numbers[randomNumber]) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + conjugatedWord);
    }
}

let principleParts = '<div class="row-center"><div class="col-3"><h5>First Person Present Indicative</h5><h4>amo</h4></div><div class="col-3"><h5>Infinitive</h5><h4>amare</h4></div><div class="col-3"><h5>First Person Perfect Indicative</h5><h4>amavi</h4></div><div class="col-3"><h5>Perfect Passive Participle</h5><h4>amatus</h4></div></div>';

document.getElementById("principle-parts").innerHTML = principleParts;
