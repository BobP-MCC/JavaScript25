$(function() {
    $("#submit").click(function() {
        event.preventDefault();
        line = $("#fname").val();
        line = line + " " + $("#lname").val();
        line = line + " will be dressing as " + $("#costume").val() + "<br>";
        $("#costumeList").append(line);
        $("#fname").val("");
        $("#lname").val("");
        $("#costume").val("");
    });

    $("#halloween").click(function() {
        $("#body").removeClass("masquerade-background")
        $("#main").removeClass("masquerade-main")
        $("#header").removeClass("masquerade-header")
        $("#button-group").removeClass("masquerade-button-group")
        $("#footer").removeClass("masquerade-footer")
        $("#body").addClass("halloween-background")
        $("#main").addClass("halloween-main")
        $("#header").addClass("halloween-header")
        $("#button-group").addClass("halloween-button-group")
        $("#footer").addClass("halloween-footer")
    });

    $("#masquerade").click(function() {
        $("#body").removeClass("halloween-background")
        $("#main").removeClass("halloween-main")
        $("#header").removeClass("halloween-header")
        $("#button-group").removeClass("halloween-button-group")
        $("#footer").removeClass("halloween-footer")
        $("#body").addClass("masquerade-background")
        $("#main").addClass("masquerade-main")
        $("#header").addClass("masquerade-header")
        $("#button-group").addClass("masquerade-button-group")
        $("#footer").addClass("masquerade-footer")
    });

    $("#larger").click(function() {
        var currentFontSize = parseInt($("main").css("font-size"));
        currentFontSize += 3
        setFont = currentFontSize + "px";
        $("main").css("font-size", setFont);
});

    $("#smaller").click(function() {
        var currentFontSize = parseInt($("main").css("font-size"));
        currentFontSize -= 3
        setFont = currentFontSize + "px";
        $("main").css("font-size", setFont);
    })});