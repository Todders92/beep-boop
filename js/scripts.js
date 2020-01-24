// Business logic below this line:

// User logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#input-number").val().split());
    console.log(userInput);
    if (isNaN(userInput)) {
      alert("Make sure you are entering a number")
    } else 
      for (var i = 0; i <= userInput; i ++){
            $("#results ul").append("<li>" + i +"</li>")
            if (3 === userInput[i])
            userInput[i] = "im sorry"
            // var newI = "im sorry"
      }
      
    $("#results").show();
  });
});