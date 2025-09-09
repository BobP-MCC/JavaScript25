function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
      
    document.getElementById("name").innerHTML = "Your Name here";
    
    let me = "Bob";
    
    document.getElementById("me").innerHTML = me;
    

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."

    let length = myString.length;

    document.getElementById("length").innerHTML = length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)

    let escape ="Ironically Thomas Paine's most famous line\\quote:\r\"These are the times that try men's souls,\" is not from his most famous work, \"Common Sense,\r\" but from another pamphlet, \"The American Crisis.\"";

    document.getElementById("escape").innerHTML = escape;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    
    let name = "Robert Francis Peck";
    document.getElementById("first").innerHTML = name.slice(0, 6);

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    document.getElementById("middle").innerHTML = name.substring(7, 15);

    // Use the JavaScript subst Method to display your last name to the last paragraph
    document.getElementById("last").innerHTML = name.substr(15, 4);

    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"

    document.getElementById("major").innerHTML = major.replace("Physical Therapy", "Software Development");

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let myText2 = myText.toUpperCase();
    
    document.getElementById("upper").innerHTML = myText2;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimText2 = trimText.trim();

    document.getElementById("trim").innerHTML = trimText2;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"

    let index = months.indexOf("May");

    document.getElementById("index").innerHTML = index;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)

    let first = `Bob`;
    let last = `Peck`;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and
    
    let greeting = `Hello, my name is ${first} ${last}.`;
    // print to the greeting paragraph
    
    document.getElementById("greeting").innerHTML = greeting;
}