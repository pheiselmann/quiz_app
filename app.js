
$(function() {
$("#quiz-form").submit(function(event) {
  event.preventDefault();
  var answer = $("form input[type='radio']:checked").val();
  //$(this).children("span .message").text("woohoo!");
  alert("Value of Submitted Radio is: " + answer);
  })
});