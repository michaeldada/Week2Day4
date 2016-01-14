$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "name2"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();

  });
});
