// Business logic below this line:

// user logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numbers =  parseInt($("input.input-number").val());
    var newArray = [];
    newArray.push(numbers);
    newArray.forEach(function() {
    console.log(numbers);
    console.log(newArray)
    // if (isNaN(numbers)) {
    //   alert("Make sure you are entering a number")
    // } else 
      for (var index = 0; index <= numbers; index += 1) {
        if (index.toString().includes("3")) {
          numbers[index] = "///";
        } else if (index.toString().includes("2")) {
          numbers[index] = "-";
        } else if (index.toString().includes("1")) {
          numbers[index] = ".....";
        }
            $("#results ul").append("<li>" + index +"</li>")
        };
      });
      $("#results").show();
  });
});