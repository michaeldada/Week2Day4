$(document).ready(function() {
  $("button#example").click(function() {
    var age = parseInt(prompt("Enter your age, human."));

    if (age >= 21) {
      $(".show21").show();
    } else {
      $(".show20").show();
    }
  });
});
