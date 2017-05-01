
$(function() {
$(#quiz-form).submit(function(event) {
  event.preventDefault();
  $(this).children("span .message").text("woohoo!");

  })
});