$(document).ready(function() {
  $("#story").submit(function() {
    var blanks = ["name", "name2"]

    blanks.forEach(function(blank) {
      var userInput = ("input#" + blank).val();
      ("." + blank).text(userInput);
    });
  });
});
