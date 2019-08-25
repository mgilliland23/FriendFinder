var questions = ['I tend to be quiet.', 'I am compassionate and have a soft heart.', 'I tend to be disorganized.',
    'I worry a lot.', 'I am fascinated by art, music or literature.', 'I am dominant and act as a leader.',
    'I am sometimes rude to others.', 'I have difficulty getting started on tasks.', 'I am full of energy.',
    'I assume the best about people.'];
var choices = ['', 'Disagree Strongly', 'Disagree a Litte', 'Neutral', 'Agree a Little', 'Agree Strongly'];



for (var i = 0; i < questions.length; i++) {
    var html = "<div class='form-group text-center'><label>" + questions[i] + "</label> <br>";
    html += " <div class='choices'>";

    for (var j = 1; j <= 5; j++) {
        html += " <div class='form-check form-check-inline'>"
        html += "<input class='choice-input form-check-input' type='radio' name='question" + i + "' ";
        html += "id='question" + i + 'Radio' + j + "' value=" + j + ">";
        html += "<label class='choice-label form-check-label' for='question" + i + 'Radio' + j + "'>"
        html += choices[j] + " </label>" + "</div>";
    }

    var svg = "<svg class='svg' height='100' width='100%'><g class='g' fill='none' stroke='black'>";
    svg += "<path class='line' stroke-width='2' d = 'M5 55 l2000000 0' /></g></svg>";

    html += svg;

    $(".card-body").append(html);
}
var submit = "<button type='submit' class='btn btn-custom submit'>Submit</button>";
$(".card-body").append(submit);
