$(document).ready(function() {
  $("button#example").click(function() {
    var insults = ['a baby', 'not an adult', 'still a baby'];

    for (var index = 0; index < insults.length; index += 1) {
      alert('You are ' + insults[index] + '!');
    }
  });
});
