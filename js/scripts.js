// Business logic below this line:
var numberFunction = function(number, string) {
  if (number.toString().includes(string)) {
    return true;
  }
  return false;
};
// user logic below this line:

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var addItem = function(number) {
      $(".results ul").append("<li>" + number + "</li>");
    };
    var numbers = parseInt($("input.input-number").val());
    $(".results ul").text("");
    for (var i = 0; i<= numbers; i ++) {
      if(numberFunction(i, "3")) {
        addItem("I'm Sorry John. I'm afraid I can't do that.");
      } else if (numberFunction(i, "2")) {
        addItem("Boop")
      } else if (numberFunction(i ,"1")) {
        addItem("Beep!")
      } else{
        addItem(i);
      }
    };
    $("#results").show();
  });
});