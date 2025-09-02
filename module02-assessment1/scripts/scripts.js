//alert("Use the code BESTBURGER at checkout and get an additional 20% off!");

function reset() {
    let today = new Date();
    document.getElementById("name").value = "";
    document.getElementById("burger").value = "0";
    document.getElementById("cheesesteak").value = "0";
    document.getElementById("french-dip").value = "0";
    document.getElementById("buffalo-chicken-wrap").value = "0";
    document.getElementById("dominic-special").value = "0";

    document.getElementById("classic-martini").value = "0";
    document.getElementById("manhattan").value = "0";
    document.getElementById("old-fashioned").value = "0";
    document.getElementById("sidecar").value = "0";
    document.getElementById("frozen-strawberry-margarita").value = "0";

    document.getElementById("chocolate-lava-cake").value = "0";
    document.getElementById("cheesecake").value = "0";
    document.getElementById("key-lime-pie").value = "0";
    document.getElementById("brownie-a-la-mode").value = "0";
    document.getElementById("frozen-grasshopper").value = "0";
}

function total() {
    let burger = parseFloat(document.getElementById("burger").value);
    let cheesesteak = parseFloat(document.getElementById("cheesesteak").value);
    let frenchDip = parseFloat(document.getElementById("french-dip").value);
    let buffaloChickenWrap = parseFloat(document.getElementById("buffalo-chicken-wrap").value);
    let dominicSpecial = parseFloat(document.getElementById("dominic-special").value);
    let sandwichtotal = burger*16 + cheesesteak*13 + frenchDip*12 + buffaloChickenWrap*10 + dominicSpecial*7;
    document.getElementById("sandwich-total").value = "$" + sandwichtotal;
    document.getElementById("sandwich-subtotal").value = "$" + sandwichtotal;

    let classicMartini = parseFloat(document.getElementById("classic-martini").value);
    let manhattan = parseFloat(document.getElementById("manhattan").value);
    let oldFashioned = parseFloat(document.getElementById("old-fashioned").value);
    let sidecar = parseFloat(document.getElementById("sidecar").value);
    let frozenStrawberryMargarita = parseFloat(document.getElementById("frozen-strawberry-margarita").value);
    let drinktotal = classicMartini*15 + manhattan*13 + oldFashioned*13 + sidecar*13 + frozenStrawberryMargarita*12;
    document.getElementById("cocktail-total").value = "$" + drinktotal;
    document.getElementById("cocktail-subtotal").value = "$" + drinktotal;

    let chocolateLavaCake = parseFloat(document.getElementById("chocolate-lava-cake").value);
    let cheesecake = parseFloat(document.getElementById("cheesecake").value);
    let keyLimePie = parseFloat(document.getElementById("key-lime-pie").value);
    let brownieALaMode = parseFloat(document.getElementById("brownie-a-la-mode").value);
    let frozenGrasshopper = parseFloat(document.getElementById("frozen-grasshopper").value);
    let desserttotal = chocolateLavaCake*9 + cheesecake*7 + keyLimePie*7 + brownieALaMode*9 + frozenGrasshopper*12;
    document.getElementById("dessert-total").value = "$" + desserttotal;
    document.getElementById("dessert-subtotal").value = "$" + desserttotal;

    let name = document.getElementById("name").value;
    let mealTotal = sandwichtotal + drinktotal + desserttotal;
    document.getElementById("meal-total").innerHTML = (name + ", the total cost of your meal is $" + mealTotal)

}