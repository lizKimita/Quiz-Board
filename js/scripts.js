$(document).ready(function(){
  $("form#qboxes").submit(function(event){
    event.preventDefault();
    var Q1 = parseInt($("input:radio[name=Question1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Question2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Question3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Question4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Question5]:checked").val());
    var total = ((Q1+Q2+Q3+Q4+Q5)/25*100);
    $("#marks").text("You scored "+ total + "%");
    if (total >= 80) $("#comment").text ("Excellent Performance!");
    else if (total <= 50)$("#comment").text ("Poor performance, please retake the test!");
    else $("#comment").text ("Fair performance!")
  });
});
