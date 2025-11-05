$(document).ready(function(){
  $("#up").click(function(){
    $("#move").animate({marginTop: "-=50px"});
  });
  $("#down").click(function(){
    $("#move").animate({marginTop: "+=50px"});
  });
  $("#left").click(function(){
    $("#move").animate({marginLeft: "-=50px"});
  });
  $("#right").click(function(){
    $("#move").animate({marginLeft: "+=50px"});
  });
  $("#phone-home").click(function(){
    $("#et").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#et").stop();
  });
  $("#pity").click(function(){
  $("#MrT-image").slideUp(3000).slideDown(3000);
  });
});
    $("#transform").click(function(){
      $("#optimus-truck").fadeOut(2000, function(){
        $("#optimus-robot").fadeIn(2000, function(){
          $("#optimus-robot").fadeOut(2000, function(){
            $("#optimus-truck").fadeIn(2000);
          });
        });
      });
    });