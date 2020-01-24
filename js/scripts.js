// Business logic below this line:
var numberFun = function(number) {
  var numbers =[];
  for (var i = 0; i<= number; i += 1) {
    numbers.push(i);
  }
  for (var i = 0; i <= numbers; i += 1){
    console.log(numbers)
  }
};
// User logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#input-number").val());
    numberFun(number);
    $("#results").show();
  });
});