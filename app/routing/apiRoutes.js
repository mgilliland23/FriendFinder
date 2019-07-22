const path = require("path");

var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;

        //We are receiving a new friend object. Compare it with the other friends objects stored in friendsData
        //Return the friend object (just name) that is most compatible.
        //Return the friend object (just name) that is most compatible.

        var matchedFriend = findMostCompatible(newFriend);

        console.log("From server:  ");
        console.log(newFriend);

        friendsData.push(newFriend);

        console.log("Matched with: ");
        console.log(matchedFriend);
        res.json(matchedFriend);
    });
}

//Loop through each character stored in the database and return the one that has the lowest total difference in question scores 
function findMostCompatible(newFriend) {
    var currCompatibilityScore = 9999999999;
    var bestFriend;

    for (var i = 0; i < friendsData.length; i++) {
        var newCompatibilityScore = totalDifference(friendsData[i].scores, newFriend.scores);
        console.log("compat score: " + newCompatibilityScore);
        if (currCompatibilityScore > newCompatibilityScore) {
            bestFriend = {
                name: friendsData[i].name,
                photo_url: friendsData[i].photo_url
            };

            currCompatibilityScore = newCompatibilityScore;

        }



    }

    return bestFriend;
}

//Get the total difference in scores for all questions
function totalDifference(storedCharacterScore, incomingScore) {
    var totalDiff = 0;

    for (var i = 0; i < incomingScore.length; i++) {
        newAnsScore = parseInt(incomingScore[i], 10);
        storedAnsScore = parseInt(storedCharacterScore[i], 10);
        totalDiff += (Math.abs(newAnsScore - storedAnsScore));
    }
    console.log("total difference: " + totalDiff);
    return totalDiff;
}
