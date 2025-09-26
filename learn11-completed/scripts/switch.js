function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);
    
    chiYear = year % 12;
    
    switch (chiYear) {
        case 0:
            chi = "Monkey"
            break;
        case 1:
            chi = "Rooster"
            break;
        case 2:
            chi = "Dog"
            break;
        case 3:
            chi = "Pig"
            break;
        case 4:
            chi = "Rat"
            break;
        case 5:
            chi = "Ox"
            break;
        case 6:
            chi = "Tiger"
            break;
        case 7:
            chi = "Rabbit"
            break;
        case 8:
            chi = "Dragon"
            break;
        case 9:
            chi = "Snake"
            break;
        case 10:
            chi = "Horse"
            break;
        case 11:
            chi = "Goat"
            break;
        default:
            chi = "That year is not included in my list"
            break;

    }

    switch(month) {
        case 1:
            if (date >= 21) {
                zodiac = "Aquarius"
            }else {
                zodiac ="Capricorn"
            }
            break
        case 2:
            if (date >= 19) {
                zodiac = "Pisces"
            }else {
                zodiac ="Aquarius"
            }
            break
        case 3:
            if (date >= 21) {
                zodiac = "Aries"
            }else {
                z
                odiac ="Pisces"
            }
            break
        case 4:
            if (date >= 21) {
                zodiac = "Taurus"
            }else {
                zodiac ="Aries"
            }
            break
        case 5:
            if (date >= 21) {
                zodiac = "Gemini"
            }else {
                zodiac ="Taurus"
            }
            break
        case 6:
            if (date >= 22) {
                zodiac = "Cancer"
            }else {
                zodiac ="Gemini"
            }
            break
        case 7:
            if (date >= 23) {
                zodiac = "Leo"
            }else {
                zodiac ="Cancer"
            }
            break
        case 8:
            if (date >= 23) {
                zodiac = "Virgo"
            }else {
                zodiac ="Leo"
            }
            break
        case 9:
            if (date >= 23) {
                zodiac = "Libra"
            }else {
                zodiac ="Virgo"
            }
            break
        case 10:
            if (date >= 23) {
                zodiac = "Scorpio"
            }else {
                zodiac ="Libra"
            }
            break
        case 11:
            if (date >= 23) {
                zodiac = "Sagittarius"
            }else {
                zodiac ="Scorpio"
            }
            break
        case 12:
            if (date >= 22) {
                zodiac = "Capricorn"
            }else {
                zodiac ="Sagittarius"
            }
            break
        default:
            zodiac = "That is not a month or day I recognize"
            break
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your Western zodiac sign is: " + zodiac;



}