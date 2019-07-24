var path = require("path");

// routes
module.exports = function(app){
    app.get(#, function(req, res){
        res.sendFile(path.join(_dirname, ""));
    });
    app.get(#, function(req,res){
        res.sendFile(path.join(_dirname, ""));
    });
    app.get("#", function(req, res){
        res.sendFile(path.join(_dirname, #));
    });
};