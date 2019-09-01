var questions = [
  "I tend to be quiet.",
  "I am compassionate and have a soft heart.",
  "I tend to be disorganized.",
  "I worry a lot.",
  "I am fascinated by art, music or literature.",
  "I am dominant and act as a leader.",
  "I am sometimes rude to others.",
  "I have difficulty getting started on tasks.",
  "I am full of energy.",
  "I assume the best about people."
];
var choices = [
  "",
  "Disagree Strongly",
  "Disagree a Litte",
  "Neutral",
  "Agree a Little",
  "Agree Strongly"
];

for (var i = 0; i < questions.length; i++) {
  var formGroup = $("<div>").addClass("form-group text-center");
  var questionLabel = $("<label>").text(questions[i]);

  formGroup.append(questionLabel);
  $(".card-body").append(formGroup);

  var answers = $("<div>").addClass("choices");

  var ul = $("<ul>");

  for (var j = 1; j <= 5; j++) {
    //var formCheck = $("div").addClass("form-check form-check-inline");
    // html += " <div class='form-check form-check-inline'>"
    var input = $("<input>")
      .addClass("choice-input form-check-input")
      .attr("type", "radio")
      .attr("name", "question" + i);
    input.attr("id", "question" + i + "Radio" + j);
    input.attr("value", i);
    // var inputTD = $("<td>");

    // inputTD.append(input);
    // inputTR.append(inputTD);

    var label = $("<label>")
      .addClass("choice-label form-check-label")
      .attr("for", "question" + i + "Radio" + j);
    label.text(choices[j]);

    // var labelTD = $("<td>");

    // labelTD.append(label);
    // labelTR.append(labelTD);

    var li = $("<li>");
    li.append(label);
    li.append(input);
    ul.append(li);
  }

  //   answersTableBody.append(labelTR);
  //   answersTableBody.append(inputTR);

  //   answers.append($("<table>").append(answersTableBody));
  answers.append(ul);
  $(".card-body").append(answers);
}
var submit =
  "<button type='submit' class='btn btn-custom submit'>Submit</button>";
$(".card-body").append(submit);
