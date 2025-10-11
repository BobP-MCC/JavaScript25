class President{
    constructor(name, number, party, state, terms, termStart, termEnd, fate){
        this.name = name;
        this.number = number;
        this.party = party;
        this.state = state;
        this.terms = terms;
        this.termStart = termStart;
        this.termEnd = termEnd;
        this.fate = fate;
    }
    
    presidentInfo(){
        return `${this.name}, the ${this.number} president, a member of the ${this.party} party, was elected from ${this.state}, and served for ${this.terms} from ${this.termStart} to ${this.termEnd} when he ${this.fate}.`
    }
}

const washington = new President("George Washington", "1st", "Federalist", "Virginia", "2 terms", 1789, 1797, "chose not to seek re-election");
const adams = new President("John Adams", "2nd", "Federalist", "Massachusetts", "1 term", 1797, 1801, "lost re-election");
const jefferson = new President("Thomas Jefferson", "3rd", "Democratic-Republican", "Virginia", "2 terms", 1801, 1809, "chose not to seek re-election");
const lincoln = new President("Abraham Lincoln", "16th", "Republican", "Illinois", "2 terms", 1861, 1865, "was assassinated");
const tRoosevelt = new President("Theodore Roosevelt", "26th", "Republican", "New York", "2 terms", 1901, 1909, "chose not to seek re-election");
const fRoosevelt = new President("Franklin D. Roosevelt", "32nd", "Democrat", "New York", "4 terms", 1933, 1945, "died in office");

document.getElementById("washington").innerHTML = washington.presidentInfo();
document.getElementById("adams").innerHTML = adams.presidentInfo();
document.getElementById("jefferson").innerHTML = jefferson.presidentInfo();
document.getElementById("lincoln").innerHTML = lincoln.presidentInfo();
document.getElementById("tRoosevelt").innerHTML = tRoosevelt.presidentInfo();
document.getElementById("fRoosevelt").innerHTML = fRoosevelt.presidentInfo();