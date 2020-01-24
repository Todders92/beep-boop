// Business logic below this line:
var phrase1 = "im sorry jon"
// User logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input#input-number").val().split());
    console.log(numbers);
    if (isNaN(numbers)) {
      alert("Make sure you are entering a number")
    } else 
      for (var i = 0; i <= numbers; i ++){
          if (i === 3) {
            var i = phrase1
          }
          $("#results ul").append("<li>" + i +"</li>")
      };
      $("#results").show();
  });
});