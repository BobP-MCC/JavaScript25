/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const stormlight = ["The Way of Kings", "Words of Radiance", "Oathbringer", "The Rhythm of War", "Wind and Truth"]

let archive = "";
for (const book of stormlight) {
    archive += book + "<br>"
}

document.getElementById("list").innerHTML = "Brandon Sanderson's Stormlight Archive consists of five books (so far):<br><br>" + archive



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const songs = new Set(["\"Thunderstruck\" by AC/DC", "\"Build Me Up, Buttercup\" by the Foundations", "\"Immigrant Song\" by Led Zeppelin", "\"Firework\" by Katy Perry", "\"Hey There, Delilah\" by the Plain White Tees", "\"All Star\" by Smashmouth", "\"We Will Rock You\" by Queen"])

let kidsFaves = "";
for (const song of songs) {
    kidsFaves += song + "<br>"
}

document.getElementById("set1").innerHTML = "Some random songs my kids enjoy listening to in the car include:<br><br>" + kidsFaves;


// add two more songs to the set then display in the set2 paragraph

songs.add("\"My Shot\" from the musical <i>Hamilton<i>");
songs.add("\"You'll Be Back\" from the musical <i>Hamilton<>");

// let kidsFaves2 = "";
// for (const song of songs) {
//     kidsFaves2 += song + "<br>"
// }

document.getElementById("set2").innerHTML = "Since my kids heard the soundtrack to the musical Hamilton this list has expanded:<br><br>" + kidsFaves






/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const emails = new Map([
  ["Scott, Michael", "mscott@dundermifflin.com"],
  ["Halpert, James", "jhalpert@dundermifflin.com"],
  ["Schrute, Dwight", "assregman@dundermifflin.com"],
  ["Flenderson, Toby", "hrscranton@dundermifflin.com"],
  ["Beasley, Pamela", "pbeasley@dundermifflin.com"]
]);

let rolodex = "";
emails.forEach (function(value, key) {
  rolodex += key + ': ' + value + "<br>";
})

document.getElementById("map1").innerHTML = rolodex

// add two new names and emails and display in map2 use the forEach() method

emails.set("Nunez, Oscar", "onunez@dundermifflin.com")
emails.set("Malone, Kevin", "kevinsemailaddress@dundermifflin.com")

let rolodex2 = "";
emails.forEach (function(value, key) {
  rolodex2 += key + ': ' + value + "<br>";
})

document.getElementById("map2").innerHTML = rolodex2

// get and display the email of one person, display in map3

pamsEmail = emails.get("Beasley, Pamela");

document.getElementById("map3").innerHTML = "Pam's email is " + pamsEmail;