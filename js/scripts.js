// Business logic below this line:

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
        // numbers.forEach(function(number) {
          // if (numbers[0] === 3) {
          // numbers[i] = "im sorry"
          // var newI = "im sorry"
          // });
          $("#results ul").append("<li>" + i +"</li>")
        // }
      };
      $("#results").show();
  });
});