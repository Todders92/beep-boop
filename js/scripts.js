// Business logic below this line:

// user logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input#input-number").val());
    console.log(numbers);
    if (isNaN(numbers)) {
      alert("Make sure you are entering a number")
    } else 
    for (var index = 0; index <= numbers; index += 1) {
      if (index.toString().includes("3")) {
        numbers[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
      } else if (index.toString().includes("2")) {
        numbers[index] = "Boop!";
      } else if (index.toString().includes("1")) {
        numbers[index] = "Beep!";
      }
          $("#results ul").append("<li>" + index +"</li>")
          console.log(numbers)
      };
      $("#results").show();
  });
});