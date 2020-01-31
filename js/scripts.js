// Business logic below this line:

// user logic below this line:
var makeItem = function(item) {
  $(".results ul").append("<li>" + item + "</li>")
}
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input.input-number").val());
    for (var i = 0; i<= numbers; i ++) {
      if(i.toString().includes("3")) {
        makeItem("I'm Sorry John. I'm afraid I can't do that.");
      } else if (i.toString().includes("2")) {
        makeItem("boop")
      } else if (i.toString().includes("1")) {
        makeItem("beep")
      } else{
        makeItem(i)
      }
    };
    
  });
  $(".results").show();
});