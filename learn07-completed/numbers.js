function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Bob Peck"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */

    let x = 12;
    let y = "16";
    let z = x + y;
    document.getElementById("add").innerHTML = x + " + " + y + " = " + z;


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph

        let a = 45;
        b = a.toString();
        document.getElementById("to-string").innerHTML = 
            "a = " + a + "<br>" +
            "b = " + b + "<br>" +
            a + "(a) is a " + typeof a + " while " + b + "(b) is a " + typeof b;

    
// Demonstrate the use of toExponential() and print to the exponent paragraph

    let bignum = 1348975194875134;
    document.getElementById("exponent").innerHTML = 
        bignum + "<br>" +
        bignum.toExponential(2) + "<br>" +
        bignum.toExponential(4) + "<br>" +
        bignum.toExponential(6) + "<br>" +
        bignum.toExponential(16);

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    let gasprice = 3.295
    document.getElementById("fixed").innerHTML =
        gasprice.toFixed(0) + "<br>" +
        gasprice.toFixed(1) + "<br>" +
        gasprice.toFixed(2) + "<br>" +
        gasprice.toFixed(3) + "<br>" +
        gasprice.toFixed(4) + "<br>";

    // Demonstrate the use of toPrecision() and print to the precision paragraph

    let nump = 4.9867
    document.getElementById("precision").innerHTML =
        nump.toPrecision(1) + "<br>" +
        nump.toPrecision(2) + "<br>" +
        nump.toPrecision(3) + "<br>" +
        nump.toPrecision(4) + "<br>" +
        nump.toPrecision(5) + "<br>";

    // Demonstrate the use of parseFloat() and print to the float paragraph

    document.getElementById("float").innerHTML =
        parseFloat("45") + "<br>" +
        parseFloat("45.6") + "<br>" +
        parseFloat("3 6 9 45") + "<br>" +
        parseFloat("3 kids") + "<br>" +
        parseFloat("FF2") + "<br>";

    // Demonstrate the use of parseInt() and print to the int paragraph

    document.getElementById("int").innerHTML =
        parseInt("45") + "<br>" +
        parseInt("45.6") + "<br>" +
        parseInt("3 6 9 45") + "<br>" +
        parseInt("3 kids") + "<br>" +
        parseInt("I have 3 kids") + "<br>";


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    document.getElementById("equals").innerHTML =
        "=== indicates that two values are identical in every way. For example. 1 === 1 is true, because each side of the equation is identical in value and type. However, 1 === '1' is false, because 1 is a numbe but '1' is a string. On the other hand, == indicates the two values are equal even if they are one is a number and the other is a string, hence 1 == '1' is true. ";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML =
        "In JavaScript the and operator (&&) always takes precedence over the or operator (||). For example, in the expressions 1 == 1 || 2 == 2 && 3 == 4, the && operator is evaluated first, so the expression is equivalent to 1 == 1 || (2 == 2 && 3 == 4). Since 2 == 2 is true and 3 == 4 is false, the expression evaluates to true || false, which is true. If you want to change the order of evaluation, you can use parentheses to group || statements to take precedence over && statements.";


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph

    
    

    var input = prompt("Enter a number between 1 and 5");
    var switchResult;

    switch(input) {

        case '1':
            switchResult = "One is the loneliest number";
            break;
        case '2':
            switchResult = "2B or not 2B...";
            break;
        case '3':
            switchResult = "Three is a crowd";
            break;
        case '4':
            switchResult = "Four score and seven years ago";
            break;
        case '5':
            switchResult = "Five for fighting";
            break;
        default:
            switchResult = "Seriously? Try again.";
    }
    document.getElementById("switch").innerHTML = switchResult;


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    
    let age = prompt("Enter your age");
    let canVote = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
    document.getElementById("ternary").innerHTML = canVote;
}
