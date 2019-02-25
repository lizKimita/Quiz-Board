//USER INTERFACE(FRONT-END)
$(document).ready(function(){
  $("form#qboxes").submit(function(event){
    event.preventDefault();
    var Q1 = parseInt($("input:radio[name=Question1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Question2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Question3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Question4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Question5]:checked").val());
    var total = calculateScore(Q1,Q2,Q3,Q4,Q5);
    var name=$("input#studentsname").val();
    $("#marks").text ("Hello "+name+" "+",you scored "+ total + "%");
    grades(total);
  });
  $("#reload").click(function(){
    $("#marks").empty();
    $("#comment").empty();
    $("#reload").hide();
  });
  $("form#stest").submit(function(event){
        event.preventDefault();
        $("#qboxes").slideDown();
  });
});
//BUSINESS LOGIC(BACKEND)
  function calculateScore (ans1, ans2, ans3, ans4, ans5) {
    return (ans1+ans2+ans3+ans4+ans5)/25*100;
    };
    
  function grades(test) {
    if (test >= 80) {
      $("#comment").text ("Excellent Performance!Congratulations!");
    } else if (test <= 50){
      $("#comment").text ("Oh no! You have performed poorly, please retake the test!");
      $("#reload").show();
    } else {
      $("#comment").text ("Fair performance!");
    }
  };
