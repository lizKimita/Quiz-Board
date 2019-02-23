$(document).ready(function(){
  $("form#qboxes").submit(function(event){
    event.preventDefault();
    var Q1 = parseInt($("input:radio[name=Question1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Question2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Question3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Question4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Question5]:checked").val());

    var name=$("input#studentsname").val();
    var total = ((Q1+Q2+Q3+Q4+Q5)/25*100);
    $("#marks").text ("Hello "+name+" "+",you scored "+ total + "%");

    if (total >= 80) $("#comment").text ("Excellent Performance!Congratulations!");
    else if (total <= 50)$("#comment").text ("Oh no! You have performed poorly, please retake the test!");
    else $("#comment").text ("Fair performance!");

    if (total <= 50) $("#reload").show();
       else $("#reload").hide();
  });

    $("#reload").click(function(){
      $("#marks").empty();
      $("#comment").empty();
  });

    $("form#stest").submit(function(event){
      event.preventDefault();
      $("#qboxes").slideDown();
       });
});
