  // Verb form components
  const moods = ["Indicative","Subjunctive","Imperative"];
  const tenses = ["Present","Imperfect","Future","Perfect","Pluperfect","Future Perfect"];
  const voices = ["Active","Passive"];
  const persons = ["First","Second","Third"];
  const numbers = ["Singular","Plural"];
  const subjmoodTenses = ["Present","Imperfect","Perfect","Pluperfect"];

  // Randomly select components
  const randomMood = Math.floor(Math.random()*moods.length);
  const randomTense = Math.floor(Math.random()*tenses.length);
  const randomVoice = Math.floor(Math.random()*voices.length);
  const randomPerson = Math.floor(Math.random()*persons.length);
  const randomNumber = Math.floor(Math.random()*numbers.length);
  const randomSubjTense = Math.floor(Math.random()*subjmoodTenses.length);
  
  // Construct the conjugated word string based on mood
  if (moods[randomMood] === "Imperative") {
    conjugatedWord = `${moods[randomMood]} | Second | ${numbers[randomNumber]} | Present | Active`;
    } else if (moods[randomMood] === "Subjunctive") {
    conjugatedWord = `${moods[randomMood]} | ${persons[randomPerson]} | ${numbers[randomNumber]} | ${subjmoodTenses[randomSubjTense]} | ${voices[randomVoice]}`;
    } else {
    conjugatedWord = `${moods[randomMood]} | ${persons[randomPerson]} | ${numbers[randomNumber]} | ${tenses[randomTense]} | ${voices[randomVoice]}`;
    }

// User selection functions    
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

document.getElementById("button").innerHTML = '<button class="center" onclick="checkAnswer()">Submit</button>';

//Check answer function
let counter = 0;
function checkAnswer() {
    counter++;
    let userMood = mood();
    let userTense = tense();
    let userVoice = voice();
    let userPerson = person();
    let userNumber = number();
    let userAnswer = `${userMood} | ${userPerson} | ${userNumber} | ${userTense} | ${userVoice}`;

    if (userAnswer === conjugatedWord) {
        alert("Correct!");
        document.getElementById("button").innerHTML = '<button class="center" onclick="location.reload()">Next Question</button>';
    } else if (counter === 1) {
        alert("Incorrect. Try again! You have 2 attempts left!");
    } else if (counter === 2) {
        alert("Incorrect. Try again! You have 1 attempt left!");
    } else {
        alert("Incorrect. The correct answer is: " + conjugatedWord);
        document.getElementById("button").innerHTML = '<button class="center" onclick="location.reload()">Next Question</button>';
    }
}

