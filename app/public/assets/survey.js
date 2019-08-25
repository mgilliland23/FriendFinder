$("input[type=radio]").on("click", function(event) {
  //event.preventDefault();
  $(this)
    .parent()
    .parent()
    .find("input[type=radio]")
    .addClass("is-answered");
});

//When the submit button is clicked, send the answers to the server and match with a friend
$(".submit").on("click", function(event) {
  event.preventDefault();

  var scores = [];
  var answers = $("input[type=radio]:checked");
  //Get the answers for each question
  for (var i = 0; i < answers.length; i++) {
    var val = answers[i].getAttribute("value");
    scores.push(parseInt(val, 10));
  }

  // Here we grab the form elements
  var newFriend = {
    name: $("#name")
      .val()
      .trim(),
    photo_url: $("#photo_url")
      .val()
      .trim(),
    scores: scores
  };

  var currentURL = window.location.origin;

  //post to the friends API and alert the response for the most compatible character
  $.post(currentURL + "/api/friends", newFriend, function(data) {
    console.log(data);
    // .
    if (data) {
      //Insert name and photo ID into modal (card)
      console.log("constructing card");
      //alert("You are most compatible with: " + data.name + " IMg: " + data.photo_url);

      var img = $("<img>").addClass("card-img-top  mx-auto d-block");
      img.attr("src", data.photo_url);

      var h5 = $("<h5>").text("You are most compatible with " + data.name);
      $(".modal-header").empty();
      $(".modal-header").append(h5);

      $(".modal-body").empty();
      $(".modal-body").append(img);
      $("#compatability-modal").modal("toggle");
    }
    // .
    else {
      alert("There was a problem submitting your survey.");
    }
  });
  return false;
});

$(".form-check").on("click", function() {
  $(this)
    .siblings("svg")
    .css("opacity", ".1");
});

$(document).ready(function() {
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
  var $choices = $(".choices");

  function checkWidth() {
    var windowsize = $window.width();
    console.log("window size: ", windowsize);
    if (windowsize > 1000) {
      //if the window is greater than 440px wide then add margin to the choices
      $choices.css("margin", "25px 10% 0 10%");
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});
