$(document).ready(function() {
  $("button#example").click(function() {
    var methods = ['<li>pop(): remove the last element</li>', '<li>push(): add an element to the end</li>', '<li>concat(): combine with another array</li>', '<li>reverse(): reverse the order of the array</li>'];

    methods.forEach(function(method){
      $("#ex-methods").append(method);
    });
  });
});