// Verb Bank
const verbBank = {
"amo": {
firstPersonPresent: "amo",
infinitive: "amare",
firstPersonPerfect: "amavi",
perfectPassiveParticiple: "amatus",
conjugation: 1,
translation: "to love, like"
},
"do": {
firstPersonPresent: "do",
infinitive: "dare",
firstPersonPerfect: "dedi",
perfectPassiveParticiple: "datus",
conjugation: 1,
translation: "to give"
},
"laudo": {
firstPersonPresent: "laudo",
infinitive: "laudare",
firstPersonPerfect: "laudavi",
perfectPassiveParticiple: "laudatus",
conjugation: 1,
translation: "to praise"
},
"navigo": {
firstPersonPresent: "navigo",
infinitive: "navigare",
firstPersonPerfect: "navigavi",
perfectPassiveParticiple: "navigatus",
conjugation: 1,
translation: "to sail"
},
"occupo": {
firstPersonPresent: "occupo",
infinitive: "occupare",
firstPersonPerfect: "occupavi",
perfectPassiveParticiple: "occupatus",
conjugation: 1,
translation: "to seize, capture"
},
"paro": {
firstPersonPresent: "paro",
infinitive: "parare",
firstPersonPerfect: "paravi",
perfectPassiveParticiple: "paratus",
conjugation: 1,
translation: "to prepare"
},
"porto": {
firstPersonPresent: "porto",
infinitive: "portare",
firstPersonPerfect: "portavi",
perfectPassiveParticiple: "portatus",
conjugation: 1,
translation: "to carry"
},
"pugno": {
firstPersonPresent: "pugno",
infinitive: "pugnare",
firstPersonPerfect: "pugnavi",
perfectPassiveParticiple: "pugnatus",
conjugation: 1,
translation: "to fight"
},
"specto": {
firstPersonPresent: "specto",
infinitive: "spectare",
firstPersonPerfect: "spectavi",
perfectPassiveParticiple: "spectatus",
conjugation: 1,
translation: "to look at"
},
"voco": {
firstPersonPresent: "voco",
infinitive: "vocare",
firstPersonPerfect: "vocavi",
perfectPassiveParticiple: "vocatus",
conjugation: 1,
translation: "to call"
},
"appello": {
firstPersonPresent: "appello",
infinitive: "appellare",
firstPersonPerfect: "appellavi",
perfectPassiveParticiple: "appellatus",
conjugation: 1,
translation: "to call, name"
},
"convoco": {
firstPersonPresent: "convoco",
infinitive: "convocare",
firstPersonPerfect: "convocavi",
perfectPassiveParticiple: "convocatus",
conjugation: 1,
translation: "to call together, assemble, summon"
},
"exspecto": {
firstPersonPresent: "exspecto",
infinitive: "exspectare",
firstPersonPerfect: "exspectavi",
perfectPassiveParticiple: "exspectatus",
conjugation: 1,
translation: "to await, wait for"
},
"habito": {
firstPersonPresent: "habito",
infinitive: "habitare",
firstPersonPerfect: "habitavi",
perfectPassiveParticiple: "habitatus",
conjugation: 1,
translation: "to live, dwell"
},
"laboro": {
firstPersonPresent: "laboro",
infinitive: "laborare",
firstPersonPerfect: "laboravi",
perfectPassiveParticiple: "laboratus",
conjugation: 1,
translation: "to labor, work; suffer, be hard pressed"
},
"narro": {
firstPersonPresent: "narro",
infinitive: "narrare",
firstPersonPerfect: "narravi",
perfectPassiveParticiple: "narratus",
conjugation: 1,
translation: "to tell, relate"
},
"nuntio": {
firstPersonPresent: "nuntio",
infinitive: "nuntiare",
firstPersonPerfect: "nuntiavi",
perfectPassiveParticiple: "nuntiatus",
conjugation: 1,
translation: "to announce, report"
},
"supero": {
firstPersonPresent: "supero",
infinitive: "superare",
firstPersonPerfect: "superavi",
perfectPassiveParticiple: "superatus",
conjugation: 1,
translation: "to surpass, defeat"
},
"volo": {
firstPersonPresent: "volo",
infinitive: "volare",
firstPersonPerfect: "volavi",
perfectPassiveParticiple: "volatus",
conjugation: 1,
translation: "to fly"
},
"vulnero": {
firstPersonPresent: "vulnero",
infinitive: "vulnerare",
firstPersonPerfect: "vulneravi",
perfectPassiveParticiple: "vulneratus",
conjugation: 1,
translation: "to wound"
},
"ambulo": {
firstPersonPresent: "ambulo",
infinitive: "ambulare",
firstPersonPerfect: "ambulavi",
perfectPassiveParticiple: "ambulatus",
conjugation: 1,
translation: "to walk"
},
"clamo": {
firstPersonPresent: "clamo",
infinitive: "clamare",
firstPersonPerfect: "clamavi",
perfectPassiveParticiple: "clamatus",
conjugation: 1,
translation: "to shout"
},
"confirmo": {
firstPersonPresent: "confirmo",
infinitive: "confirmare",
firstPersonPerfect: "confirmavi",
perfectPassiveParticiple: "confirmatus",
conjugation: 1,
translation: "to strengthen; encourage; declare"
},
"demonstro": {
firstPersonPresent: "demonstro",
infinitive: "demonstrare",
firstPersonPerfect: "demonstravi",
perfectPassiveParticiple: "demonstratus",
conjugation: 1,
translation: "to show"
},
"libero": {
firstPersonPresent: "libero",
infinitive: "liberare",
firstPersonPerfect: "liberavi",
perfectPassiveParticiple: "liberatus",
conjugation: 1,
translation: "to free, set free"
},
"oppugno": {
firstPersonPresent: "oppugno",
infinitive: "oppugnare",
firstPersonPerfect: "oppugnavi",
perfectPassiveParticiple: "oppugnatus",
conjugation: 1,
translation: "to attack"
},
"servo": {
firstPersonPresent: "servo",
infinitive: "servare",
firstPersonPerfect: "servavi",
perfectPassiveParticiple: "servatus",
conjugation: 1,
translation: "to guard, keep, save"
},
"sto": {
firstPersonPresent: "sto",
infinitive: "stare",
firstPersonPerfect: "steti",
perfectPassiveParticiple: "statum",
conjugation: 1,
translation: "to stand"
},
"tempto": {
firstPersonPresent: "tempto",
infinitive: "temptare",
firstPersonPerfect: "temptavi",
perfectPassiveParticiple: "temptatus",
conjugation: 1,
translation: "to try, attempt"
},
"habeo": {
firstPersonPresent: "habeo",
infinitive: "habere",
firstPersonPerfect: "habui",
perfectPassiveParticiple: "habitus",
conjugation: 2,
translation: "to have; hold"
},
"maneo": {
firstPersonPresent: "maneo",
infinitive: "manere",
firstPersonPerfect: "mansi",
perfectPassiveParticiple: "mansum",
conjugation: 2,
translation: "to stay, remain"
},
"moneo": {
firstPersonPresent: "moneo",
infinitive: "monere",
firstPersonPerfect: "monui",
perfectPassiveParticiple: "monitus",
conjugation: 2,
translation: "to warn; advise, inform"
},
"moveo": {
firstPersonPresent: "moveo",
infinitive: "movere",
firstPersonPerfect: "movi",
perfectPassiveParticiple: "motus",
conjugation: 2,
translation: "to move"
},
"sedeo": {
firstPersonPresent: "sedeo",
infinitive: "sedere",
firstPersonPerfect: "sedi",
perfectPassiveParticiple: "sessum",
conjugation: 2,
translation: "to sit"
},
"teneo": {
firstPersonPresent: "teneo",
infinitive: "tenere",
firstPersonPerfect: "tenui",
perfectPassiveParticiple: "tentus",
conjugation: 2,
translation: "to hold"
},
"timeo": {
firstPersonPresent: "timeo",
infinitive: "timere",
firstPersonPerfect: "timui",
perfectPassiveParticiple: " —",
conjugation: 2,
translation: "to fear, be afraid"
},
"video": {
firstPersonPresent: "video",
infinitive: "videre",
firstPersonPerfect: "vidi",
perfectPassiveParticiple: "visus",
conjugation: 2,
translation: "to see"
},
"debeo": {
firstPersonPresent: "debeo",
infinitive: "debere",
firstPersonPerfect: "debui",
perfectPassiveParticiple: "debitus",
conjugation: 2,
translation: "to owe, ought"
},
"doceo": {
firstPersonPresent: "doceo",
infinitive: "docere",
firstPersonPerfect: "docui",
perfectPassiveParticiple: "doctus",
conjugation: 2,
translation: "to teach; show"
},
"prohibeo": {
firstPersonPresent: "prohibeo",
infinitive: "prohibere",
firstPersonPerfect: "prohibui",
perfectPassiveParticiple: "prohibitus",
conjugation: 2,
translation: "to prevent, keep from"
},
"respondeo": {
firstPersonPresent: "respondeo",
infinitive: "respondere",
firstPersonPerfect: "respondi",
perfectPassiveParticiple: "responsus",
conjugation: 2,
translation: "to reply, answer"
},
"retineo": {
firstPersonPresent: "retineo",
infinitive: "retinere",
firstPersonPerfect: "retinui",
perfectPassiveParticiple: "retentus",
conjugation: 2,
translation: "to hold back"
},
"terreo": {
firstPersonPresent: "terreo",
infinitive: "terrere",
firstPersonPerfect: "terrui",
perfectPassiveParticiple: "territus",
conjugation: 2,
translation: "to frighten"
},
"ago": {
firstPersonPresent: "ago",
infinitive: "agere",
firstPersonPerfect: "egi",
perfectPassiveParticiple: "actum",
conjugation: 3,
translation: "to do, drive"
},
"cogo": {
firstPersonPresent: "cogo",
infinitive: "cogere",
firstPersonPerfect: "coegi",
perfectPassiveParticiple: "coactus",
conjugation: 3,
translation: "to collect, compel"
},
"defendo": {
firstPersonPresent: "defendo",
infinitive: "defendere",
firstPersonPerfect: "defendi",
perfectPassiveParticiple: "defensus",
conjugation: 3,
translation: "to defend"
},
"duco": {
firstPersonPresent: "duco",
infinitive: "ducere",
firstPersonPerfect: "duxi",
perfectPassiveParticiple: "ductus",
conjugation: 3,
translation: "to lead"
},
"pono": {
firstPersonPresent: "pono",
infinitive: "ponere",
firstPersonPerfect: "posui",
perfectPassiveParticiple: "positus",
conjugation: 3,
translation: "to put, place"
},
"rego": {
firstPersonPresent: "rego",
infinitive: "regere",
firstPersonPerfect: "rexi",
perfectPassiveParticiple: "rectus",
conjugation: 3,
translation: "to rule"
},
"relinquo": {
firstPersonPresent: "relinquo",
infinitive: "relinquere",
firstPersonPerfect: "relinqui",
perfectPassiveParticiple: "relictus",
conjugation: 3,
translation: "to leave, leave behind"
},
"surgo": {
firstPersonPresent: "surgo",
infinitive: "surgere",
firstPersonPerfect: "surrexi",
perfectPassiveParticiple: "surrectus",
conjugation: 3,
translation: "to rise, stand up"
},
"trado": {
firstPersonPresent: "trado",
infinitive: "tradere",
firstPersonPerfect: "tradidi",
perfectPassiveParticiple: "traditus",
conjugation: 3,
translation: "to hand over, surrender"
},
"vinco": {
firstPersonPresent: "vinco",
infinitive: "vincere",
firstPersonPerfect: "vici",
perfectPassiveParticiple: "victus",
conjugation: 3,
translation: "to conquer, defeat"
},
"cedo": {
firstPersonPresent: "cedo",
infinitive: "cedere",
firstPersonPerfect: "cessi",
perfectPassiveParticiple: "cessus",
conjugation: 3,
translation: "to move; yield, give way"
},
"constituo": {
firstPersonPresent: "consituo",
infinitive: "constituere",
firstPersonPerfect: "constitui",
perfectPassiveParticiple: "constitutus",
conjugation: 3,
translation: "to set up; decide, determine"
},
"contendo": {
firstPersonPresent: "contendo",
infinitive: "contendere",
firstPersonPerfect: "contendi",
perfectPassiveParticiple: "contentus",
conjugation: 3,
translation: "to strive, struggle; hasten"
},
"deligo": {
firstPersonPresent: "deligo",
infinitive: "deligere",
firstPersonPerfect: "delegI",
perfectPassiveParticiple: "delectus",
conjugation: 3,
translation: "to choose"
},
"discedo": {
firstPersonPresent: "discedo",
infinitive: "discedere",
firstPersonPerfect: "discessi",
perfectPassiveParticiple: "discessus",
conjugation: 3,
translation: "to depart, leave"
},
"excedo": {
firstPersonPresent: "excedo",
infinitive: "excedere",
firstPersonPerfect: "excessi",
perfectPassiveParticiple: "excessus",
conjugation: 3,
translation: "to go out, leave"
},
"reduco": {
firstPersonPresent: "reduco",
infinitive: "reducere",
firstPersonPerfect: "reduxi",
perfectPassiveParticiple: "reductus",
conjugation: 3,
translation: "to lead back"
},
"accipio": {
firstPersonPresent: "accipio",
infinitive: "accipere",
firstPersonPerfect: "accepi",
perfectPassiveParticiple: "acceptus",
conjugation: 3.1,
translation: "to receive, accept"
},
"capio": {
firstPersonPresent: "capio",
infinitive: "capere",
firstPersonPerfect: "cepi",
perfectPassiveParticiple: "captus",
conjugation: 3.1,
translation: "to take, capture"
},
"conficio": {
firstPersonPresent: "conficio",
infinitive: "conficere",
firstPersonPerfect: "confeci",
perfectPassiveParticiple: "confectus",
conjugation: 3.1,
translation: "to accomplish, finish"
},
"conicio": {
firstPersonPresent: "conicio",
infinitive: "conicere",
firstPersonPerfect: "conieci",
perfectPassiveParticiple: "coniectus",
conjugation: 3.1,
translation: "to hurl; throw together"
},
"cupio": {
firstPersonPresent: "cupio",
infinitive: "cupere",
firstPersonPerfect: "cupivi",
perfectPassiveParticiple: "cupitus",
conjugation: 3.1,
translation: "to wish, desire"
},
"facio": {
firstPersonPresent: "facio",
infinitive: "facere",
firstPersonPerfect: "feci",
perfectPassiveParticiple: "factus",
conjugation: 3.1,
translation: "to do, make"
},
"fugio": {
firstPersonPresent: "fugio",
infinitive: "fugere",
firstPersonPerfect: "fugi",
perfectPassiveParticiple: "fugitus",
conjugation: 3.1,
translation: "to flee, flee from"
},
"iacio": {
firstPersonPresent: "iacio",
infinitive: "iacere",
firstPersonPerfect: "ieci",
perfectPassiveParticiple: "iactus",
conjugation: 3.1,
translation: "to throw"
},
"incipio": {
firstPersonPresent: "incipio",
infinitive: "incipere",
firstPersonPerfect: "incepi",
perfectPassiveParticiple: "inceptus",
conjugation: 3.1,
translation: "to begin"
},
"interficio": {
firstPersonPresent: "interficio",
infinitive: "interficere",
firstPersonPerfect: "interfeci",
perfectPassiveParticiple: "interfectus",
conjugation: 3.1,
translation: "to kill"
},
"bibo": {
firstPersonPresent: "bibo",
infinitive: "bibere",
firstPersonPerfect: "bibi",
perfectPassiveParticiple: " —",
conjugation: 3,
translation: "to drink"
},
"curro": {
firstPersonPresent: "curro",
infinitive: "currere",
firstPersonPerfect: "cucurri",
perfectPassiveParticiple: "cursus",
conjugation: 3,
translation: "to run"
},
"dico": {
firstPersonPresent: "dico",
infinitive: "dicere",
firstPersonPerfect: "dixi",
perfectPassiveParticiple: "dictus",
conjugation: 3,
translation: "to say, tell"
},
"edo": {
firstPersonPresent: "edo",
infinitive: "edere",
firstPersonPerfect: "edi",
perfectPassiveParticiple: "esus",
conjugation: 3,
translation: "to eat"
},
"peto": {
firstPersonPresent: "peto",
infinitive: "petere",
firstPersonPerfect: "petivi",
perfectPassiveParticiple: "petitus",
conjugation: 3,
translation: "to seek; beg, ask; attack; aim at"
},
"scribo": {
firstPersonPresent: "scribo",
infinitive: "scribere",
firstPersonPerfect: "scripsi",
perfectPassiveParticiple: "scriptus",
conjugation: 3,
translation: "to write"
},
"amitto": {
firstPersonPresent: "amitto",
infinitive: "amittere",
firstPersonPerfect: "amisi",
perfectPassiveParticiple: "amissus",
conjugation: 3,
translation: "to lose"
},
"committo": {
firstPersonPresent: "committo",
infinitive: "committere",
firstPersonPerfect: "commisi",
perfectPassiveParticiple: "commissus",
conjugation: 3,
translation: "to entrust, commit"
},
"expello": {
firstPersonPresent: "expello",
infinitive: "expellere",
firstPersonPerfect: "expuli",
perfectPassiveParticiple: "expulsus",
conjugation: 3,
translation: "to drive out, drive away, expel"
},
"reddo": {
firstPersonPresent: "reddo",
infinitive: "reddere",
firstPersonPerfect: "reddidi",
perfectPassiveParticiple: "redditus",
conjugation: 3,
translation: "to give back, restore"
},
"audio": {
firstPersonPresent: "audio",
infinitive: "audire",
firstPersonPerfect: "audivi",
perfectPassiveParticiple: "auditus",
conjugation: 4,
translation: "to hear, listen to"
},
"convenio": {
firstPersonPresent: "convenio",
infinitive: "convenire",
firstPersonPerfect: "conveni",
perfectPassiveParticiple: "conventus",
conjugation: 4,
translation: "to come together, assemble"
},
"dormio": {
firstPersonPresent: "dormio",
infinitive: "dormire",
firstPersonPerfect: "dormivi",
perfectPassiveParticiple: "dormitus",
conjugation: 4,
translation: "to sleep"
},
"impedio": {
firstPersonPresent: "impedio",
infinitive: "impedire",
firstPersonPerfect: "impedivi",
perfectPassiveParticiple: "impeditus",
conjugation: 4,
translation: "to hinder"
},
"invenio": {
firstPersonPresent: "invenio",
infinitive: "invenire",
firstPersonPerfect: "inveni",
perfectPassiveParticiple: "inventus",
conjugation: 4,
translation: "to find"
},
"munio": {
firstPersonPresent: "munio",
infinitive: "munire",
firstPersonPerfect: "munivi",
perfectPassiveParticiple: "munitus",
conjugation: 4,
translation: "to fortify, build"
},
"pervenio": {
firstPersonPresent: "pervenio",
infinitive: "pervenire",
firstPersonPerfect: "perveni",
perfectPassiveParticiple: "perventus",
conjugation: 4,
translation: "to reach, arrive"
},
"venio": {
firstPersonPresent: "venio",
infinitive: "venire",
firstPersonPerfect: "veni",
perfectPassiveParticiple: "ventus",
conjugation: 4,
translation: "to come"
},
"absum": {
firstPersonPresent: "absum",
infinitive: "abesse",
firstPersonPerfect: "afui",
perfectPassiveParticiple: "afuturus",
conjugation: "irregular",
translation: "to be absent, be distant, be away"
},
"adsum": {
firstPersonPresent: "adsum",
infinitive: "adesse",
firstPersonPerfect: "adfui",
perfectPassiveParticiple: "adfuturus",
conjugation: "irregular",
translation: "to be present, be near"
},
"contineo": {
firstPersonPresent: "contineo",
infinitive: "continere",
firstPersonPerfect: "continui",
perfectPassiveParticiple: "contentus",
conjugation: 2,
translation: "to hold together, restrain"
},
"inquam": {
firstPersonPresent: "inquam",
infinitive: null,
firstPersonPerfect: null,
perfectPassiveParticiple: null,
conjugation: "defective",
translation: "I say (defective verb)"
},
"iubeo": {
firstPersonPresent: "iubeo",
infinitive: "iubere",
firstPersonPerfect: "iussi",
perfectPassiveParticiple: "iussus",
conjugation: 2,
translation: "to order, bid"
},
"possum": {
firstPersonPresent: "possum",
infinitive: "posse",
firstPersonPerfect: "potui",
perfectPassiveParticiple: null,
conjugation: "irregular",
translation: "to be able, can"
},
"sustineo": {
firstPersonPresent: "sustineo",
infinitive: "sustinere",
firstPersonPerfect: "sustinui",
perfectPassiveParticiple: "sustentus",
conjugation: 2,
translation: "to hold up, hold in check, withstand"
}

};

