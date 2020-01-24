// Business logic below this line:

// User logic below this line:
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#results").show();
  });
});