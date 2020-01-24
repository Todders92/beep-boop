// Business logic below this line:

// User logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
    var userInput = parseInt($("input#input-number").val());
    console.log(userInput);
    if (isNaN(userInput)) {
      alert("Make sure you are entering a number")
    } else
      for (var i = 0; i <= userInput; i += 1){
        $("#results ul").append("<li>" + i +"</li>")
      }
    
    $("#results").show();
  });
});