// Select random verb
const verbOptions = Object.keys(verbBank);
const randomVerbIndex = Math.floor(Math.random() * verbOptions.length);
const selectedVerbKey = verbOptions[randomVerbIndex];
const selectedVerb = verbBank[selectedVerbKey];

// Set forms of selected verb
const baseWord = selectedVerb.firstPersonPresent;
const infinitive = selectedVerb.infinitive;
const firstPersonPerfect = selectedVerb.firstPersonPerfect;
const perfectPassiveParticiple = selectedVerb.perfectPassiveParticiple;
const conjugation = selectedVerb.conjugation;
const perfectPassiveParticiplePlural = perfectPassiveParticiple.slice(0, -2) + "i";
const translation = selectedVerb.translation;
document.getElementById("translation").innerHTML = translation;

// Create stems for use in conjugation formulae
let presentStem;
if (conjugation === 1 || conjugation === 2 || conjugation === 4) {
    presentStem = infinitive.slice(0, -2); // remove -re
} else {
    presentStem = (infinitive.slice(0, -3)) + "i"; // remove -ere
}

const perfectStem = firstPersonPerfect.slice(0, -1); // remove -i

let impFutStem;
if (conjugation < 3.1) {
  impFutStem = infinitive.slice(0, -2);
} else {
  impFutStem = (infinitive.slice(0, -3)) + "ie";
}

