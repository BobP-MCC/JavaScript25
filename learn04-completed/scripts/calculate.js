function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
    document.getElementById("rooms").value = "1";
}

function estimate() {
    let name = document.getElementById("name").value;
    
    let numRooms = document.getElementById("rooms").value;
    
    let length1 = parseFloat(document.getElementById("rm1length").value);
    let width1 = parseFloat(document.getElementById("rm1width").value);
    let height1 = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt1 = ((length1 * height1 * 2) + (length1 * width1 * 2));
    let cost1 = (totalSqFt1 * .65).toFixed(2);
    document.getElementById("rm1cost").value = "$" + cost1;

    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
    let cost2 = (totalSqFt2 * .65).toFixed(2);
    if (numRooms >= 2) {
        document.getElementById("rm2cost").value = "$" + cost2;
    }

    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
    let cost3 = (totalSqFt3 * .65).toFixed(2);
    if (numRooms >= 3) {
        document.getElementById("rm3cost").value = "$" + cost3;
    }

    if (numRooms == 1){
        var totalCost = cost1;
        document.getElementById("estimate").innerHTML = (name + ", your estimated total cost is $" + totalCost.toFixed(2))
    } else if (numRooms == 2) {
        var totalCost = parseFloat(cost1) + parseFloat(cost2);
        document.getElementById("estimate").innerHTML = (name + ", your estimated total cost is $" + totalCost.toFixed(2))
    } else if (numRooms == 3) {
        var totalCost = parseFloat(cost1) + parseFloat(cost2) + parseFloat(cost3);
        document.getElementById("estimate").innerHTML = (name + ", your estimated total cost is $" + totalCost.toFixed(2))
    }

    
}

function showScreen() {
    let numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room1").style.display = "block";
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 2) {
        document.getElementById("room1").style.display = "block";
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 3) {
        document.getElementById("room1").style.display = "block";
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }
}
