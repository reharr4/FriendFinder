var friends = require("../data/friends");

// routes
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var bestFriend = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    console.log(req.body)
    //    parse POST result
    var userData = req.body;
    var userScores = userData.scores;

    // calculate difference between user score and each friend's scores
    var scoreDifference;

    // loop through friend possibilities
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      scoreDifference = 0;

      console.log(currentFriend.name);

      // loop through scores of each friend
      for (var s = 0; s < currentFriend.scores.length; s++) {
        var currentFriendScore = currentFriend.scores[s];
        var currentUserScore = userScores[s];

        // calculate difference between scores and add into scoreDifference
        scoreDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
      // if sum is less than differences of curent best math
      if (scoreDifference <= bestFriend.friendDifference) {
        // reset bestFriend to new friend
        bestFriend.name = currentFriend.name;
        bestFriend.photo = currentFriend.photo;
        bestFriend.friendDifference = scoreDifference;
      }
    }
    // push to array
    friends.push(userData);

    // return json
    res.json(bestFriend);
  });
};