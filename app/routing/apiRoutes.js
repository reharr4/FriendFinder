var friends = require("../data/friends");

// routes
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });


    app.post("/api/friends", function(req, res){
        var friendScores = req.body;
        console.log(friendScores);

        // loop through friends array
        for (var i =0; i <friendScores.scores.length; i++){
            friendScores.scores[i] = parseInt(friendScores.scores[i]);
        }

         // minimum difference of answer score = best friend
         var minScoreDiff = 0;
        //  maximum difference of answer scores = least compatable
        // loop through scores comparing friend and user input one at a time, starting at 0 difference. Add difference to total
        // i think you would need to compare the total difference to the original minimum score for bestie, updating new minimum if it changes to compare for each subsequent friend in the array
        // after finding match, push to array
        friends.push();
        }
    )
}