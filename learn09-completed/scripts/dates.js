/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

const day = new Date();
document.getElementById("basic").innerHTML = day;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

const today = new Date("2025-09-21");
document.getElementById("today").innerHTML = today

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

const birthday = new Date("1980-09-06");
document.getElementById("birthday").innerHTML = birthday.toDateString();



// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = day.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

independenceDay = new Date("7/4/1776")
dDay = new Date("Jun 6 1944")
fortSumter = new Date("1861-04-12T04:30:00-05:00")


document.getElementById("date1").innerHTML = independenceDay;
document.getElementById("date2").innerHTML = dDay;
document.getElementById("date3").innerHTML = fortSumter;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("get1").innerHTML = "The year is " + day.getFullYear();

let month = months[day.getMonth()]
document.getElementById("get2").innerHTML = "The month is " + month;

let dayOfWeek = days[day.getDay()]
document.getElementById("get3").innerHTML = "The day of the week is " + dayOfWeek;

document.getElementById("get4").innerHTML = "The current time is " + day.getHours() + ":" + day.getMinutes();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const day2 = new Date("September 17, 2025");

day2.setFullYear(1789);

document.getElementById("set1").innerHTML = day2;

day2.setMonth(4)

document.getElementById("set2").innerHTML = day2;

day2.setDate(6)

document.getElementById("set3").innerHTML = day2;

day2.setDate(day2.getDate() + 486);

document.getElementById("set4").innerHTML = day2;