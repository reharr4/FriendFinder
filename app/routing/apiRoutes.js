var friendsData = require("../data/friends");

// routes
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });


    app.post("/api/friends", function(req, res){
        if (friendsData.length){
            friendsData.push(req.body);
            res.json(true);
        }
    });
};