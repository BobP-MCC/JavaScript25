// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon


function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Meredith", 
        lastName = "Engel";
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("breeds").innerHTML = breed;  
}

function myMath() {
    // create statements demonstrating the use of each operator
    let x = 10;
    let y = 32;
    let addition = x + y;
    document.getElementById("addition").innerHTML = x + " + " + y + " = " + addition;
    let subtraction = y - x;
    document.getElementById("subtraction").innerHTML = y + " - " + x + " = " + subtraction;
    let multiplication = x * y;
    document.getElementById("multiplication").innerHTML = x + " * " + y + " = " + multiplication;
    let exponent = x ** y;
    document.getElementById("exponent").innerHTML = x + "^" + y + " = " + exponent;
    let division = y/x;
    document.getElementById("division").innerHTML = y + "/" + x + " = " + division;
    let modulus = y%x;
    document.getElementById("modulus").innerHTML = "The remainder of " + y + "/" + x + " is " + modulus;
    x++;
    document.getElementById("increment").innerHTML = "The value of 10++ is " + x++;
    y--;
    document.getElementById("decrement").innerHTML = "The value of 32-- is " + y--;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + " x = " + x;
    x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1" + " x = " + x;
    x -= 1;
    document.getElementById("minus-equals").innerHTML = "x -= 1" + " x = " + x;
    x *= 1;
    document.getElementById("times-equals").innerHTML = "x *= 1" + " x = " + x;
    x /= 1;
    document.getElementById("divide-equals").innerHTML = "x /= 1" + " x = " + x;
    x %= 1;
    document.getElementById("modulus-equals").innerHTML = "x %= 1" + " x = " + x;

}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const planets = ["Mercury", "Venus", "Mars"];
    document.getElementById("array").innerHTML = planets;
    const starship = {name: "USS Enterprise", class: "Constitution", registryNumber: "NCC-1701", captain: "James T. Kirk"}
    document.getElementById("object").innerHTML = starship.name + ", " + starship.class + " Class, " + starship.registryNumber + ", under the command of " + starship.captain;
    }
