// Business logic below this line:

// user logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numbers =  $("input.input-number").val();
    var numbers = parseInt(numbers);
    var newArray = [];
    newArray.push(numbers);
    newArray.forEach(function() {
    console.log(numbers);
    console.log(newArray)
    // if (isNaN(numbers)) {
    //   alert("Make sure you are entering a number")
    // } else 
      for (var index = 0; index <= numbers; index += 1) {
        if (index.toString().includes("3") === true) {
          numbers[index] = "///";
        } else if (index.toString().includes("2") === true) {
          numbers[index] = "-";
        } else if (index.toString().includes("1") === true) {
          numbers[index] = ".....";
        }
            $(".results ul").append("<li>" + index +"</li>")
        };
      });
      $("#results").show();
  });
});