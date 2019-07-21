
$("input[type=radio]").on("click", function (event) {
    //event.preventDefault();
    $(this).parent().parent().find("input[type=radio]").addClass('is-answered');
});


//When the submit button is clicked, send the answers to the server and match with a friend
$(".submit").on("click", function (event) {
    event.preventDefault();

    var scores = [];
    var answers = $("input[type=radio]:checked");
    //Get the answers for each question
    for (var i = 0; i < answers.length; i++) {
        scores.push(answers[i].getAttribute("value"));
    }

    // Here we grab the form elements
    var newFriend = {
        name: $('#name').val().trim(),
        phoneNumber: $('#photo_url').val().trim(),
        scores: scores

    };
    console.log(newFriend);

    var currentURL = window.location.origin;

    $.post(currentURL + "/api/friends", newFriend,
        function (data) {
            console.log(data)
            // If a table is available... tell user they are booked.
            if (data == true) {
                alert("Survey Submitted")
            }
            // If a table is available... tell user they on the waiting list.
            if (data == false) {
                alert("There was a problem submitting your survey.")
            }
            // // Clear the form when submitting
            // $('#reserve_name').val("");
            // $('#reserve_phone').val("");
            // $('#reserve_email').val("");
            // $('#reserve_uniqueID').val("");
        });
    return false;

});