let subjStem;
if (conjugation === 1) {
  subjStem = presentStem.slice(0, -1) + "e";
}
else if (conjugation === 2) {
  subjStem = presentStem +"a";
}
else if (conjugation === 3) {
  subjStem = infinitive.slice(0, -3) + "a";
}
else if (conjugation > 3) {
  subjStem = infinitive.slice(0, -3) + "ia";
} 

const principalParts = `<div class="row center"><div class="col-3"><h5>First Person Present Indicative</h5><h4>${baseWord}</h4></div><div class="col-3"><h5>Infinitive</h5><h4>${infinitive}</h4></div><div class="col-3"><h5>First Person Perfect Indicative</h5><h4>${firstPersonPerfect}</h4></div><div class="col-3"><h5>Perfect Passive Participle</h5><h4>${perfectPassiveParticiple}</h4></div></div>`;


document.getElementById("principal-parts").innerHTML = principalParts;

// Hint on/off functions
function hint() {
    document.getElementById("principal-parts").style.display = "block";
}

function hideHint() {
    document.getElementById("principal-parts").style.display = "none";
}

// Generate conjugated verb
const verbForms = conjugatedWord;
let conjugatedForm = "";

// Verb conjugation formulae
switch (verbForms) {
  // Indicative - Present - Active
  case "Indicative | First | Singular | Present | Active":
    conjugatedForm = baseWord;
    break;
  case "Indicative | Second | Singular | Present | Active":
    conjugatedForm = presentStem + "s";
    break;
  case "Indicative | Third | Singular | Present | Active":
    conjugatedForm = presentStem + "t";
    break;
  case "Indicative | First | Plural | Present | Active":
    conjugatedForm = presentStem + "mus";
    break;
  case "Indicative | Second | Plural | Present | Active":
    conjugatedForm = presentStem + "tis";
    break;
  case "Indicative | Third | Plural | Present | Active":
    if (conjugation < 3) conjugatedForm = presentStem + "nt";
    else if (conjugation === 3) conjugatedForm = presentStem.slice(0, -1) + "unt";
    else if (conjugation > 3) conjugatedForm = presentStem + "unt";
    break;

    // Indicative - Present - Passive
  case "Indicative | First | Singular | Present | Passive":
    conjugatedForm = baseWord + "r";
    break;
  case "Indicative | Second | Singular | Present | Passive":
    if (conjugation < 3) conjugatedForm = presentStem + "ris";
    else conjugatedForm = presentStem.slice(0, -1) + "eris";
    break;
  case "Indicative | Third | Singular | Present | Passive":
    conjugatedForm = presentStem + "tur";
    break;
  case "Indicative | First | Plural | Present | Passive":
    conjugatedForm = presentStem + "mur";
    break;
  case "Indicative | Second | Plural | Present | Passive":
    conjugatedForm = presentStem + "mini";
    break;
  case "Indicative | Third | Plural | Present | Passive":
    if (conjugation < 3) conjugatedForm = presentStem + "ntur";
    else if (conjugation === 3) conjugatedForm = presentStem.slice(0, -1) + "untur";
    else if (conjugation > 3) conjugatedForm = presentStem + "untur";
    break;

  // Indicative - Imperfect - Active
  case "Indicative | First | Singular | Imperfect | Active":
    conjugatedForm = impFutStem + "bam";
    break;
  case "Indicative | Second | Singular | Imperfect | Active":
    conjugatedForm = impFutStem + "bas";
    break;
  case "Indicative | Third | Singular | Imperfect | Active":
    conjugatedForm = impFutStem + "bat";
    break;
  case "Indicative | First | Plural | Imperfect | Active":
    conjugatedForm = impFutStem + "bamus";
    break;
  case "Indicative | Second | Plural | Imperfect | Active":
    conjugatedForm = impFutStem + "batis";
    break;
  case "Indicative | Third | Plural | Imperfect | Active":
    conjugatedForm = impFutStem + "bant";
    break;

  // Indicative - Imperfect - Passive
  case "Indicative | First | Singular | Imperfect | Passive":
    conjugatedForm = impFutStem + "bar";
    break;
  case "Indicative | Second | Singular | Imperfect | Passive":
    conjugatedForm = impFutStem + "baris";
    break;
  case "Indicative | Third | Singular | Imperfect | Passive":
    conjugatedForm = impFutStem + "batur";
    break;
  case "Indicative | First | Plural | Imperfect | Passive":
    conjugatedForm = impFutStem + "bamur";
    break;
  case "Indicative | Second | Plural | Imperfect | Passive":
    conjugatedForm = impFutStem + "bamini";
    break;
  case "Indicative | Third | Plural | Imperfect | Passive":
    conjugatedForm = impFutStem + "bantur";
    break;

  // Indicative - Future - Active
  case "Indicative | First | Singular | Future | Active":
    if (conjugation < 3) conjugatedForm = impFutStem + "bo";
    else conjugatedForm = impFutStem.slice(0, -1) + "am"; 
    break;
  case "Indicative | Second | Singular | Future | Active":
    if (conjugation < 3) conjugatedForm = impFutStem + "bis";
    else conjugatedForm = impFutStem + "s";
    break;
  case "Indicative | Third | Singular | Future | Active":
    if (conjugation < 3) conjugatedForm = impFutStem + "bit";
    else conjugatedForm = impFutStem + "t";
    break;
  case "Indicative | First | Plural | Future | Active":
    if (conjugation < 3) conjugatedForm = impFutStem + "bimus";
    else conjugatedForm = impFutStem + "mus";
    break;
  case "Indicative | Second | Plural | Future | Active":
    if (conjugation < 3) conjugatedForm = impFutStem + "bitis";
    else conjugatedForm = impFutStem + "tis";
    break;
  case "Indicative | Third | Plural | Future | Active":
    if (conjugation < 3) conjugatedForm = impFutStem + "bunt";
    else conjugatedForm = impFutStem + "nt";
    break;

  // Indicative - Future - Passive
  case "Indicative | First | Singular | Future | Passive":
      if (conjugation < 3) conjugatedForm = impFutStem + "bor";
    else conjugatedForm = impFutStem.slice(0, -1) + "ar"; 
    break;
  case "Indicative | Second | Singular | Future | Passive":
    if (conjugation < 3) conjugatedForm = impFutStem + "biris";
    else conjugatedForm = impFutStem + "ris";
    break;
  case "Indicative | Third | Singular | Future | Passive":
    if (conjugation < 3) conjugatedForm = impFutStem + "bitur";
    else conjugatedForm = impFutStem + "tur";
    break;
  case "Indicative | First | Plural | Future | Passive":
    if (conjugation < 3) conjugatedForm = impFutStem + "bimur";
    else conjugatedForm = impFutStem + "mur";
    break;
  case "Indicative | Second | Plural | Future | Passive":
    if (conjugation < 3) conjugatedForm = impFutStem + "bimini";
    else conjugatedForm = impFutStem + "mini";
    break;
  case "Indicative | Third | Plural | Future | Passive":
    if (conjugation < 3) conjugatedForm = impFutStem + "buntur";
    else conjugatedForm = impFutStem + "ntur";
    break;

  // Indicative - Perfect - Active
  case "Indicative | First | Singular | Perfect | Active":
    conjugatedForm = perfectStem + "i";
    break;
  case "Indicative | Second | Singular | Perfect | Active":
    conjugatedForm = perfectStem + "isti";
    break;
  case "Indicative | Third | Singular | Perfect | Active":
    conjugatedForm = perfectStem + "it";
    break;
  case "Indicative | First | Plural | Perfect | Active":
    conjugatedForm = perfectStem + "imus";
    break;
  case "Indicative | Second | Plural | Perfect | Active":
    conjugatedForm = perfectStem + "istis";
    break;
  case "Indicative | Third | Plural | Perfect | Active":
    conjugatedForm = perfectStem + "erunt";
    break;

  // Indicative - Perfect - Passive
  case "Indicative | First | Singular | Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} sum`;
    break;
  case "Indicative | Second | Singular | Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} es`;
    break;
  case "Indicative | Third | Singular | Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} est`;
    break;
  case "Indicative | First | Plural | Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} sumus`;
    break;
  case "Indicative | Second | Plural | Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} estis`;
    break;
  case "Indicative | Third | Plural | Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} sunt`;
    break;

  // Indicative - Pluperfect - Active
  case "Indicative | First | Singular | Pluperfect | Active":
    conjugatedForm = perfectStem + "eram";
    break;
  case "Indicative | Second | Singular | Pluperfect | Active":
    conjugatedForm = perfectStem + "eras";
    break;
  case "Indicative | Third | Singular | Pluperfect | Active":
    conjugatedForm = perfectStem + "erat";
    break;
  case "Indicative | First | Plural | Pluperfect | Active":
    conjugatedForm = perfectStem + "eramus";
    break;
  case "Indicative | Second | Plural | Pluperfect | Active":
    conjugatedForm = perfectStem + "eratis";
    break;
  case "Indicative | Third | Plural | Pluperfect | Active":
    conjugatedForm = perfectStem + "erant";
    break;

  // Indicative - Pluperfect - Passive
  case "Indicative | First | Singular | Pluperfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} eram`;
    break;
  case "Indicative | Second | Singular | Pluperfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} eras`;
    break;
  case "Indicative | Third | Singular | Pluperfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} erat`;
    break;
  case "Indicative | First | Plural | Pluperfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} eramus`;
    break;
  case "Indicative | Second | Plural | Pluperfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} eratis`;
    break;
  case "Indicative | Third | Plural | Pluperfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} erant`;
    break;

  // Indicative - Future Perfect - Active
  case "Indicative | First | Singular | Future Perfect | Active":
    conjugatedForm = perfectStem + "ero";
    break;
  case "Indicative | Second | Singular | Future Perfect | Active":
    conjugatedForm = perfectStem + "eris";
    break;
  case "Indicative | Third | Singular | Future Perfect | Active":
    conjugatedForm = perfectStem + "erit";
    break;
  case "Indicative | First | Plural | Future Perfect | Active":
    conjugatedForm = perfectStem + "erimus";
    break;
  case "Indicative | Second | Plural | Future Perfect | Active":
    conjugatedForm = perfectStem + "eritis";
    break;
  case "Indicative | Third | Plural | Future Perfect | Active":
    conjugatedForm = perfectStem + "erint";
    break;

    // Indicative - Future Perfect - Passive
  case "Indicative | First | Singular | Future Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} ero`;
    break;
  case "Indicative | Second | Singular | Future Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} eris`;
    break;
  case "Indicative | Third | Singular | Future Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiple} erit`;
    break;
  case "Indicative | First | Plural | Future Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} erimus`;
    break;
  case "Indicative | Second | Plural | Future Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} eritis`;
    break;
  case "Indicative | Third | Plural | Future Perfect | Passive":
    conjugatedForm = `${perfectPassiveParticiplePlural} erint`;
    break;

  // Subjunctive - Present - Active
    case "Subjunctive | First | Singular | Present | Active":
    conjugatedForm = subjStem + "m";
    break;
  case "Subjunctive | Second | Singular | Present | Active":
    conjugatedForm = subjStem + "s";
    break;
  case "Subjunctive | Third | Singular | Present | Active":
    conjugatedForm = subjStem + "t";
    break;
  case "Subjunctive | First | Plural | Present | Active":
    conjugatedForm = subjStem + "mus";
    break;
  case "Subjunctive | Second | Plural | Present | Active":
    conjugatedForm = subjStem + "tis";
    break;
  case "Subjunctive | Third | Plural | Present | Active":
    conjugatedForm = subjStem + "nt";
    break;

  case "Subjunctive | First | Singular | Present | Passive":
    conjugatedForm = subjStem + "r";
    break;
  case "Subjunctive | Second | Singular | Present | Passive":
    conjugatedForm = subjStem + "ris";
    break;
  case "Subjunctive | Third | Singular | Present | Passive":
    conjugatedForm = subjStem + "tur";
    break;
  case "Subjunctive | First | Plural | Present | Passive":
    conjugatedForm = subjStem + "mur";
    break;
  case "Subjunctive | Second | Plural | Present | Passive":
    conjugatedForm = subjStem + "mini";
    break;
  case "Subjunctive | Third | Plural | Present | Passive":
    conjugatedForm = subjStem + "ntur";
    break;

// Subjunctive - Imperfect - Active
case "Subjunctive | First | Singular | Imperfect | Active":
conjugatedForm = infinitive + "m";
break;
case "Subjunctive | Second | Singular | Imperfect | Active":
conjugatedForm = infinitive + "s";
break;
case "Subjunctive | Third | Singular | Imperfect | Active":
conjugatedForm = infinitive + "t";
break;
case "Subjunctive | First | Plural | Imperfect | Active":
conjugatedForm = infinitive + "mus";
break;
case "Subjunctive | Second | Plural | Imperfect | Active":
conjugatedForm = infinitive + "tis";
break;
case "Subjunctive | Third | Plural | Imperfect | Active":
conjugatedForm = infinitive + "nt";
break;

// Subjunctive - Imperfect - Passive
case "Subjunctive | First | Singular | Imperfect | Passive":
conjugatedForm = infinitive + "r";
break;
case "Subjunctive | Second | Singular | Imperfect | Passive":
conjugatedForm = infinitive + "ris";
break;
case "Subjunctive | Third | Singular | Imperfect | Passive":
conjugatedForm = infinitive + "tur";
break;
case "Subjunctive | First | Plural | Imperfect | Passive":
conjugatedForm = infinitive + "mur";
break;
case "Subjunctive | Second | Plural | Imperfect | Passive":
conjugatedForm = infinitive + "mini";
break;
case "Subjunctive | Third | Plural | Imperfect | Passive":
conjugatedForm = infinitive + "ntur";
break;

// Subjunctive - Perfect - Active
case "Subjunctive | First | Singular | Perfect | Active":
conjugatedForm = perfectStem + "erim";
break;
case "Subjunctive | Second | Singular | Perfect | Active":
conjugatedForm = perfectStem + "eris";
break;
case "Subjunctive | Third | Singular | Perfect | Active":
conjugatedForm = perfectStem + "erit";
break;
case "Subjunctive | First | Plural | Perfect | Active":
conjugatedForm = perfectStem + "erimus";
break;
case "Subjunctive | Second | Plural | Perfect | Active":
conjugatedForm = perfectStem + "eritis";
break;
case "Subjunctive | Third | Plural | Perfect | Active":
conjugatedForm = perfectStem + "erint";
break;

// Subjunctive - Perfect - Passive
case "Subjunctive | First | Singular | Perfect | Passive":
conjugatedForm = `${perfectPassiveParticiple} sim`;
break;
case "Subjunctive | Second | Singular | Perfect | Passive":
conjugatedForm = `${perfectPassiveParticiple} sis`;
break;
case "Subjunctive | Third | Singular | Perfect | Passive":
conjugatedForm = `${perfectPassiveParticiple} sit`;
break;
case "Subjunctive | First | Plural | Perfect | Passive":
conjugatedForm = `${perfectPassiveParticiplePlural} simus`;
break;
case "Subjunctive | Second | Plural | Perfect | Passive":
conjugatedForm = `${perfectPassiveParticiplePlural} sitis`;
break;
case "Subjunctive | Third | Plural | Perfect | Passive":
conjugatedForm = `${perfectPassiveParticiplePlural} sint`;
break;

// Subjunctive - Pluperfect - Active
case "Subjunctive | First | Singular | Pluperfect | Active":
conjugatedForm = perfectStem + "issem";
break;
case "Subjunctive | Second | Singular | Pluperfect | Active":
conjugatedForm = perfectStem + "isses";
break;
case "Subjunctive | Third | Singular | Pluperfect | Active":
conjugatedForm = perfectStem + "isset";
break;
case "Subjunctive | First | Plural | Pluperfect | Active":
conjugatedForm = perfectStem + "issemus";
break;
case "Subjunctive | Second | Plural | Pluperfect | Active":
conjugatedForm = perfectStem + "issetis";
break;
case "Subjunctive | Third | Plural | Pluperfect | Active":
conjugatedForm = perfectStem + "issent";
break;

// Subjunctive - Pluperfect - Passive
case "Subjunctive | First | Singular | Pluperfect | Passive":
conjugatedForm = `${perfectPassiveParticiple} essem`;
break;
case "Subjunctive | Second | Singular | Pluperfect | Passive":
conjugatedForm = `${perfectPassiveParticiple} esses`;
break;
case "Subjunctive | Third | Singular | Pluperfect | Passive":
conjugatedForm = `${perfectPassiveParticiple} esset`;
break;
case "Subjunctive | First | Plural | Pluperfect | Passive":
conjugatedForm = `${perfectPassiveParticiplePlural} essemus`;
break;
case "Subjunctive | Second | Plural | Pluperfect | Passive":
conjugatedForm = `${perfectPassiveParticiplePlural} essetis`;
break;
case "Subjunctive | Third | Plural | Pluperfect | Passive":
conjugatedForm = `${perfectPassiveParticiplePlural} essent`;
break;

case "Imperative | Second | Singular | Present | Active":
conjugatedForm = infinitive.slice(0, -2);
break;
case "Imperative | Second | Plural | Present | Active":
  if (conjugation === 3 || conjugation === 3.1) {
    conjugatedForm = infinitive.slice(0, -3) + "ite";
  } else {
    conjugatedForm = infinitive.slice(0, -2) + "te";
  }
  break;

default:
conjugatedForm = null;
}

document.getElementById("conjugated-word").innerHTML = conjugatedForm;