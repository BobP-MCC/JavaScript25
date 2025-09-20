function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    let x = 8.9345
    let y = -3.489

    document.getElementById("round").innerHTML = Math.round(x);
    document.getElementById("ceil").innerHTML = Math.ceil(y);
    document.getElementById("floor").innerHTML = Math.floor(x);
    document.getElementById("trunc").innerHTML = Math.trunc(y);
    document.getElementById("sign").innerHTML = Math.sign(y)
    document.getElementById("pow").innerHTML = Math.pow(Math.trunc(x), (Math.trunc(Math.abs(y))));
    document.getElementById("min").innerHTML = Math.min(4, 8, 15, 16, 23, 42);
    document.getElementById("random").innerHTML = Math.random()



    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    document.getElementById("comparisons").innerHTML = "The operator == indicates that the two values are numerically equal regardless of the type data is being entered. Therefore 2 == '2' (comparing a number and a string) would return true. However the === determines whether the two values are identical both in their numerical value as well as their type. Therefore 2 === 2 would be true, but 2 === '2' would be false."



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}