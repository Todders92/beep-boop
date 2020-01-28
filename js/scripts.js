// Business logic below this line:

// user logic below this line:
var makeItem = function(item) {
  $("results ul").append("<li>" + item + "</li>")
}
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
        if (index.toString().includes("3")) {
          newArray[index] = "///";
        } else if (index.toString().includes("2")) {
          newArray[index] = "-";
        } else if (index.toString().includes("1")) {
          newArray[index] = ".....";
        } else {

        }
      };
      });
      for (i = 0; i < newArray.length; i ++) {
        makeItem(newArray[i])
        $("#results").show();
      }
  });
});